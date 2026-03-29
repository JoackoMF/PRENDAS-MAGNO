export function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('name') || form.querySelector('[name="name"]');
    const emailInput = document.getElementById('email') || form.querySelector('[name="email"]');
    const serviceInput = document.getElementById('service') || form.querySelector('[name="service"]');
    const messageInput = document.getElementById('message') || form.querySelector('[name="message"]');

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const service = serviceInput ? serviceInput.value.trim() : '';
    const message = messageInput ? messageInput.value.trim() : '';

    // Limpiar errores previos
    if (nameInput) nameInput.classList.remove('error');
    if (emailInput) emailInput.classList.remove('error');

    // Validar requeridos
    let firstInvalid = null;
    if (!name) {
      if (nameInput) nameInput.classList.add('error');
      firstInvalid = nameInput;
    }
    if (!email) {
      if (emailInput) emailInput.classList.add('error');
      if (!firstInvalid) firstInvalid = emailInput;
    }

    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    // Si es válido, construir mensaje y abrir WhatsApp
    // "Hola! Soy {name} ({email}). Me interesa: {service}. {message}"
    const text = `Hola! Soy ${name} (${email}). Me interesa: ${service}. ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/541169135436?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');

    // Reset y mostrar mensaje de éxito temporal
    form.reset();

    const successMessage = form.querySelector('.success-message') || document.querySelector('.success-message');
    if (successMessage) {
      // Como un mensaje que se "auto-oculta", podriamos añadirle una clase css `.visible` o hacer style.display bloque
      successMessage.style.display = 'block';
      successMessage.classList.add('visible');

      setTimeout(() => {
        successMessage.style.display = 'none';
        successMessage.classList.remove('visible');
      }, 3000);
    }
  });
}
