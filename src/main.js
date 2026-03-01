// MAGNO - Main JavaScript Entry Point

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initModal();
});

function initNavbar() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close menu on mobile
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });
}

function initModal() {
    const modal = document.getElementById('product-modal');
    const closeBtn = document.querySelector('.close-modal');
    const openBtns = document.querySelectorAll('.open-modal-btn');

    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalPrice = document.getElementById('modal-price');
    const modalWhatsapp = document.getElementById('modal-whatsapp-link');

    const waNumber = '541169135436';

    if (!modal) return;

    openBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const product = btn.getAttribute('data-product');
            const price = btn.getAttribute('data-price');
            const imgSrc = btn.getAttribute('data-img');

            modalImg.src = imgSrc;
            modalTitle.textContent = product;
            modalPrice.textContent = price;

            const message = `Hola, quiero consultar por el producto: ${product} (${price}) de MAGNO.`;
            modalWhatsapp.href = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;

            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevents background scroll
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}
