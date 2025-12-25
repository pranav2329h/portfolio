import { useEffect, useRef } from "react";

const ElectricBorder = ({ active }) => {
  const canvasRef = useRef(null);
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resize();
    window.addEventListener("resize", resize);

    const jitter = (a) => (Math.random() - 0.5) * a;

    const drawRoundedBorder = (color, width, amp, alpha) => {
      const w = canvas.width;
      const h = canvas.height;
      const r = 18;
      const inset = 2;
      const step = 10;

      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.globalAlpha = alpha;
      ctx.shadowColor = color;
      ctx.shadowBlur = active ? 26 : 14;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";

      ctx.moveTo(r, inset);
      for (let x = r; x <= w - r; x += step)
        ctx.lineTo(x, inset + jitter(amp));

      ctx.quadraticCurveTo(w - inset, inset, w - inset, r);

      for (let y = r; y <= h - r; y += step)
        ctx.lineTo(w - inset + jitter(amp), y);

      ctx.quadraticCurveTo(w - inset, h - inset, w - r, h - inset);

      for (let x = w - r; x >= r; x -= step)
        ctx.lineTo(x, h - inset + jitter(amp));

      ctx.quadraticCurveTo(inset, h - inset, inset, h - r);

      for (let y = h - r; y >= r; y -= step)
        ctx.lineTo(inset + jitter(amp), y);

      ctx.quadraticCurveTo(inset, inset, r, inset);

      ctx.closePath();
      ctx.stroke();
      ctx.globalAlpha = 1;
    };

    const animate = () => {
      frameRef.current += active ? 0.35 : 0.2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.save();
      ctx.translate(
        Math.sin(frameRef.current * 0.015),
        Math.cos(frameRef.current * 0.015)
      );

      // GOLD CORE
      drawRoundedBorder("rgba(255,215,120,1)", 2, 4, 0.95);

      // SILVER CRACK
      drawRoundedBorder("rgba(220,235,255,0.9)", 1.4, 6, 0.65);

      // THUNDER ENERGY
      drawRoundedBorder("rgba(255,245,200,0.7)", 1, 9, 0.4);

      ctx.restore();
      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener("resize", resize);
  }, [active]);

  return <canvas ref={canvasRef} className="electric-canvas" />;
};

export default ElectricBorder;
