/* ==========================================================================
   EGT TECHNOLOGIE - Services & Generator JS (Version Épurée & Moderne)
   ========================================================================== */

// Redirection automatique vers HTTPS (Adaptation universelle)
if (window.location.protocol === 'http:' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    window.location.href = window.location.href.replace('http:', 'https:');
}

const servicesData = [
    {
        id: "s1",
        category: "dev",
        title: "Création de Sites de E-commerce & Boutiques en Ligne",
        icon: "fa-shopping-cart",
        desc: "Conception de plateformes de vente en ligne performantes, sécurisées, avec catalogue produits, panier d'achat et intégration des paiements mobiles et cartes."
    },
    {
        id: "s2",
        category: "dev",
        title: "Création d'Applications Web de Gestion de Pannes",
        icon: "fa-tools",
        desc: "Développement d'applications web dédiées au suivi, à la signalisation et à la gestion centralisée des pannes matérielles et logistiques."
    },
    {
        id: "s3",
        category: "dev",
        title: "Développement d'Applications & Logiciels",
        icon: "fa-laptop-code",
        desc: "Conception de logiciels Windows (PySide6), applications mobiles Flutter (Android/iOS) et solutions sur mesure pour la digitalisation des entreprises."
    },
    {
        id: "s4",
        category: "pme",
        title: "Logiciels de Gestion pour Commerces & PME",
        icon: "fa-calculator",
        desc: "Gestion des ventes, caisses enregistreuses, facturation, suivi rigoureux des stocks, approvisionnements et tableaux de bord décisionnels."
    },
    {
        id: "s5",
        category: "dev",
        title: "Création de Sites Web & Plateformes en Ligne",
        icon: "fa-globe",
        desc: "Sites vitrines institutionnels, plateformes e-commerce, portails métiers et hébergement sécurisé pour accroître votre visibilité."
    },
    {
        id: "s6",
        category: "ia",
        title: "Intelligence Artificielle & Automatisation",
        icon: "fa-robot",
        desc: "Intégration d'API d'IA, chatbots conversationnels, automatisation de tâches répétitives et traitement intelligent de données."
    },
    {
        id: "s7",
        category: "maintenance",
        title: "Maintenance & Dépannage Informatique Avancé",
        icon: "fa-tools",
        desc: "Diagnostic de pannes PC (fixes/portables), réinstallation système, suppression de ransomwares/malwares et récupération de données."
    },
    {
        id: "s8",
        category: "maintenance",
        title: "Diagnostic & Assistance Logicielle Mobile",
        icon: "fa-mobile-alt",
        desc: "Outils de réparation ADB, débogage USB, flashage, contournement de sécurités logicielles et maintenance de smartphones Android/iOS."
    },
    {
        id: "s9",
        category: "reseau",
        title: "Réseaux Informatiques & Télécoms",
        icon: "fa-network-wired",
        desc: "Installation de réseaux LAN/Wi-Fi d'entreprise, configuration de routeurs et switchs, câblage structuré et sécurisation des accès."
    },
    {
        id: "s10",
        category: "special",
        title: "Solutions Informatiques pour Écoles & Centres",
        icon: "fa-user-graduate",
        desc: "Logiciels de gestion de scolarité, fiches élèves, bulletins de notes, emplois du temps et gestion informatisée des bibliothèques."
    },
    {
        id: "s11",
        category: "special",
        title: "Solutions pour Hôpitaux, Cliniques & Pharmacies",
        icon: "fa-clinic-medical",
        desc: "Gestion administrative des patients, prises de rendez-vous, suivi des stocks de médicaments en pharmacie et facturation médicalisée."
    },
    {
        id: "s12",
        category: "special",
        title: "Solutions pour Mairies & Administrations",
        icon: "fa-building",
        desc: "Numérisation des procédures administratives, suivi des recettes communales, taxes, quittances et gestion informatisée du courrier."
    },
    {
        id: "s13",
        category: "pme",
        title: "Solutions Restauration, Hôtellerie & Transport",
        icon: "fa-utensils",
        desc: "Prise de commande tactile sur table, réservations hôtelières, gestion de parcs automobiles et suivi logistique des livraisons."
    },
    {
        id: "s14",
        category: "pme",
        title: "Solutions Biométriques & Contrôle d'Accès",
        icon: "fa-fingerprint",
        desc: "Pointage biométrique des employés, gestion des temps de présence, impression de cartes professionnelles et sécurisation des accès."
    },
    {
        id: "s15",
        category: "maintenance",
        title: "Contrats de Maintenance & Support PME",
        icon: "fa-sync",
        desc: "Assistance technique à distance et sur site, sauvegardes périodiques automatisées et maintenance préventive mensuelle."
    }
];

let selectedServices = new Set();

document.addEventListener('DOMContentLoaded', () => {
    const servicesGrid = document.getElementById('servicesGrid');
    const searchInput = document.getElementById('serviceSearch');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const quotePanel = document.getElementById('quoteBox');
    const selectedCount = document.getElementById('selectedCount');
    const sendQuoteBtn = document.getElementById('sendQuoteBtn');

    function renderServices(filter = 'all', search = '') {
        if (!servicesGrid) return;
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
            card.className = 'card service-card';
            card.innerHTML = `
                <div class="card-icon"><i class="fas ${service.icon}"></i></div>
                <h3 class="card-title">${service.title}</h3>
                <p class="card-text">${service.desc}</p>
                <div style="margin-top: 20px;">
                    <label style="cursor: pointer; display: inline-flex; align-items: center; gap: 8px; color: var(--accent-color); font-weight: 600;">
                        <input type="checkbox" class="service-checkbox" data-title="${service.title}" ${isChecked ? 'checked' : ''} style="width: 18px; height: 18px; cursor: pointer;"> Sélectionner pour devis
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
        if (!quotePanel) return;
        if (selectedServices.size > 0) {
            selectedCount.textContent = `${selectedServices.size} service(s) sélectionné(s) : ` + Array.from(selectedServices).join(', ');
            sendQuoteBtn.style.display = 'inline-flex';
        } else {
            selectedCount.textContent = "Aucun service sélectionné pour l'instant. Cochez les cases ci-dessus pour composer votre demande.";
            sendQuoteBtn.style.display = 'none';
        }
    }

    // Gestion du filtre
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => {
                b.classList.remove('active');
                b.style.background = '#1f2937';
            });
            btn.classList.add('active');
            btn.style.background = 'var(--primary-color)';
            renderServices(btn.getAttribute('data-filter'), searchInput ? searchInput.value : '');
        });
    });

    // Gestion de la recherche
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
            renderServices(activeFilter, e.target.value);
        });
    }

    // Envoi du message WhatsApp (HTTPS sécurisé)
    if (sendQuoteBtn) {
        sendQuoteBtn.addEventListener('click', () => {
            if (selectedServices.size === 0) return;
            let message = `Bonjour *EGT TECHNOLOGIE*,\nJe souhaite obtenir un devis pour les prestations suivantes :\n\n`;
            selectedServices.forEach(item => {
                message += `• ${item}\n`;
            });
            message += `\nMerci de me recontacter pour en discuter.`;

            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/22890322533?text=${encodedMessage}`, '_blank');
        });
    }

    // Premier rendu
    renderServices();
});