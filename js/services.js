/* ==========================================================================
   EGT TECHNOLOGIE - Services & Generator JS
   ========================================================================== */

const servicesData = [
    {
        id: "s1",
        category: "dev",
        title: "Développement d'Applications & Logiciels",
        icon: "fa-laptop-code",
        desc: "Logiciels Windows, applications Android/iOS avec Flutter, sites Web dynamiques, automatisation et modernisation de systèmes."
    },
    {
        id: "s2",
        category: "pme",
        title: "Logiciels de Gestion pour Entreprises & Commerces",
        icon: "fa-calculator",
        desc: "Gestion des ventes, caisse, facturation, stock, approvisionnements, salaires et tableaux de bord décisionnels."
    },
    {
        id: "s3",
        category: "dev",
        title: "Création de Sites Web & Plateformes en Ligne",
        icon: "fa-globe",
        desc: "Sites vitrines institutionnels, e-commerce, espaces membres, portails de réservation et hébergement sécurisé."
    },
    {
        id: "s4",
        category: "ia",
        title: "Intelligence Artificielle & Automatisation",
        icon: "fa-robot",
        desc: "Chatbots conversationnels, génération automatique de rapports, traitement de données et intégration d'API d'IA."
    },
    {
        id: "s5",
        category: "maintenance",
        title: "Maintenance & Dépannage Informatique",
        icon: "fa-tools",
        desc: "Diagnostic de pannes PC/Android, réinstallation système, suppression de virus/malwares, sauvegarde et restauration."
    },
    {
        id: "s6",
        category: "reseau",
        title: "Télécommunications & Réseaux Informatiques",
        icon: "fa-network-wired",
        desc: "Installation LAN/Wi-Fi d'entreprise, configuration de routeurs/switchs, câblage Ethernet et sécurisation des accès."
    },
    {
        id: "s7",
        category: "maintenance",
        title: "Diagnostic & Assistance Logicielle Android",
        icon: "fa-mobile-alt",
        desc: "Outils ADB, dépannage logiciel USB, sauvegardes, débogage et développement de suites de diagnostic sur PC."
    },
    {
        id: "s8",
        category: "dev",
        title: "Bases de Données & Systèmes d'Information",
        icon: "fa-database",
        desc: "Conception de schémas relationnels SQL (SQLite, MySQL, PostgreSQL), migration, nettoyage et sécurisation des données."
    },
    {
        id: "s9",
        category: "reseau",
        title: "Sécurité Informatique & Protection",
        icon: "fa-shield-alt",
        desc: "Diagnostic de sécurité, sécurisation des réseaux Wi-Fi, gestion des droits d'accès et politiques de sauvegarde."
    },
    {
        id: "s10",
        category: "special",
        title: "Solutions Informatiques pour Écoles & Centres",
        icon: "fa-user-graduate",
        desc: "Gestion de scolarité, fiches élèves, bulletins de notes, frais de scolarité, emplois du temps et bibliothèques."
    },
    {
        id: "s11",
        category: "special",
        title: "Solutions pour Hôpitaux, Cliniques & Pharmacies",
        icon: "fa-clinic-medical",
        desc: "Gestion administrative des patients, rendez-vous, stocks de médicaments, ventes en pharmacie et facturation."
    },
    {
        id: "s12",
        category: "special",
        title: "Solutions pour Mairies & Administrations",
        icon: "fa-building",
        desc: "Numérisation des procédures, suivi des recettes communales, taxes, quittances et gestion administrative des courriers."
    },
    {
        id: "s13",
        category: "pme",
        title: "Solutions Restauration, Hôtellerie & Transport",
        icon: "fa-utensils",
        desc: "Prise de commande sur table, réservations de chambres, suivi de parcs automobiles et livraisons."
    },
    {
        id: "s14",
        category: "pme",
        title: "Solutions Biométriques & Contrôle d'Accès",
        icon: "fa-fingerprint",
        desc: "Fiches employés, impression de cartes professionnelles, gestion du temps de présence et pointeuses biométriques."
    },
    {
        id: "s15",
        category: "maintenance",
        title: "Contrats de Maintenance & Suivi Mensuel",
        icon: "fa-sync",
        desc: "Assistance technique à distance, sauvegardes périodiques, mises à jour logicielles et support régulier aux PME."
    }
];

let selectedServices = new Set();

document.addEventListener('DOMContentLoaded', () => {
    const servicesGrid = document.getElementById('servicesGrid');
    const searchInput = document.getElementById('searchInput');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const quotePanel = document.getElementById('quotePanel');
    const selectedCount = document.getElementById('selectedCount');
    const sendQuoteBtn = document.getElementById('sendQuoteBtn');

    function renderServices(filter = 'all', search = '') {
        servicesGrid.innerHTML = '';
        const filtered = servicesData.filter(item => {
            const matchesFilter = (filter === 'all' || item.category === filter);
            const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || 
                                  item.desc.toLowerCase().includes(search.toLowerCase());
            return matchesFilter && matchesSearch;
        });

        if (filtered.length === 0) {
            servicesGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px 0;">Aucun service ne correspond à votre recherche.</p>`;
            return;
        }

        filtered.forEach(service => {
            const isChecked = selectedServices.has(service.title);
            const card = document.createElement('div');
            card.className = 'service-card';
            card.innerHTML = `
                <div>
                    <div class="service-card-header">
                        <div class="service-card-icon"><i class="fas ${service.icon}"></i></div>
                        <h3 style="font-size: 1.15rem; color: var(--secondary-color);">${service.title}</h3>
                    </div>
                    <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 20px;">${service.desc}</p>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-color); padding-top: 15px;">
                    <label style="cursor: pointer; font-size: 0.9rem; font-weight: 600; color: var(--primary-color);">
                        <input type="checkbox" class="service-checkbox" data-title="${service.title}" ${isChecked ? 'checked' : ''}> Sélectionner pour devis
                    </label>
                </div>
            `;
            servicesGrid.appendChild(card);
        });

        // Event listeners sur les checkboxes
        document.querySelectorAll('.service-checkbox').forEach(cb => {
            cb.addEventListener('change', (e) => {
                const title = e.target.getAttribute('data-title');
                if (e.target.checked) {
                    selectedServices.add(title);
                } else {
                    selectedServices.delete(title);
                }
                updateQuotePanel();
            });
        });
    }

    function updateQuotePanel() {
        if (selectedServices.size > 0) {
            quotePanel.style.display = 'flex';
            selectedCount.textContent = selectedServices.size;
        } else {
            quotePanel.style.display = 'none';
        }
    }

    // Gestion du filtre
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderServices(btn.getAttribute('data-filter'), searchInput.value);
        });
    });

    // Gestion de la recherche
    searchInput.addEventListener('input', (e) => {
        const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
        renderServices(activeFilter, e.target.value);
    });

    // Envoi du message WhatsApp
    sendQuoteBtn.addEventListener('click', () => {
        if (selectedServices.size === 0) return;
        let message = `Bonjour *EGT TECHNOLOGIE*,\nJe souhaite obtenir un devis pour les services suivants :\n\n`;
        selectedServices.forEach(item => {
            message += `- ${item}\n`;
        });
        message += `\nMerci de me recontacter pour discuter du projet.`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/22890322533?text=${encodedMessage}`, '_blank');
    });

    // Premier rendu
    renderServices();
});