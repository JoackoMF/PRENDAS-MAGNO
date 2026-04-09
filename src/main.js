import { renderServices } from './js/services.js';
import { initModal } from './js/modal.js';
import { initContactForm } from './js/contact.js';
import { initNavbar } from './js/navbar.js';
import { initAnimations } from './js/animations.js';
import { injectStructuredData } from './js/seo.js';

document.addEventListener('DOMContentLoaded', () => {
  renderServices();   // renders cards al DOM
  initModal();        // registra listeners del modal
  initContactForm();  // registra form submit handler
  initNavbar();       // scrollspy + hamburger
  initAnimations();   // scroll animations for reveal elements
  
  injectStructuredData(); // inyecta JSON-LD Schema
});

// Registro básico del Service Worker para soporte de PWA instalable
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('ServiceWorker registrado correctamente con el alcance:', registration.scope);
      })
      .catch(error => {
        console.error('Fallo en el registro del ServiceWorker:', error);
      });
  });
}
