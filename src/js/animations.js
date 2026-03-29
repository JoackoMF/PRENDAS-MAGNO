export function initAnimations() {
  // Selecciona elementes con .reveal o .animate-on-scroll
  const animatedElements = document.querySelectorAll('.reveal, .animate-on-scroll');
  if (animatedElements.length === 0) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
        // Ejecutar clase solo si interfecta y cumple el ratio mayor a 0.1
        if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
          entry.target.classList.add('is-visible');
          // Desconectar el elemento para salvar rendimiento
          observerInstance.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => observer.observe(el));
  } else {
    // Fallback silencioso si no hay soporte
    animatedElements.forEach(el => el.classList.add('is-visible'));
  }
}
