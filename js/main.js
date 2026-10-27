/* ==========================================================================
   EGT TECHNOLOGIE - Main JavaScript (Navigation & Message de Bienvenue)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Gestion du menu mobile
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }

    // 2. Pop-up de bienvenue chaleureuse (s'affiche une seule fois par session)
    if (!sessionStorage.getItem("egt_welcome_seen")) {
        showWelcomeModal();
    }
});

function showWelcomeModal() {
    const modalHTML = `
    <div id="egtWelcomeModal" class="egt-modal-overlay">
        <div class="egt-modal-card">
            <button class="egt-modal-close" onclick="closeWelcomeModal()">&times;</button>
            <div class="egt-modal-header">
                <span class="egt-modal-badge"><i class="fas fa-heart"></i> Soyez les bienvenus</span>
                <h2>Bienvenue chez EGT TECHNOLOGIE !</h2>
                <p class="egt-modal-subtitle">
                    Votre partenaire de confiance à Lomé (Togo) guidé par l'expertise de <strong>Edo Gerard TOUDJI</strong>.
                </p>
            </div>
            <div class="egt-modal-body">
                <p style="color: #d1d5db; margin-bottom: 15px; font-size: 0.95rem;">Que pouvons-nous accomplir pour vous aujourd'hui ?</p>
                <div class="egt-welcome-grid">
                    <a href="services.html" class="egt-welcome-btn btn-serv">
                        <i class="fas fa-cogs"></i>
                        <span>Nos Services</span>
                    </a>
                    <a href="formations.html" class="egt-welcome-btn btn-form">
                        <i class="fas fa-graduation-cap"></i>
                        <span>Nos Formations</span>
                    </a>
                    <a href="boutique.html" class="egt-welcome-btn btn-shop">
                        <i class="fas fa-shopping-cart"></i>
                        <span>Vente en Ligne</span>
                    </a>
                    <a href="portfolio.html" class="egt-welcome-btn btn-port">
                        <i class="fas fa-laptop-code"></i>
                        <span>Nos Réalisations</span>
                    </a>
                </div>
            </div>
            <div class="egt-modal-footer">
                <button class="btn btn-primary" onclick="closeWelcomeModal()" style="width: 100%; padding: 12px; font-size: 1rem;">Explorer le site <i class="fas fa-arrow-right"></i></button>
            </div>
        </div>
    </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function closeWelcomeModal() {
    const modal = document.getElementById("egtWelcomeModal");
    if (modal) {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.remove();
            sessionStorage.setItem("egt_welcome_seen", "true");
        }, 300);
    }
}