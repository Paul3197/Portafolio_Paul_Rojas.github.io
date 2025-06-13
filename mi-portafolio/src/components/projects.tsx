import { motion } from "framer-motion";
import SolarSistem from "../assets/Solar_Sistem.webp";
import vitaplus from "../assets/vitaplus.webp";


export default function Projects() {
  const projects = [
    {
      name: "VitaPlus",
      image: vitaplus,
      url: "https://vitaplus.live",
      description: "Plataforma de bienestar digital con enfoque en salud integral."
    },
    {
      name: "Solar System",
      image: SolarSistem,
      url: "https://master--fantastic-pudding-b898d7.netlify.app/pagina-3d",
      description: "Simulación interactiva del sistema solar con animaciones 3D."
    },
    {
      name: "Indefinido",
      image: "/projects/placeholder.png",
      url: "#",
      description: "Proyecto en desarrollo. Pronto disponible."
    }
  ];

  return (
    <section className="py-24 px-4" id="projects">
      <div className="max-w-6xl mx-auto text-center text-white">
        <h2 className="text-4xl font-extrabold mb-16 text-white">
          <motion.span
            animate={{
              color: ["#f8fafc", "#e0e0e0", "#f8fafc"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Proyectos
          </motion.span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="bg-[#2a2a2a]/80 p-4 rounded-2xl border border-[#3a3a3a] shadow-md backdrop-blur-sm hover:scale-[1.015] transition"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-xl w-full h-48 object-cover mb-4 border border-[#444]"
              />
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.h3
                  className="text-xl font-bold text-white hover:text-yellow-400 transition duration-300"
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0px 0px 8px #FFD700",
                  }}
                >
                  {project.name}
                </motion.h3>
              </a>
              <p className="text-sm text-gray-300 mt-2">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
