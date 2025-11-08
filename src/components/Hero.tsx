import { Mail, Github as GithubIcon, Linkedin } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="inicio"
            className="min-h-screen flex flex-col justify-center items-center text-center bg-brand-50 px-6"
        >
            <h1 className="text-5xl font-bold text-brand-700 mb-4 leading-tight">
                👋 Hola, soy <span className="text-brand">Leonardo Flores</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl">
                Ingeniero en Software con experiencia en el desarrollo de soluciones (backend - frontend) para sitios web y apps móviles.
            </p>

            <div className="contact-list">
                <a className="contact-pill" href="mailto:alcucerbrandon@gmail.com">
                    <Mail />
                    <span className="hidden sm:inline">alcucerbrandon@gmail.com</span>
                </a>

                <a className="contact-pill" href="https://github.com/BLeo16" target="_blank" rel="noreferrer">
                    <GithubIcon />
                    <span className="hidden sm:inline">@BLeo16</span>
                </a>

                <a className="contact-pill" href="https://www.linkedin.com/in/leonardo-flores-alcucer/" target="_blank" rel="noreferrer">
                    <Linkedin />
                    <span className="hidden sm:inline">LinkedIn</span>
                </a>
            </div>

            <a
                href="/proyectos"
                className="github-link mt-8"
            >
                Ver mis proyectos
            </a>
        </section>
    );
}
