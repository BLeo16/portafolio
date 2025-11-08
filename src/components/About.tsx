export default function About() {
  return (
    <section id="acerca" className="py-20 bg-white px-6">
      <div className="max-w-4xl mx-auto text-center">
  <h2 className="text-3xl font-bold mb-6 text-brand-700">Acerca de mí</h2>
        <p className="text-gray-600 leading-relaxed">
          Soy un <strong>Ingeniero en Software</strong> enfocado en el desarrollo de soluciones
          tecnológicas escalables y eficientes. Tengo experiencia en la implementación de 
          microservicios con <strong>NestJS</strong>, desarrollo móvil con <strong>Flutter </strong>y desarrollo 
          web con <strong>NextJS</strong> y <strong>Astro</strong>, en conjunto con
          despliegues en contenedores <strong>Docker</strong>.  
        </p>
        <p className="text-gray-600 mt-4 leading-relaxed">
          He participado en proyectos de impacto académico como <strong>UTN-MÓVIL</strong>, donde 
          implementé un sistema de notificaciones push con <strong>Firebase Cloud Messaging (FCM)</strong>, 
          integrando servicios backend y frontend con métricas de calidad en uso.
        </p>
      </div>
    </section>
  );
}
