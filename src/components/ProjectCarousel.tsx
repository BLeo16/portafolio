import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectCarousel() {
    return (
        <section
            id="proyectos"
            className="py-20 bg-gradient-to-b from-brand-800 to-brand-600 text-center"
        >
            <h2 className="text-3xl font-bold mb-10 text-brand-100">
                Proyectos Destacados
            </h2>

            <div className="flex gap-8 justify-start md:justify-center overflow-x-auto px-6 pb-6 snap-x snap-mandatory scroll-smooth scrollbar-hide">
                {projects.map((p) => (
                    <div
                        key={p.title}
                        className="snap-center shrink-0 w-80 md:w-96 flex justify-center"
                    >
                        <ProjectCard {...p} />
                    </div>
                ))}
            </div>

        </section>
    );
}
