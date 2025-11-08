
export type Project = {
    title: string;
    description: string;
    images: string[];
    github?: string;
    tech: string[];
};

export const projects: Project[] = [
    {
        title: "UTN-MÓVIL",
        description:
            "Aplicación móvil multiplataforma con notificaciones push, desarrollada con Flutter y microservicios NestJS.",
        images: [
            "/images/notificacion1.png",
            "/images/notificacion2.png",
            "/images/notificacion3.png",
        ],
        tech: ["Flutter", "NestJS", "Docker", "Firebase"],
    },
    {
        title: "Portafolio Web",
        description:
            "Sitio personal desarrollado con Astro, React, TypeScript y TailwindCSS para mostrar mis proyectos y habilidades.",
        images:[ "/images/portafolio1.png"],
        github: "https://github.com/BLeo16/portafolio",
        tech: ["Astro", "React", "TailwindCSS"],
    },
    {
        title: "API REST de Seguridad",
        description:
            "API REST para la autenticación y autorización de usuarios basado en roles y funciones",
        images: [
            "/images/seguridad1.jpg",
            "/images/seguridad2.png"
            
        ],
        github: "https://github.com/BLeo16/seguridad-NestJS",
        tech: ["NestJS", "TypeScript"],
    }
];
