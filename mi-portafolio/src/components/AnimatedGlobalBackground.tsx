import { useEffect, useRef } from "react";

export default function AnimatedGlobalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let pulse = 0;
    let direction = 1;

    function drawBackground(context: CanvasRenderingContext2D) {
      const gradient = context.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        Math.max(width, height) * (0.8 + pulse * 0.1)
      );

      gradient.addColorStop(0, "#3a3a3a");
      gradient.addColorStop(1, "#151515");

      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);
    }

    function animate() {
      if (!ctx) return;

      ctx.clearRect(0, 0, width, height);
      drawBackground(ctx);

      pulse += 0.003 * direction;
      if (pulse > 1 || pulse < -1) direction *= -1;

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
