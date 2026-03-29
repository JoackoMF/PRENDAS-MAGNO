import { renderServices } from './js/services.js';
import { initModal } from './js/modal.js';
import { initContactForm } from './js/contact.js';
import { initNavbar } from './js/navbar.js';
import { initAnimations } from './js/animations.js';

document.addEventListener('DOMContentLoaded', () => {
  renderServices();   // renders cards al DOM
  initModal();        // registra listeners del modal
  initContactForm();  // registra form submit handler
  initNavbar();       // scroll + hamburger + animations
  initAnimations();   // scroll animations for reveal elements
});
