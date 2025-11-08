import { useState } from "react";
import { ChevronLeft, ChevronRight, X, GithubIcon, Code2,  } from "lucide-react"; // 👈 íconos de Lucide
import type { JSX } from "astro/jsx-runtime";

type ProjectProps = {
    title: string;
    description: string;
    images: string[];
    github?: string;
    tech: string[];
};

export default function ProjectCard({
    title,
    description,
    images,
    github,
    tech,
}: ProjectProps) {
    const [index, setIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
    const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

    return (
        <>
            {/* 💠 Tarjeta del proyecto */}
            <div className="project-card flex flex-col items-center bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg text-brand-800 max-w-md mx-auto relative">
                {/* Carrusel */}
                <div
                    className="relative w-full h-56 mb-4 overflow-hidden rounded-lg border border-transparent cursor-pointer"
                    onClick={() => setIsOpen(true)}
                >
                    <img
                        src={images[index]}
                        alt={`${title} ${index + 1}`}
                        className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                    />

                    {/* Botones de navegación */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    prev();
                                }}
                                className="carousel-btn absolute left-3 top-1/2 -translate-y-1/2"
                                aria-label="Imagen anterior"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    next();
                                }}
                                className="carousel-btn absolute right-3 top-1/2 -translate-y-1/2"
                                aria-label="Siguiente imagen"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </>
                    )}
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold mb-2 text-brand-100">{title}</h3>
                <p className="text-sm text-brand-200 mb-4 text-center">{description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {tech.map((t) => (
                        <span
                            key={t}
                            className="flex items-center gap-2 text-brand-700 px-3 py-1 rounded-full text-xs tech-badge"
                        >
                            {getTechIcon(t)}
                            <span className="leading-none">{t}</span>
                        </span>
                    ))}
                </div>

                {/* Botón GitHub */}
                {github && (
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                        aria-label={`Ver ${title} en GitHub`}
                    >
                        <GithubIcon className="w-4 h-4" />
                        <span>Ver en GitHub</span>
                    </a>
                )}

            </div>

            {/* 💥 Modal de imagen completa */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[999]"
                    onClick={() => setIsOpen(false)}
                >
                    <div className="relative max-w-5xl max-h-[90vh]">
                        <img
                            src={images[index]}
                            alt={`${title} ampliada`}
                            className="w-auto h-auto max-w-full max-h-[90vh] rounded-lg shadow-lg"
                        />
                        {/* Botón cerrar */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-2 bg-white/90 hover:bg-gray-100 text-brand-700 rounded-full w-8 h-8 flex items-center justify-center transition"
                            aria-label="Cerrar imagen"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

/** 🎨 Mapeo de íconos para tecnologías */
function getTechIcon(tech: string) {
    const icons: Record<string, JSX.Element> = {
        React: <Code2 className="w-3 h-3 text-sky-300" />,
        TypeScript: <Code2 className="w-3 h-3 text-blue-400" />,
        NestJS: <Code2 className="w-3 h-3 text-red-400" />,
        Flutter: <Code2 className="w-3 h-3 text-cyan-300" />,
        Docker: <Code2 className="w-3 h-3 text-blue-500" />,
        Firebase: <Code2 className="w-3 h-3 text-yellow-400" />,
        Astro: <Code2 className="w-3 h-3 text-purple-400" />,
        TailwindCSS: <Code2 className="w-3 h-3 text-sky-400" />,
    };

    return icons[tech] ?? <Code2 className="w-3 h-3 text-brand-200" />;
}
