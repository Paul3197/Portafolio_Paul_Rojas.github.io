import { useEffect, useRef } from "react";

const pieces = [
  "rey.webp",
  "dama.webp",
  "peon.webp",
  "caballo.webp",
  "torre.webp",
  "alfil.webp",
];

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

    const pieceImages: HTMLImageElement[] = [];
    const pieceElements: {
      image: HTMLImageElement;
      x: number;
      y: number;
      opacity: number;
      side: "left" | "right";
      timer: number;
    }[] = [];

    pieces.forEach((src) => {
      const img = new Image();
      img.src = `../assets/${src}`;
      img.onload = () => pieceImages.push(img);
    });

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

    function drawPieces(context: CanvasRenderingContext2D) {
      const now = Date.now();
      pieceElements.forEach((piece, i) => {
        const timeElapsed = now - piece.timer;
        if (timeElapsed > 3000) {
          pieceElements.splice(i, 1);
          return;
        }

        const fadeTime = 1000;
        const fadeIn = Math.min(timeElapsed / fadeTime, 1);
        const fadeOut = Math.max(0, (3000 - timeElapsed) / fadeTime);
        piece.opacity = Math.min(fadeIn, fadeOut);

        const scale = 1.5;
        context.save();
        context.translate(piece.x, piece.y);
        context.rotate((25 * Math.PI) / 180);
        context.scale(scale, scale);
        context.globalAlpha = piece.opacity;
        context.shadowColor = "rgba(255, 215, 0, 0.4)";
        context.shadowBlur = 20;
        context.drawImage(
          piece.image,
          -piece.image.width / 2,
          -piece.image.height / 2
        );
        context.restore();
      });
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      drawBackground(ctx);
      drawPieces(ctx);

      pulse += 0.003 * direction;
      if (pulse > 1 || pulse < -1) direction *= -1;

      requestAnimationFrame(animate);
    }

    animate();

    const spawnPiece = () => {
      if (pieceImages.length === 0) return;
      const image = pieceImages[Math.floor(Math.random() * pieceImages.length)];
      const side: "left" | "right" = Math.random() < 0.5 ? "left" : "right";
      const x = side === "left" ? 80 : width - 80;
      const y = Math.random() * height;
      pieceElements.push({ image, x, y, opacity: 0, side, timer: Date.now() });
    };

    const interval = setInterval(spawnPiece, 2500);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-50 pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
