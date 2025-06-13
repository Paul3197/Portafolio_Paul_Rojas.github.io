import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-visible text-white">
      {/* Contenido principal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center px-4"
      >
        {/* Título */}
        <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight drop-shadow-lg"
            >
            &lt;
            <motion.span
                animate={{ color: ["#f1f5f9", "#7dd3fc", "#f1f5f9"] }} // blanco → celeste → blanco
                transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
                }}
                className="mx-1"
            >
                Paul
            </motion.span>
            <motion.span
                animate={{ color: ["#7dd3fc", "#f1f5f9", "#7dd3fc"] }} // celeste → blanco → celeste
                transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
                }}
                className="mx-1"
            >
                Rojas
            </motion.span>
            /&gt;
        </motion.h1>


        {/* Subtítulo */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 mb-6 font-medium"
        >
          Full Stack Developer
        </motion.h2>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="max-w-xl mx-auto text-base md:text-lg text-gray-300 leading-relaxed"
        >
          Mi misión:{" "}
          <span className="text-white font-semibold">
            convertirme cada día en una mejor versión de mí mismo
          </span>{" "}
          y usar el código para inspirar, crear y transformar el mundo digital.
        </motion.p>

        {/* Botón */}
        <motion.a
          href="#about"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          onClick={(e) => {
            e.preventDefault();
            const aboutSection = document.querySelector("#about");
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="inline-block mt-10 px-6 py-3 bg-gradient-to-r from-sky-400 to-slate-100 hover:from-sky-300 hover:to-white transition rounded-full text-black font-semibold shadow-xl"
        >
          Ver más ↓
        </motion.a>
      </motion.div>
    </section>
  );
}
