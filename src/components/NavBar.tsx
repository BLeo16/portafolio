import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-white/60 backdrop-blur-md border-brand-100/30 shadow-sm z-50">
            <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
                <a href="/" className="text-xl font-semibold navbar-brand">
                    Leonardo Flores
                </a>

                {/* Botón menú móvil */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>

                <ul
                    className={`${open ? "block" : "hidden"
                        } absolute md:static top-16 left-0 w-full md:w-auto bg-white/60 md:bg-transparent md:flex space-y-3 md:space-y-0 md:space-x-8 p-4 md:p-0 text-gray-800`}
                >
                    <li>
                        <a href="/" className="hover-brand transition">
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a href="/#acerca" className="hover-brand transition">
                            Acerca de
                        </a>
                    </li>
                    <li>
                        <a href="/proyectos" className="hover-brand transition">
                            Proyectos
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
