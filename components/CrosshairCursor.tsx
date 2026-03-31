"use client";

import { useEffect, useRef } from "react";

export default function CrosshairCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const current = { x: -100, y: -100 };
    const SPEED = 0.12;

    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const render = () => {
      current.x = lerp(current.x, pos.current.x, SPEED);
      current.y = lerp(current.y, pos.current.y, SPEED);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${current.x}px, ${current.y}px)`;
      }
      raf.current = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", move);
    raf.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
        marginLeft: "-12px",
        marginTop: "-12px",
      }}
    >
      <svg width="50" height="50" viewBox="0 0 24 24">
        {/* Rotating circle */}
        <g className="animate-spin">
          <circle
            cx="12"
            cy="12"
            r="10"
            fill="none"
            stroke="#ff2020"
            strokeWidth="2"
          />
        </g>

        {/* Center dot */}
        <circle cx="12" cy="12" r="2" fill="#ff2020" />
      </svg>
    </div>
  );
}
