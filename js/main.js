/* ==========================================================================
   EGT TECHNOLOGIE - Main JavaScript (Navigation & Message de Bienvenue)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Gestion du menu mobile
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('show');
        });

        // Fermer le menu si l'on clique en dehors
        document.addEventListener('click', (e) => {
            if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('show');
            }
        });

        // Fermer le menu au clic sur un lien
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show');
            });
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
                <div class="egt-welcome-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
                    <a href="services.html" class="egt-welcome-btn btn-serv" style="padding: 15px 10px; background: rgba(37, 99, 235, 0.15); border: 1px solid rgba(37, 99, 235, 0.3); border-radius: 10px; color: #fff; text-decoration: none; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 8px;">
                        <i class="fas fa-cogs" style="font-size: 1.5rem; color: var(--primary-color);"></i>
                        <span style="font-size: 0.85rem; font-weight: 600;">Nos Services</span>
                    </a>
                    <a href="formations.html" class="egt-welcome-btn btn-form" style="padding: 15px 10px; background: rgba(37, 99, 235, 0.15); border: 1px solid rgba(37, 99, 235, 0.3); border-radius: 10px; color: #fff; text-decoration: none; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 8px;">
                        <i class="fas fa-graduation-cap" style="font-size: 1.5rem; color: var(--primary-color);"></i>
                        <span style="font-size: 0.85rem; font-weight: 600;">Nos Formations</span>
                    </a>
                    <a href="portfolio.html" class="egt-welcome-btn btn-port" style="padding: 15px 10px; background: rgba(37, 99, 235, 0.15); border: 1px solid rgba(37, 99, 235, 0.3); border-radius: 10px; color: #fff; text-decoration: none; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 8px;">
                        <i class="fas fa-laptop-code" style="font-size: 1.5rem; color: var(--primary-color);"></i>
                        <span style="font-size: 0.85rem; font-weight: 600;">Réalisations</span>
                    </a>
                </div>
            </div>
            <div class="egt-modal-footer" style="margin-top: 20px;">
                <button class="btn btn-primary" onclick="closeWelcomeModal()" style="width: 100%; padding: 12px; font-size: 1rem; background-color: var(--primary-color); color: #fff; border: none; border-radius: 8px; cursor: pointer;">Explorer le site <i class="fas fa-arrow-right"></i></button>
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