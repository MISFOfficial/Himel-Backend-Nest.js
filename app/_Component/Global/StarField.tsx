"use client";

import React, { useEffect, useRef, useCallback } from "react";

interface MotionNode {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  angle: number;
  rotSpeed: number;
  type: "diamond" | "circle" | "cross";
  color: string;
  depth: number;
}

interface LightOrb {
  x: number;
  y: number;
  radius: number;
  speedX: number;
  speedY: number;
  color: string;
}

export const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const nodesRef = useRef<MotionNode[]>([]);
  const orbsRef = useRef<LightOrb[]>([]);
  const timeRef = useRef(0);

  const initScene = useCallback((width: number, height: number) => {
    // Generate motion keyframe nodes (diamonds, circles, crosses)
    const nodes: MotionNode[] = [];
    const colors = [
      "rgba(255, 0, 85, 0.45)",  // Soft primary red/pink
      "rgba(35, 44, 102, 0.35)",  // Soft primary dark blue
      "rgba(236, 72, 153, 0.45)", // Soft pink
      "rgba(168, 85, 247, 0.4)",  // Soft purple
    ];
    
    for (let i = 0; i < 35; i++) {
      const typeVal = i % 3;
      const type = typeVal === 0 ? "diamond" : typeVal === 1 ? "circle" : "cross";
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 8 + Math.random() * 14,
        speedX: (Math.random() - 0.5) * 25, // Increased speed for visibility
        speedY: (Math.random() - 0.5) * 25,
        angle: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        type,
        color: colors[i % colors.length],
        depth: 0.2 + Math.random() * 0.7,
      });
    }
    nodesRef.current = nodes;

    // Generate large, visible studio light orbs
    orbsRef.current = [
      {
        x: width * 0.15,
        y: height * 0.25,
        radius: 400 + Math.random() * 150,
        speedX: 25,
        speedY: 15,
        color: "rgba(255, 0, 85, 0.08)", // More visible soft red/pink
      },
      {
        x: width * 0.85,
        y: height * 0.75,
        radius: 450 + Math.random() * 150,
        speedX: -20,
        speedY: 25,
        color: "rgba(35, 44, 102, 0.07)", // More visible soft indigo/blue
      },
    ];
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let dpr = window.devicePixelRatio || 1;

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      initScene(window.innerWidth, window.innerHeight);
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseRef.current.targetX = (e.clientX - centerX) / centerX;
      mouseRef.current.targetY = (e.clientY - centerY) / centerY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    let lastTime = performance.now();

    const draw = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05); // cap delta
      lastTime = now;
      timeRef.current += dt;
      const t = timeRef.current;

      const w = window.innerWidth;
      const h = window.innerHeight;

      // Mouse interpolation for parallax
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Clear canvas with clean white
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, w, h);

      // 1. Draw Studio Light Orbs (Glows)
      const orbs = orbsRef.current;
      for (let i = 0; i < orbs.length; i++) {
        const o = orbs[i];
        
        // Slow movement
        o.x += o.speedX * dt;
        o.y += o.speedY * dt;

        // Boundary bounce
        if (o.x - o.radius < -150 || o.x + o.radius > w + 150) o.speedX *= -1;
        if (o.y - o.radius < -150 || o.y + o.radius > h + 150) o.speedY *= -1;

        const grad = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.radius);
        grad.addColorStop(0, o.color);
        grad.addColorStop(1, "rgba(255, 255, 255, 0)");
        
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(o.x, o.y, o.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Draw Motion Curves (Bézier curves representing animation paths)
      ctx.lineWidth = 1.5;
      
      // Curve 1
      ctx.strokeStyle = "rgba(35, 44, 102, 0.08)"; // Increased visibility
      ctx.beginPath();
      ctx.moveTo(-50, h * 0.4 + Math.sin(t * 0.25) * 60);
      ctx.bezierCurveTo(
        w * 0.3,
        h * 0.15 + Math.cos(t * 0.35) * 80,
        w * 0.6,
        h * 0.75 + Math.sin(t * 0.3) * 100,
        w + 50,
        h * 0.5 + Math.cos(t * 0.2) * 60
      );
      ctx.stroke();

      // Curve 2
      ctx.strokeStyle = "rgba(255, 0, 85, 0.06)"; // Increased visibility
      ctx.beginPath();
      ctx.moveTo(-50, h * 0.65 + Math.cos(t * 0.2) * 70);
      ctx.bezierCurveTo(
        w * 0.4,
        h * 0.85 + Math.sin(t * 0.25) * 90,
        w * 0.7,
        h * 0.25 + Math.cos(t * 0.32) * 80,
        w + 50,
        h * 0.45 + Math.sin(t * 0.25) * 70
      );
      ctx.stroke();

      // 3. Draw Connecting Lines (Mesh network)
      const nodes = nodesRef.current;
      ctx.lineWidth = 0.8;
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        const px1 = mouse.x * 40 * n1.depth;
        const py1 = mouse.y * 40 * n1.depth;
        const sx1 = n1.x + px1;
        const sy1 = n1.y + py1;

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const px2 = mouse.x * 40 * n2.depth;
          const py2 = mouse.y * 40 * n2.depth;
          const sx2 = n2.x + px2;
          const sy2 = n2.y + py2;

          // Check distance
          const dx = sx1 - sx2;
          const dy = sy1 - sy2;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            // Draw connection line
            const lineOpacity = (1 - dist / 180) * 0.12;
            ctx.strokeStyle = `rgba(35, 44, 102, ${lineOpacity})`;
            ctx.beginPath();
            ctx.moveTo(sx1, sy1);
            ctx.lineTo(sx2, sy2);
            ctx.stroke();
          }
        }
      }

      // 4. Draw Motion Nodes (Keyframes)
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Move nodes
        n.x += n.speedX * dt;
        n.y += n.speedY * dt;
        n.angle += n.rotSpeed;

        // Wrap around boundaries
        if (n.x < -30) n.x = w + 30;
        if (n.x > w + 30) n.x = -30;
        if (n.y < -30) n.y = h + 30;
        if (n.y > h + 30) n.y = -30;

        // Apply mouse parallax
        const px = mouse.x * 40 * n.depth;
        const py = mouse.y * 40 * n.depth;
        const sx = n.x + px;
        const sy = n.y + py;

        ctx.save();
        ctx.translate(sx, sy);
        ctx.rotate(n.angle);
        ctx.fillStyle = n.color;
        ctx.strokeStyle = n.color;
        ctx.lineWidth = 2;

        if (n.type === "diamond") {
          // Keyframe diamond shape
          ctx.beginPath();
          ctx.moveTo(0, -n.size / 2);
          ctx.lineTo(n.size / 2, 0);
          ctx.lineTo(0, n.size / 2);
          ctx.lineTo(-n.size / 2, 0);
          ctx.closePath();
          ctx.fill();
        } else if (n.type === "circle") {
          // Playhead circle shape
          ctx.beginPath();
          ctx.arc(0, 0, n.size / 3.5, 0, Math.PI * 2);
          ctx.fill();
        } else if (n.type === "cross") {
          // FX cross shape
          ctx.beginPath();
          ctx.moveTo(-n.size / 2.5, 0);
          ctx.lineTo(n.size / 2.5, 0);
          ctx.moveTo(0, -n.size / 2.5);
          ctx.lineTo(0, n.size / 2.5);
          ctx.stroke();
        }

        ctx.restore();
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    animationRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [initScene]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "#ffffff" }}
    />
  );
};

export default StarField;
