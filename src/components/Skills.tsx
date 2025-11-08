export default function Skills() {
    return (
        <section id="habilidades" className="py-5 bg-white px-6 pb-30">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12 text-gray-800">
                    Habilidades Técnicas
                </h2>

                <div className="grid md:grid-cols-3 gap-8 text-left">
                    {/* Lenguajes */}
                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold text-brand-700 mb-3">
                            Lenguajes & Frameworks
                        </h3>
                        <ul className="text-gray-700 space-y-2">
                            <li className="flex items-center gap-2">
                                <span className="text-brand-500">▹</span> TypeScript · Python · Dart
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-brand-500">▹</span> NestJS · NextJS · Django · Flutter
                            </li>
                        </ul>
                    </div>

                    {/* Bases de Datos */}
                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold text-brand-700 mb-3">
                            Bases de Datos
                        </h3>
                        <ul className="text-gray-700 space-y-2">
                            <li className="flex items-center gap-2">
                                <span className="text-brand-500">▹</span> Oracle PL/SQL · PostgreSQL · MySQL
                            </li>
                        </ul>
                    </div>

                    {/* Herramientas & Cloud */}
                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold text-brand-700 mb-3">
                            Herramientas & Cloud
                        </h3>
                        <ul className="text-gray-700 space-y-2">
                            <li className="flex items-center gap-2">
                                <span className="text-brand-500">▹</span> Git · Docker · Firebase Cloud Messaging
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-brand-500">▹</span> VS Code
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
