export function injectStructuredData() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "MAGNO Personal Coach",
    "description": "Servicios de entrenamiento personal, coaching fitness y planes de trabajo físico 100% personalizados para alcanzar tus metas.",
    "telephone": "+541169135436",
    "priceRange": "$",
    "url": window.location.href, // Resuelve dinámicamente a la URL de hosting final
    "sameAs": [
      "https://www.instagram.com/tu_cuenta_placeholder",
      "https://www.facebook.com/tu_cuenta_placeholder"
    ]
  };

  const scriptTag = document.createElement('script');
  scriptTag.type = 'application/ld+json';
  scriptTag.text = JSON.stringify(schemaData);
  
  // Inyectar en el head sin romper el renderizado HTML visual
  document.head.appendChild(scriptTag);
}
