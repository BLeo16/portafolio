import {Mail, GithubIcon, Linkedin} from "lucide-react";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <div className="footer-left">
                    <p className="footer-small">© {new Date().getFullYear()} Leonardo Flores · Ingeniero en Software</p>
                </div>

                <div className="footer-right">
                    <div className="footer-social">
                        <a href="mailto:alcucerbrandon@gmail.com" className="contact-pill" aria-label="Enviar email">
                            <Mail />
                            <span className="hidden sm:inline">Email</span>
                        </a>

                        <a href="https://github.com/BLeo16/" target="_blank" rel="noreferrer" className="contact-pill" aria-label="GitHub">
                            <GithubIcon />
                            <span className="hidden sm:inline">GitHub</span>
                        </a>

                        <a href="https://www.linkedin.com/in/leonardo-flores-alcucer/" target="_blank" rel="noreferrer" className="contact-pill" aria-label="LinkedIn">
                            <Linkedin />
                            <span className="hidden sm:inline">LinkedIn</span>
                        </a>
                            <a href="https://wa.me/593984918238?text=Hola%20Leonardo!%20Te%20escribo%20desde%20el%20sitio%20web" target="_blank" rel="noreferrer" className="contact-pill" aria-label="WhatsApp">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                    <path d="M20.52 3.48A11.88 11.88 0 0012 0C5.373 0 .01 5.373.01 12  .01 14.14.5 16.18 1.42 17.98L0 24l6.36-1.66A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12 0-3.21-1.25-6.2-3.48-8.52z" fill="currentColor" opacity="0.08"/>
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.672.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.15-.174.199-.298.298-.497.099-.198.05-.371-.025-.52-.074-.149-.672-1.615-.922-2.21-.242-.579-.487-.5-.672-.51l-.573-.01c-.198 0-.52.074-.793.371s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487 3.98 1.64 3.98.927 4.695.869.198-.05 1.357-.553 1.55-1.088.198-.537.198-.996.138-1.088-.062-.099-.247-.149-.544-.298z" fill="currentColor"/>
                                </svg>
                                <span className="hidden sm:inline">WhatsApp</span>
                            </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
