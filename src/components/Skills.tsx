import { Database, CodeSquare, Boxes } from 'lucide-react';

export default function Skills() {
    return (
        <section id="habilidades" className="py-5 bg-white px-6 pb-30">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12 text-gray-800">
                    Habilidades Técnicas
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Lenguajes */}
                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition flex flex-col items-center text-center">
                        <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-brand-50 text-brand">
                            <CodeSquare className="w-8 h-8" />
                        </div>

                        <h3 className="text-lg font-semibold text-brand-700 mb-3">
                            Lenguajes & Frameworks
                        </h3>

                        <ul className="text-gray-700 space-y-2 text-left">
                            <li className="flex items-center gap-2">
                                <span className="text-brand">▹</span> TypeScript · Python · Dart
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-brand">▹</span> NextJS · Django · Flutter 
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-brand">▹</span> NestJS · Astro
                            </li>
                        </ul>
                    </div>


                    {/* Bases de Datos */}
                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition flex flex-col items-center text-center">
                        <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-brand-50 text-brand">
                            <Database className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-semibold text-brand-700 mb-3">
                            Bases de Datos
                        </h3>
                        <ul className="text-gray-700 space-y-2">
                            <li className="flex items-center gap-2">
                                <span className="text-brand">▹</span> Oracle PL/SQL · PostgreSQL · MySQL
                            </li>
                        </ul>
                    </div>

                    {/* Herramientas & Cloud */}
                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition flex flex-col items-center text-center">
                        <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-brand-50 text-brand">
                            <Boxes className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-semibold text-brand-700 mb-3">
                            Herramientas & Cloud
                        </h3>

                        <ul className="text-gray-700 space-y-2">
                            <li className="flex items-center gap-2">
                                <span className="text-brand">▹</span> Git · Docker · Firebase Cloud Messaging · VS Code
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
