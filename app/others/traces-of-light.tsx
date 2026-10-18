"use client";

import { useEffect, useRef } from "react";
import styles from "./others.module.css";

// Sizes and speeds are CSS pixels and seconds; opacity is intentionally low.
const IDLE_PARTICLE_COUNT = 15;
const MAX_TRAIL_PARTICLES = 128;
const IDLE_RADIUS_MIN = 0.7;
const IDLE_RADIUS_MAX = 2.5;
const PARTICLE_SIZE_MIN = 0.6;
const PARTICLE_SIZE_MAX = 3;
const TRAIL_CLUSTER_SLOW = 3;
const TRAIL_CLUSTER_FAST = 5;
const PARTICLE_LIFETIME_MIN = 1;
const PARTICLE_LIFETIME_MAX = 2.5;
const TRAIL_SPAWN_RATE = 29; // Maximum clusters per second, while moving only (+32%).
const TRAIL_SPREAD = 15;
const PARTICLE_SPEED = 5;
const PARTICLE_OPACITY = 0.55;
const IDLE_OPACITY = 0.55;
const TWINKLE_SPEED = 0.45;
const MAX_DEVICE_PIXEL_RATIO = 2;
const CURSOR_GLOW_DIAMETER = 16;
const CURSOR_BREATH_CYCLE = 2.6; // Seconds.
const CURSOR_GLOW_OPACITY = 0.56;
const CURSOR_FADE_SPEED = 10;

const random = (min: number, max: number) => min + Math.random() * (max - min);
type Particle = {
  x: number; y: number; vx: number; vy: number;
  size: number; opacity: number; age: number; lifetime: number;
};

export default function TracesOfLight() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const page = canvas?.parentElement;
    const context = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !page || !context) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mouse = window.matchMedia("(any-hover: hover) and (any-pointer: fine)");
    const idle = Array.from({ length: IDLE_PARTICLE_COUNT }, () => ({
      x: Math.random(), y: Math.random(),
      size: 2 * (IDLE_RADIUS_MIN + Math.random() ** 3 * (IDLE_RADIUS_MAX - IDLE_RADIUS_MIN)),
      opacity: random(0.15, IDLE_OPACITY),
      phase: random(0, Math.PI * 2), speed: random(0.65, 1.3),
    }));
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let previousTime = 0;
    let elapsed = 0;
    let previousPointer: { x: number; y: number; time: number } | null = null;
    let lastSpawn = 0;
    let cursor: { x: number; y: number } | null = null;
    let cursorVisible = false;
    let cursorOpacity = 0;

    const animated = () => !reduced.matches && mouse.matches;
    const point = (x: number, y: number, size: number, opacity: number) => {
      context.fillStyle = `rgba(226, 228, 232, ${opacity})`;
      context.beginPath();
      context.arc(x, y, size / 2, 0, Math.PI * 2);
      context.fill();
    };
    const draw = (delta: number) => {
      context.clearRect(0, 0, width, height);
      for (const particle of idle) {
        const pulse = animated()
          ? Math.pow((Math.sin(elapsed * TWINKLE_SPEED * particle.speed + particle.phase) + 1) / 2, 12)
          : 0.25;
        point(particle.x * width, particle.y * height, particle.size, particle.opacity * pulse);
      }
      particles = particles.filter((particle) => particle.age < particle.lifetime);
      for (const particle of particles) {
        particle.age += delta;
        const damping = Math.exp(-1.4 * delta);
        particle.vx *= damping;
        particle.vy *= damping;
        particle.x += particle.vx * delta;
        particle.y += particle.vy * delta;
        const progress = Math.min(1, particle.age / particle.lifetime);
        const fadeIn = Math.min(1, particle.age / 0.15);
        point(particle.x, particle.y, particle.size, particle.opacity * fadeIn * (1 - progress) ** 2);
      }
      if (cursor && animated()) {
        cursorOpacity += ((cursorVisible ? 1 : 0) - cursorOpacity) * (1 - Math.exp(-CURSOR_FADE_SPEED * delta));
        if (cursorOpacity > 0.001) {
          const breath = (1 - Math.cos(elapsed * Math.PI * 2 / CURSOR_BREATH_CYCLE)) / 2;
          const radius = CURSOR_GLOW_DIAMETER / 2 * (0.96 + breath * 0.04);
          const opacity = CURSOR_GLOW_OPACITY * (0.75 + breath * 0.25) * cursorOpacity;
          const gradient = context.createRadialGradient(cursor.x, cursor.y, 0, cursor.x, cursor.y, radius);
          gradient.addColorStop(0, `rgba(240, 242, 246, ${opacity})`);
          gradient.addColorStop(0.2, `rgba(226, 228, 232, ${opacity * 0.65})`);
          gradient.addColorStop(0.55, `rgba(226, 228, 232, ${opacity * 0.16})`);
          gradient.addColorStop(1, "rgba(226, 228, 232, 0)");
          context.fillStyle = gradient;
          context.fillRect(cursor.x - radius, cursor.y - radius, radius * 2, radius * 2);
        }
      }
    };
    const tick = (time: number) => {
      const delta = previousTime ? Math.min((time - previousTime) / 1000, 0.05) : 0;
      previousTime = time;
      elapsed += delta;
      draw(delta);
      frame = window.requestAnimationFrame(tick);
    };
    const sync = () => {
      window.cancelAnimationFrame(frame);
      previousTime = 0;
      previousPointer = null;
      cursor = null;
      cursorVisible = false;
      cursorOpacity = 0;
      particles = [];
      if (document.hidden) return;
      draw(0);
      if (animated()) frame = window.requestAnimationFrame(tick);
    };
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, MAX_DEVICE_PIXEL_RATIO);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      sync();
    };
    const resetPointer = () => { previousPointer = null; cursorVisible = false; };
    const move = (event: PointerEvent) => {
      if (!animated() || document.hidden || event.pointerType !== "mouse") return;
      const now = performance.now();
      const current = { x: event.clientX, y: event.clientY, time: now };
      cursor = { x: current.x, y: current.y };
      cursorVisible = true;
      const previous = previousPointer;
      previousPointer = current;
      if (!previous || now - lastSpawn < 1000 / TRAIL_SPAWN_RATE) return;
      const dx = current.x - previous.x;
      const dy = current.y - previous.y;
      const distance = Math.hypot(dx, dy);
      if (distance < 0.5) return;
      lastSpawn = now;
      const speed = Math.min(700, distance / Math.max((now - previous.time) / 1000, 0.008));
      const count = speed > 250 ? TRAIL_CLUSTER_FAST : TRAIL_CLUSTER_SLOW;
      for (let index = 0; index < count; index++) {
        const lag = random(0.15, 0.9);
        particles.push({
          x: current.x - dx * lag + random(-TRAIL_SPREAD, TRAIL_SPREAD),
          y: current.y - dy * lag + random(-TRAIL_SPREAD, TRAIL_SPREAD),
          vx: dx / distance * speed * 0.025 + random(-PARTICLE_SPEED, PARTICLE_SPEED),
          vy: dy / distance * speed * 0.025 + random(-PARTICLE_SPEED, PARTICLE_SPEED),
          size: PARTICLE_SIZE_MIN + Math.random() ** 2.5 * (PARTICLE_SIZE_MAX - PARTICLE_SIZE_MIN),
          opacity: random(PARTICLE_OPACITY * 0.4, PARTICLE_OPACITY),
          age: 0,
          lifetime: random(PARTICLE_LIFETIME_MIN, PARTICLE_LIFETIME_MAX),
        });
      }
      if (particles.length > MAX_TRAIL_PARTICLES) particles.splice(0, particles.length - MAX_TRAIL_PARTICLES);
    };

    resize();
    page.addEventListener("pointermove", move, { passive: true });
    page.addEventListener("pointerleave", resetPointer);
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("scroll", resetPointer, { passive: true });
    document.addEventListener("visibilitychange", sync);
    reduced.addEventListener("change", sync);
    mouse.addEventListener("change", sync);
    return () => {
      window.cancelAnimationFrame(frame);
      page.removeEventListener("pointermove", move);
      page.removeEventListener("pointerleave", resetPointer);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", resetPointer);
      document.removeEventListener("visibilitychange", sync);
      reduced.removeEventListener("change", sync);
      mouse.removeEventListener("change", sync);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.traces} aria-hidden="true" />;
}
