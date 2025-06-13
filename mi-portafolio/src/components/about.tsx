import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function AboutMe() {
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        color: ["#f8fafc", "#ffe98a", "#f8fafc"], // blanco → dorado → blanco
        transition: {
          duration: 0.6,
          ease: "easeInOut",
        },
      });
    }, Math.random() * 4000 + 2000); // Cada 2-6 segundos

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 py-24 text-white overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="z-10 max-w-4xl text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight"
        >
       <motion.span
        className="relative inline-block overflow-hidden font-extrabold text-5xl md:text-6xl text-transparent bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 bg-clip-text shine-gold"
        animate={{ opacity: 1 }}
        >
        Sobre Mí
        </motion.span>



        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Soy{" "}
          <motion.span
            animate={{
              color: ["#f8fafc", "#cbd5e1", "#f8fafc"],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="font-semibold"
          >
            Paul Rojas
          </motion.span>
          , un desarrollador full-stack apasionado por crear experiencias
          digitales elegantes y funcionales. Me encanta aprender tecnologías
          nuevas, resolver problemas reales y colaborar en proyectos que
          generen impacto.
        </motion.p>

        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="bg-[#2a2a2a]/70 p-6 rounded-2xl shadow-lg border border-[#3a3a3a] hover:scale-[1.02] transition">
            <h3 className="text-xl font-semibold text-gray-100 mb-2 flex items-center gap-2">
              🔧 Habilidades
            </h3>
            <p className="text-sm text-gray-300">
              JavaScript, React, Node.js, Tailwind, Git, Framer Motion, APIs,
              MongoDB.
            </p>
          </div>

          <div className="bg-[#2a2a2a]/70 p-6 rounded-2xl shadow-lg border border-[#3a3a3a] hover:scale-[1.02] transition">
            <h3 className="text-xl font-semibold text-gray-100 mb-2 flex items-center gap-2">
              🚀 Enfoque
            </h3>
            <p className="text-sm text-gray-300">
              Minimalismo visual, rendimiento, animaciones limpias y experiencia
              del usuario.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
