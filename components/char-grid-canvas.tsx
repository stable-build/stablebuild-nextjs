"use client";

import { useEffect, useRef } from "react";

import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

const CHARS = ["[", "<", ">", "/", "*", ";", "=", "_", "∷", "◈", "◎", "⬡", "◇", "◆"];

export function CharGridCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const spacing = 34;
    const fontSize = 11;
    const waveSpeed = prefersReducedMotion ? 0.00009 : 0.00042;
    const opacityMin = 0.035;
    const opacityMax = prefersReducedMotion ? 0.14 : 0.28;
    const deadZoneX = 0.34;
    const deadZoneY = 0.28;

    let width = 0;
    let height = 0;
    let animation = 0;
    let cells: Array<{
      x: number;
      y: number;
      nx: number;
      ny: number;
      char: string;
      inDeadZone: boolean;
      phaseOffset: number;
    }> = [];

    const buildCells = () => {
      width = parent.clientWidth;
      height = parent.clientHeight;

      canvas.width = Math.max(1, width * window.devicePixelRatio);
      canvas.height = Math.max(1, height * window.devicePixelRatio);
      context.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);

      const columns = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;

      let seed = 42;
      const nextRand = () => {
        seed = (seed * 1664525 + 1013904223) & 0xffffffff;
        return (seed >>> 0) / 0xffffffff;
      };

      cells = [];

      for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
          const x = column * spacing + spacing * 0.5;
          const y = row * spacing + spacing * 0.5;
          const nx = x / width - 0.5;
          const ny = y / height - 0.5;
          const inDeadZone =
            (nx * nx) / (deadZoneX * deadZoneX) + (ny * ny) / (deadZoneY * deadZoneY) < 1;

          cells.push({
            x,
            y,
            nx,
            ny,
            char: CHARS[Math.floor(nextRand() * CHARS.length)],
            inDeadZone,
            phaseOffset: nextRand() * Math.PI * 2,
          });
        }
      }
    };

    const draw = (timestamp: number) => {
      context.clearRect(0, 0, width, height);
      context.font = `${fontSize}px var(--font-mono), monospace`;
      context.textAlign = "center";
      context.textBaseline = "middle";

      for (const cell of cells) {
        if (cell.inDeadZone) continue;

        const diag = (cell.nx + cell.ny) * 1.28;
        const dist = Math.sqrt(cell.nx * cell.nx + cell.ny * cell.ny);
        const phase = diag + dist * 1.3 - timestamp * waveSpeed + cell.phaseOffset * 0.22;

        const wave = (Math.sin(phase) + 1) * 0.5;
        const eased = Math.pow(wave, 1.55);
        const opacity = opacityMin + eased * (opacityMax - opacityMin);

        const t = eased;
        const r = Math.round(76 + t * (250 - 76));
        const g = Math.round(76 + t * (101 - 76));
        const b = Math.round(76 + t * (30 - 76));

        context.fillStyle = `rgba(${r},${g},${b},${opacity.toFixed(3)})`;
        context.fillText(cell.char, cell.x, cell.y);
      }

      animation = window.requestAnimationFrame(draw);
    };

    buildCells();
    animation = window.requestAnimationFrame(draw);

    const observer = new ResizeObserver(() => {
      buildCells();
    });

    observer.observe(parent);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animation);
    };
  }, [prefersReducedMotion]);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}
