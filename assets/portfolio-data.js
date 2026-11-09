/* Modifier ici les contenus variables. Une URL inconnue reste vide. */
window.portfolioData = {
  presentation: 'Développeur Web & Mobile passionné, créant des solutions digitales performantes et élégantes',
  cv: 'assets/cv-ephraim-monga.pdf',
  profiles: [
    { name: 'GitHub', label: '@Mgreat01', url: 'https://github.com/Mgreat01', description: 'Mes dépôts et projets de développement.' },
    { name: 'LinkedIn', label: 'Ephraim Monga', url: 'https://www.linkedin.com/in/ephraim%20monga', description: 'Mon parcours professionnel. Lien fourni dans le CV.' },
    { name: 'Autre plateforme', label: 'À compléter', url: '', description: 'Un espace prêt pour un autre profil professionnel.' }
  ],
  skills: [
    {
        "title": "Développement Backend",
        "description": "Création d'APIs robustes et sécurisées, conception de bases de données et développement de logique métier.",
        "items": [
            "Laravel",
            "AdonisJS",
            "SpringBoot"
        ],
        "levels": [
            90,
            85,
            45
        ]
    },
    {
        "title": "Développement Frontend",
        "description": "Conception d'interfaces utilisateur réactives, intuitives et esthétiques avec les frameworks modernes.",
        "items": [
            "Angular",
            "TailwindCSS",
            "JavaScript/TypeScript"
        ],
        "levels": [
            85,
            90,
            88
        ]
    },
    {
        "title": "Développement Mobile",
        "description": "Création d'applications mobiles cross-platform performantes avec des interfaces natives.",
        "items": [
            "Flutter",
            "KivyMD",
            "Java"
        ],
        "levels": [
            80,
            20,
            15
        ]
    }
],
  projects: [
    { title: 'OpenSMR', description: 'Application de gestion des risques et de conformité ISO 27001 à laquelle j’ai contribué.', category: 'Application web · Gestion des risques', technologies: ['Angular'], image: '', alt: '', live: 'https://opensmr.netlify.app/', repository: '' },
    { title: 'Site d’exercices RO & TG', description: 'Plateforme interactive pour s’exercer en recherche opérationnelle et théorie des graphes.', category: 'Application web · Pédagogie', technologies: ['HTML', 'Tailwind CSS', 'JavaScript'], image: 'graph.png', alt: 'Interface des exercices RO et théorie des graphes', live: 'https://ro-tg.vercel.app/exercices.html', repository: '' },
    { title: 'Gestionnaire d’événements', description: 'Application complète pour organiser et gérer des événements avec interface moderne.', category: 'Application web · Événementiel', technologies: ['Laravel', 'Angular', 'MySQL'], image: 'eventspot.png', alt: 'Interface web du gestionnaire d’événements', live: '', repository: 'https://github.com/Mgreat01/eventfront' },
    { title: 'Gestionnaire d’événements mobile', description: 'Application complète pour organiser et gérer des événements version mobile.', category: 'Application mobile · Événementiel', technologies: ['Flutter', 'Laravel', 'MySQL'], image: 'evMob.png', alt: 'Écrans de l’application mobile de gestion d’événements', contain: true, live: '', repository: 'https://github.com/Mgreat01/projet-git' }
  ]
};
