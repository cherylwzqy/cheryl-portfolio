const { spawn } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const assert = require('node:assert/strict');
const routes = ['resume', 'ux-service/bmw-scadpro'];
const prefix = process.argv[2] === 'root' ? '' : '/cheryl-portfolio';
let server;
async function run() {
 if(prefix) {
 server = http.createServer((req,res)=>{
  let p = decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  if (!p.startsWith(prefix+'/')) {res.writeHead(404).end();return;}
  p=path.join(process.cwd(),'out',p.slice(prefix.length));
  if(fs.existsSync(p) && fs.statSync(p).isDirectory()) p=path.join(p,'index.html');
  if(!fs.existsSync(p)){res.writeHead(404).end();return;}
  const types={'.html':'text/html','.js':'application/javascript','.css':'text/css','.png':'image/png','.txt':'text/plain'};
  res.setHeader('Content-Type',types[path.extname(p)]||'application/octet-stream'); fs.createReadStream(p).pipe(res);
 });
 await new Promise(r=>server.listen(3021,'127.0.0.1',r));
 }
 const browser=spawn('C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',['--headless=new','--disable-gpu','--no-first-run','--no-default-browser-check','--remote-debugging-port=9345',`--user-data-dir=${path.resolve('.tmp/navigation-browser')}`,'about:blank'],{windowsHide:true,stdio:'ignore'});
 let socket;
 try {
 let targets;
 for(let i=0;i<100;i++){try {targets=await(await fetch('http://127.0.0.1:9345/json/list')).json(); if(targets.length)break;}catch{} await new Promise(r=>setTimeout(r,100));}
 assert(targets?.length,'Browser startup failed');
 socket=new WebSocket(targets.find(t=>t.type==='page').webSocketDebuggerUrl);
 await new Promise((r,j)=>{socket.onopen=r;socket.onerror=j;});
 let seq=0;const pending=new Map();
 socket.onmessage=({data})=>{const m=JSON.parse(data);if(pending.has(m.id)){const {r,j}=pending.get(m.id);pending.delete(m.id);m.error?j(Error(JSON.stringify(m.error))):r(m.result);}};
 const send=(method,params={})=>new Promise((r,j)=>{const id=++seq;pending.set(id,{r,j});socket.send(JSON.stringify({id,method,params}));});
 await send('Page.enable');
 let checks=0; const headers = new Map();
 for(const width of [320,390,768,1440]){
 await send('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:false});
 for(const route of routes){
 const url=`http://127.0.0.1:${prefix?3021:3022}${prefix}/${route}${route?'/':''}`;
 await send('Page.navigate',{url});
 let data;
 for(let i=0;i<60;i++){
 await new Promise(r=>setTimeout(r,100));
 const result=await send('Runtime.evaluate',{expression:`JSON.stringify((()=>{const navs=[...document.querySelectorAll('nav[aria-label="Portfolio"]')];const nav=navs[0];const box=nav?.getBoundingClientRect();return {ready:document.readyState,url:location.href,navs:navs.length,text:nav?.innerText,links:nav?[...nav.querySelectorAll('a')].map(a=>({text:a.innerText,href:a.getAttribute('href')})):[],box:box?{x:box.x,y:box.y,right:box.right,bottom:box.bottom}:null,children:nav?[...nav.children].map(e=>({left:e.getBoundingClientRect().left,right:e.getBoundingClientRect().right})):[],contentTop:[...document.querySelectorAll('main header, main h1, main p')].find(e=>!e.closest('nav'))?.getBoundingClientRect().top,overflow:document.documentElement.scrollWidth>innerWidth,main:!!document.querySelector('main')};})())`,returnByValue:true});
 try{data=JSON.parse(result.result.value);}catch{}
 if(data?.ready==='complete'&&data.url.replace(/\/$/,'')===url.replace(/\/$/,'')&&data.main)break;
 }
 assert(data?.main,`No page ${route}`);
 assert.equal(data.navs,route?1:0,`${route} at ${width}: header count`);
 if(data.overflow){const r=await send('Runtime.evaluate',{expression: `JSON.stringify([...document.querySelectorAll('body *')].map(e=>({tag:e.tagName,cls:e.className,x:e.getBoundingClientRect().x,right:e.getBoundingClientRect().right})).filter(e=>e.right>innerWidth||e.x<0).slice(0,20))`,returnByValue:true});console.log(route,width,r.result.value);} assert(!data.overflow,`${route} at ${width}: horizontal overflow`);
 if(route){
 if(data.children.length===2)assert(data.children[0].right<=data.children[1].left,`${route} at ${width}: navigation links overlap`);
 assert(data.box.x>=0&&data.box.right<=width&&data.box.y>=24,`${route}: nav bounds`);
 const home=data.links.filter(l=>l.href===prefix+'/');assert.equal(home.length,1,`${route}: home`);
 if(route==='resume'||route==='contact'){assert.equal(data.links.length,1);assert.equal(home[0].text,'BACK TO HOME');}
 if(route.startsWith('lighting-motion/')) assert(data.links.some(l=>l.href.replace(/\/$/,'')===prefix+'/lighting-motion'&&l.text.startsWith('\u2190 BACK TO LIGHTING / MOTION')));
 if(route.startsWith('ux-service/')) assert(data.links.some(l=>l.href.replace(/\/$/,'')===prefix+'/ux-service'&&l.text==='\u2190 BACK TO UX / SERVICE'));
 }
 if(route==='resume') {
 const result=await send('Runtime.evaluate',{expression: `JSON.stringify((()=>{const header=document.querySelector('main section > header'); const b=header.getBoundingClientRect(); const a=header.querySelector('a'); const l=header.querySelector('span').getBoundingClientRect(); const r=a.getBoundingClientRect(); const css=getComputedStyle(header); return {x:b.x,y:b.y,right:b.right,height:b.height,leftBottom:l.bottom,rightTop:r.top,leftRight:l.right,rightLeft:r.left,letterSpacing:css.letterSpacing,homes:[...document.querySelectorAll('a')].filter(e=>e.innerText==='BACK TO HOME').length,old:document.body.innerText.includes('PROFILE / 01'),year:document.body.innerText.includes('Graduated in 2025'),pdfs:[...document.querySelectorAll('a[download]')].map(e=>e.getAttribute('href'))};})())`,returnByValue:true});
 const h=JSON.parse(result.result.value); assert.equal(h.homes,1);assert(!h.old);assert(h.year);assert(h.leftRight<=h.rightLeft);assert.equal(h.height,44); assert.equal(h.pdfs.length,2);assert(h.pdfs.every(p=>p.startsWith(prefix+'/Resume/')));headers.set(width,h);
 } else {const h=headers.get(width);assert(Math.abs(h.x-data.box.x)<1);assert(Math.abs(h.y-data.box.y)<1);assert(Math.abs(h.right-data.box.right)<1);}
 checks++;
 }
 }
 console.log(`PASS: ${checks} browser route/viewport checks (${prefix||'root'}): single Home link, header alignment matching BMW, no overflow, unchanged PDF URLs, and graduation text.`);
 }finally{socket?.close();browser.kill();server?.close();}
}
run().catch(e=>{console.error(e);server?.close();process.exitCode=1;});
