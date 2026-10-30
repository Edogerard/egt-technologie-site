/* ==========================================================================
   EGT TECHNOLOGIE - Formations JS (Version Sécurisée & Universelle)
   ========================================================================== */

// Redirection automatique vers HTTPS (Adaptation universelle)
if (window.location.protocol === 'http:' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    window.location.href = window.location.href.replace('http:', 'https:');
}

const formationsData = [
    {
        id: "f1",
        title: "Initiation & Maîtrise de Python",
        icon: "fa-code",
        duration: "4 Semaines",
        level: "Débutant à Intermédiaire",
        desc: "Apprenez les bases de la programmation, la structure de données, l'orientation objet et la création d'applications bureau avec PySide6."
    },
    {
        id: "f2",
        title: "Développement Web Moderne (HTML, CSS, JS, PHP)",
        icon: "fa-globe",
        duration: "6 Semaines",
        level: "Tous Niveaux",
        desc: "Concevez de A à Z des sites web professionnels dynamiques, connectés à des bases de données SQL et sécurisés."
    },
    {
        id: "f3",
        title: "Développement Mobile Multiplateforme (Flutter & Dart)",
        icon: "fa-mobile-alt",
        duration: "6 Semaines",
        level: "Intermédiaire",
        desc: "Créez des applications mobiles performantes pour Android et iOS à partir d'une seule base de code."
    },
    {
        id: "f4",
        title: "Réseaux Informatiques & Télécommunications",
        icon: "fa-network-wired",
        desc: "Maîtrisez l'installation des réseaux LAN, le câblage Ethernet, la configuration Wi-Fi, les routeurs et la sécurité des accès.",
        duration: "4 Semaines",
        level: "Technique"
    },
    {
        id: "f5",
        title: "Maintenance Informatique PC & Android",
        icon: "fa-tools",
        duration: "3 Semaines",
        level: "Pratique",
        desc: "Diagnostic de pannes matérielles et logicielles, installation de Windows, optimisation et réparation d'appareils mobiles."
    },
    {
        id: "f6",
        title: "Utilisation Pratique de l'Intelligence Artificielle",
        icon: "fa-robot",
        duration: "2 Semaines",
        level: "Tout public",
        desc: "Apprenez à exploiter les outils d'IA et les assistants conversationnels pour automatiser vos tâches bureautiques et professionnelles."
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const formationsGrid = document.getElementById('formationsGrid');

    if (formationsGrid) {
        formationsGrid.innerHTML = '';
        formationsData.forEach(form => {
            const card = document.createElement('div');
            card.className = 'formation-card';
            card.innerHTML = `
                <div>
                    <div style="font-size: 2rem; color: var(--primary-color); margin-bottom: 15px;">
                        <i class="fas ${form.icon}"></i>
                    </div>
                    <h3 style="font-size: 1.2rem; color: var(--secondary-color); margin-bottom: 10px;">${form.title}</h3>
                    <div class="formation-meta">
                        <span><i class="far fa-clock"></i> ${form.duration}</span>
                        <span><i class="fas fa-signal"></i> ${form.level}</span>
                    </div>
                    <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 25px;">${form.desc}</p>
                </div>
                <div>
                    <button class="btn btn-primary" style="width: 100%;" onclick="registerFormation('${form.title}')">
                        <i class="fab fa-whatsapp"></i> S'inscrire / S'informer
                    </button>
                </div>
            `;
            formationsGrid.appendChild(card);
        });
    }
});

function registerFormation(formationTitle) {
    const message = `Bonjour *EGT TECHNOLOGIE*,\nJe souhaite m'inscrire ou obtenir plus d'informations sur la formation suivante :\n*${formationTitle}*\n\nMerci de me recontacter.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/22890322533?text=${encodedMessage}`, '_blank');
}