export function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.querySelector('.hamburger');
  const navLinksContainer = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links a');

  // 1. SCROLL BEHAVIOR
  if (navbar) {
    const checkScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll(); // Comprobar estado inicial
  }

  // 2. HAMBURGER MENU (mobile)
  if (hamburger && navLinksContainer) {
    hamburger.addEventListener('click', () => {
      navLinksContainer.classList.toggle('nav-open');
      hamburger.classList.toggle('is-active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('nav-open');
        hamburger.classList.remove('is-active');
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        navLinksContainer.classList.remove('nav-open');
        hamburger.classList.remove('is-active');
      }
    });
  }

  // 3. SMOOTH SCROLL (con offset para header sticky)
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      // Filtrar el caso empty o sólo "#"
      if (!href || href === '#') return;

      const targetElement = document.querySelector(href);
      if (targetElement) {
        e.preventDefault();
        
        // Offset de 80px para compensar la navbar
        const offset = 80;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // El requerimiento mencionaba "scrollIntoView({ behavior: 'smooth', block: 'start' })", 
        // pero para poder darle el "Offset de 80px", `window.scrollTo` es la forma robusta 
        // a nivel JS puro sin depender de que exista un scroll-margin-top en el CSS.
      }
    });
  });

  // 4. SCROLL SPY (Resaltar navbar activo)
  const sections = document.querySelectorAll('section[id]');
  if (sections.length > 0 && 'IntersectionObserver' in window) {
    const spyOptions = {
      // Creamos una "ventana de observación" en el medio superior de la pantalla.
      // -80px para descontar la barra sticky, -50% asegura que marque justo antes del medio.
      rootMargin: '-80px 0px -50% 0px',
      threshold: 0
    };

    const spyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          // Remover clases active de todos los navLinks
          navLinks.forEach(link => link.classList.remove('active'));
          // Añadir active al correspondiente
          const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
          if (activeLink) activeLink.classList.add('active');
        }
      });
    }, spyOptions);

    sections.forEach(section => spyObserver.observe(section));
  }
}
