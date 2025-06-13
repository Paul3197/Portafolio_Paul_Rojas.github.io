import { useEffect, useRef, useState } from "react";
import rey from "../assets/rey.webp";
import dama from "../assets/dama.webp";
import peon from "../assets/peon.webp";
import caballo from "../assets/caballo.webp";
import torre from "../assets/torre.webp";
import alfil from "../assets/alfil.webp";

const images = [rey, dama, peon, caballo, torre, alfil];

interface Piece {
  src: string;
  id: string;
  x: number;
  y: number;
  visible: boolean;
}

export default function AnimatedGlobalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pieces, setPieces] = useState<Piece[]>([]);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setPieces((prev) => {
        const newPieces: Piece[] = [];

        for (let i = 0; i < 2; i++) {
          const img = images[Math.floor(Math.random() * images.length)];
          const x = Math.random() * 100 < 50 ? 50 : window.innerWidth - 100;
          const y = Math.random() * window.innerHeight * 0.8 + 50;

          newPieces.push({
            src: img,
            id: `${Date.now()}-${Math.random()}`,
            x,
            y,
            visible: true,
          });
        }

        // auto-hide pieces after 1.5s
        setTimeout(() => {
          setPieces((p) => p.map((el) => ({ ...el, visible: false })));
        }, 1500);

        return newPieces;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full" />
      {pieces.map((piece) => (
        <img
          key={piece.id}
          src={piece.src}
          style={{
            position: "absolute",
            top: piece.y,
            left: piece.x,
            transform: `rotate(${Math.random() > 0.5 ? "25deg" : "-25deg"})`,
            opacity: piece.visible ? 0.3 : 0,
            transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
            width: "64px",
            height: "64px",
            filter: "drop-shadow(0 0 5px rgba(0,0,0,0.5))",
          }}
          alt="chess"
        />
      ))}
    </div>
  );
}
