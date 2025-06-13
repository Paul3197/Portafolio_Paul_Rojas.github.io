import { useState } from "react";
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xovwdrqn", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("Ocurrió un error. Intenta nuevamente.");
      }
    } catch (err) {
      alert("Error al enviar el mensaje.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 text-white" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Contacto</h2>
        <p className="text-gray-400 mb-10">
          ¿Quieres trabajar conmigo? ¡Hablemos!
        </p>

        {/* Redes sociales arriba */}
        <div className="mb-10 flex justify-center gap-6 text-2xl text-gray-400">
          <a
            href="https://www.linkedin.com/in/paulrojas-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://discord.com/users/tu_usuario_id"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaDiscord />
          </a>
        </div>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="grid gap-4 text-left max-w-xl mx-auto"
        >
          <label className="text-sm">
            Tu correo:
            <input
              type="email"
              name="email"
              required
              className="w-full mt-1 p-2 rounded-lg bg-[#121212] border border-gray-700 text-white placeholder-gray-500"
              placeholder="correo@ejemplo.com"
            />
          </label>

          <label className="text-sm">
            Tu mensaje:
            <textarea
              name="message"
              rows={5}
              required
              className="w-full mt-1 p-2 rounded-lg bg-[#121212] border border-gray-700 text-white placeholder-gray-500"
              placeholder="Escribe tu mensaje..."
            />
          </label>

          <button
            type="submit"
            className={`mt-2 px-6 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-300 transition ${
              loading && "opacity-60 cursor-not-allowed"
            }`}
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar mensaje"}
          </button>

          {submitted && (
            <p className="text-green-400 mt-2 text-center">
              ¡Mensaje enviado correctamente!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
