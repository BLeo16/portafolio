import { Mail, Github as GithubIcon, Linkedin } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="inicio"
            className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-8 bg-brand-50 px-6 py-12"
        >
            {/* Texto */}
            <div className="max-w-2xl text-center md:text-left">
                <h1 className="text-5xl font-bold text-brand-700 mb-4 leading-tight">
                    👋 Hola, soy <span className="text-brand">Leonardo Flores</span>
                </h1>

                <p className="text-lg text-gray-600 mb-6">
                    Ingeniero en Software con experiencia en el desarrollo de soluciones (backend - frontend) para sitios web y apps móviles.
                </p>

                <div className="contact-list mb-6 md:mb-8">
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

                    <a
                        className="contact-pill"
                        href="https://wa.me/593984918238?text=Hola%20Leonardo!%20Me%20gustaría%20contactarte"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                            <path d="M20.52 3.48A11.88 11.88 0 0012 0C5.373 0 .01 5.373.01 12  .01 14.14.5 16.18 1.42 17.98L0 24l6.36-1.66A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12 0-3.21-1.25-6.2-3.48-8.52z" fill="currentColor" opacity="0.08"/>
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.672.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.15-.174.199-.298.298-.497.099-.198.05-.371-.025-.52-.074-.149-.672-1.615-.922-2.21-.242-.579-.487-.5-.672-.51l-.573-.01c-.198 0-.52.074-.793.371s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487 3.98 1.64 3.98.927 4.695.869.198-.05 1.357-.553 1.55-1.088.198-.537.198-.996.138-1.088-.062-.099-.247-.149-.544-.298z" fill="currentColor"/>
                        </svg>
                        <span className="hidden sm:inline">WhatsApp</span>
                    </a>
                </div>

                <a
                    href="/proyectos"
                    className="github-link"
                >
                    Ver mis proyectos
                </a>
            </div>

            {/* Foto */}
            <div className="flex-shrink-0">
                <a href="/#acerca" className="hero-photo-wrapper" tabIndex={0} aria-label="Foto de Leonardo Flores">
                    <img src="/images/foto-formal.jpg" alt="Leonardo Flores" className="hero-photo" />
                </a>
            </div>
        </section>
    );
}
