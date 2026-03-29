export function initModal() {
  const modal = document.getElementById('service-modal');
  if (!modal) return; // Salir silenciosamente si no existe

  // Registramos click en document usando delegación de eventos
  document.addEventListener('click', (e) => {
    
    // 1. Abrir modal si se hace click en .open-modal-btn
    const openBtn = e.target.closest('.open-modal-btn');
    if (openBtn) {
      const card = openBtn.closest('.service-card');
      if (!card) return;

      // Extraer datos del DOM
      const name = card.getAttribute('data-service-name') || '';
      const price = card.getAttribute('data-service-price') || '';
      const desc = card.getAttribute('data-service-desc') || '';
      
      let features = [];
      try {
        features = JSON.parse(card.getAttribute('data-service-features') || '[]');
      } catch (err) {
        console.error('Error parsing features JSON:', err);
      }

      const durationEl = card.querySelector('.price-duration');
      const duration = durationEl ? durationEl.textContent.trim() : '';

      // Poblar el modal
      const titleEl = document.getElementById('modal-title');
      if (titleEl) titleEl.textContent = name;

      const priceEl = document.getElementById('modal-price');
      if (priceEl) priceEl.textContent = `$${price} ${duration}`;

      const descEl = document.getElementById('modal-description');
      if (descEl) descEl.textContent = desc;
      
      const featuresListEl = modal.querySelector('.features-list');
      if (featuresListEl) {
        featuresListEl.innerHTML = features.map(f => `<li>${f}</li>`).join('');
      }

      const whatsappBtn = document.getElementById('modal-whatsapp');
      if (whatsappBtn) {
        const encodedServiceName = encodeURIComponent(name);
        whatsappBtn.href = `https://wa.me/541169135436?text=Hola%2C+quiero+info+sobre+el+${encodedServiceName}+de+MAGNO`;
      }

      // Mostrar modal
      modal.classList.add('is-open');
      document.body.style.overflow = 'hidden'; // Ocultar scroll
      return;
    }

    // 2. Cerrar modal si se hace click en .close-modal
    const closeBtn = e.target.closest('.close-modal');
    if (closeBtn) {
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
      return;
    }

    // 3. Cerrar modal si se hace click en .modal-overlay directamente
    if (e.target.classList.contains('modal-overlay')) {
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  });
}
