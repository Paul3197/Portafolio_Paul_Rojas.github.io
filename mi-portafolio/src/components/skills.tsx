import { motion } from "framer-motion";

export default function Skills() {
  const technicalSkills = [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Three.js",
    "Node.js",
    "Framer Motion",
  ];

  const softSkills = [
    "Inglés – Avanzado (C1 EFSET)",
    "Compromiso y responsabilidad",
    "Liderazgo",
    "Atención al detalle",
    "Aprendizaje continuo",
    "Colaboración efectiva",
  ];

  const cardStyle = `px-5 py-4 rounded-xl text-sm sm:text-base font-medium
    transition-transform duration-300 transform hover:scale-[1.05]
    border border-transparent bg-gradient-to-br from-[#1e1e1e] to-[#2c2c2c]
    hover:from-[#292929] hover:to-[#333] text-white shadow-md shadow-black/20`;

  const glowingBorder = `hover:border-[1.5px] hover:border-[#e5e5e5] hover:shadow-[0_0_8px_2px_rgba(255,255,255,0.1)]`;

  return (
    <section className="py-24 px-6 text-white" id="skills">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-16 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Habilidades
        </motion.h2>

        {/* Habilidades Técnicas */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6 text-gray-300">
            Técnicas
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {technicalSkills.map((skill, i) => (
              <motion.div
                key={skill}
                className={`${cardStyle} ${glowingBorder}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                viewport={{ once: true }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Habilidades Blandas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6 text-gray-300">
            Blandas
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {softSkills.map((skill, i) => (
              <motion.div
                key={skill}
                className={`${cardStyle} ${glowingBorder}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                viewport={{ once: true }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
