const { spawn } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

async function audit() {
  const profile = fs.mkdtempSync(path.resolve('.tmp/resume-layout-'));
  const browser = spawn('C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', [
    '--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
    '--remote-debugging-port=9334', `--user-data-dir=${profile}`, 'about:blank',
  ], { windowsHide: true, stdio: 'ignore' });
  let socket;
  try {
    let targets;
    for (let attempt = 0; attempt < 100; attempt++) {
      try { targets = await (await fetch('http://127.0.0.1:9334/json/list')).json(); if (targets.length) break; } catch {}
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    if (!targets?.length) throw Error('Headless browser did not start');
    socket = new WebSocket(targets.find(t => t.type === 'page').webSocketDebuggerUrl);
    await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject; });
    let sequence = 0;
    const pending = new Map();
    socket.onmessage = ({ data }) => {
      const message = JSON.parse(data);
      const request = pending.get(message.id);
      if (request) { pending.delete(message.id); message.error ? request.reject(Error(JSON.stringify(message.error))) : request.resolve(message.result); }
    };
    const send = (method, params = {}) => new Promise((resolve, reject) => {
      const id = ++sequence; pending.set(id, { resolve, reject }); socket.send(JSON.stringify({ id, method, params }));
    });
    await send('Page.enable');
    for (const width of [1600, 1280, 1024, 700, 390]) {
      await send('Emulation.setDeviceMetricsOverride', { width, height: 1000, deviceScaleFactor: 1, mobile: false });
      await send('Page.navigate', { url: 'http://localhost:3006/resume' });
      let measurement;
      for (let attempt = 0; attempt < 100; attempt++) {
        const result = await send('Runtime.evaluate', { expression: `(() => {
          const education = document.getElementById('education-heading')?.parentElement;
          const skills = document.getElementById('skills-heading')?.parentElement;
          if (!education || !skills || document.readyState !== 'complete') return null;
          const parent = education.parentElement;
          const box = element => { const r = element.getBoundingClientRect(); return {x:r.x, y:r.y, width:r.width, height:r.height}; };
          return {viewport:innerWidth, education:box(education), skills:box(skills), parent:box(parent), tracks:getComputedStyle(parent).gridTemplateColumns, gap:getComputedStyle(parent).columnGap, aligned:[...skills.querySelectorAll('h2,h3')].map(e=>e.getBoundingClientRect().left), overflow:document.documentElement.scrollWidth > innerWidth};
        })()`, returnByValue: true });
        measurement = result.result.value;
        if (measurement) break;
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      if (!measurement) throw Error('Page did not render');
      console.log(JSON.stringify(measurement));
      if (width === 1600) {
        const screenshot = await send('Page.captureScreenshot', { format: 'png' });
        fs.writeFileSync(path.resolve(`.tmp/resume-position-${process.argv[2] || 'audit'}.png`), Buffer.from(screenshot.data, 'base64'));
      }
    }
    await send('Browser.close');
  } finally {
    socket?.close();
    browser.kill();
  }
}
audit().catch(error => { console.error(error); process.exitCode = 1; });
