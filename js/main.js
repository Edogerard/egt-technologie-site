/* ==========================================================================
   EGT TECHNOLOGIE - Main JavaScript (Navigation Mobile & Redirection HTTPS)
   ========================================================================== */

// 1. Redirection automatique vers HTTPS (Adaptation universelle)
if (window.location.protocol === 'http:' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    window.location.href = window.location.href.replace('http:', 'https:');
}

// 2. Gestion de la navigation mobile
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuBtn && navLinks) {
        // Clic sur le bouton burger pour ouvrir/fermer le menu
        mobileMenuBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            navLinks.classList.toggle('show');
        });

        // Fermer le menu si on clique sur un lien de navigation
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navLinks.classList.remove('show');
            });
        });

        // Fermer le menu si on clique n'importe où ailleurs sur l'écran
        document.addEventListener('click', function (e) {
            if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('show');
            }
        });
    }
});