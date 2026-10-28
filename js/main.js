/* ==========================================================================
   EGT TECHNOLOGIE - Main JavaScript (Navigation Mobile)
   ========================================================================== */

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