export const SERVICES = [
  {
    id: 'rutina-personalizada',
    name: 'Rutina Personalizada',
    type: 'rutina',
    price: 25,
    currency: 'USD',
    duration: 'pago único',
    description: 'Plan de entrenamiento diseñado 100% según tu objetivo, nivel y equipamiento disponible.',
    features: [
      'Rutina semanal estructurada',
      'PDF descargable',
      'Guía de ejercicios con forma correcta'
    ],
    badge: null,
    is_featured: false
  },
  {
    id: 'plan-basico',
    name: 'Plan Básico',
    type: 'plan',
    price: 50,
    currency: 'USD',
    duration: 'por mes',
    description: 'Rutina mensual personalizada con seguimiento por WhatsApp dos veces por semana.',
    features: [
      'Rutina mensual ajustable',
      'Seguimiento 2x/semana por WhatsApp',
      'Ajuste mensual del plan'
    ],
    badge: null,
    is_featured: false
  },
  {
    id: 'plan-avanzado',
    name: 'Plan Avanzado',
    type: 'plan',
    price: 90,
    currency: 'USD',
    duration: 'por mes',
    description: 'Entrenamiento + guía nutricional básica + check-in semanal por videollamada.',
    features: [
      'Rutina avanzada personalizada',
      'Guía nutricional básica',
      'Check-in semanal por videollamada',
      'Seguimiento diario por WhatsApp'
    ],
    badge: 'Más popular',
    is_featured: true
  },
  {
    id: 'coaching-elite',
    name: 'Coaching Elite',
    type: 'coaching',
    price: 180,
    currency: 'USD',
    duration: 'por mes',
    description: 'Coaching 1:1 completo con entrenamiento y nutrición 100% personalizados según tus objetivos reales.',
    features: [
      'Plan de entrenamiento 100% personalizado',
      'Plan nutricional completo',
      'Videollamadas ilimitadas',
      'Ajustes en tiempo real',
      'Acceso directo 24/7 por WhatsApp'
    ],
    badge: 'Elite',
    is_featured: false
  },
  {
    id: 'asesoria-unica',
    name: 'Asesoría Única',
    type: 'asesoria',
    price: 30,
    currency: 'USD',
    duration: 'sesión única',
    description: 'Videollamada de 60 minutos para analizar tu situación actual, resolver dudas y trazar un plan de acción.',
    features: [
      '60 min de videollamada en vivo',
      'Evaluación de punto de partida',
      'Plan de acción inicial',
      'Grabación de la sesión'
    ],
    badge: 'Nuevo',
    is_featured: false
  }
];

export function renderServices() {
  const container = document.getElementById('services-grid');
  if (!container) return;

  const html = SERVICES.map(service => {
    const isFeaturedClass = service.is_featured ? 'is-featured' : '';
    const badgeHtml = service.badge ? `<span class="badge badge-${service.type}">${service.badge}</span>` : '';
    const featuresHtml = service.features.map(f => `<li>${f}</li>`).join('');
    
    const featuresJson = JSON.stringify(service.features).replace(/"/g, '&quot;');

    return `
  <div class="service-card glass ${isFeaturedClass}"
       data-service-id="${service.id}"
       data-service-name="${service.name}"
       data-service-price="${service.price}"
       data-service-type="${service.type}"
       data-service-features="${featuresJson}"
       data-service-desc="${service.description}">
    
    <div class="card-header">
      ${badgeHtml}
      <span class="service-type-label">${service.type}</span>
    </div>
    
    <div class="card-body">
      <h3 class="service-name">${service.name}</h3>
      <div class="service-price">
        <span class="price-amount">$${service.price}</span>
        <span class="price-duration">${service.duration}</span>
      </div>
      <p class="service-description">${service.description}</p>
      <ul class="features-list">
        ${featuresHtml}
      </ul>
    </div>
    
    <div class="card-footer">
      <button class="btn btn-primary open-modal-btn" 
              data-service-id="${service.id}">
        Ver Detalles
      </button>
    </div>
  </div>`;
  }).join('');

  container.innerHTML = html;
}
