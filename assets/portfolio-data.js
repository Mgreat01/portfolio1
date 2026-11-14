/* Modifier ici les contenus variables. Une URL inconnue reste vide. */
window.portfolioData = {
  presentation: 'Développeur Web & Mobile passionné, créant des solutions digitales performantes et élégantes',
  cv: 'assets/cv-ephraim-monga.pdf',
  profiles: [
    { name: 'GitHub', label: '@Mgreat01', url: 'https://github.com/Mgreat01', description: 'Mes dépôts et projets de développement.' },
    { name: 'LinkedIn', label: 'Ephraim Monga', url: 'https://www.linkedin.com/in/ephraim%20monga', description: 'Mon parcours, mes expériences et mes échanges professionnels.' },
    { name: 'GitLab', label: '@ephraimmonga5', url: 'https://gitlab.com/ephraimmonga5', description: 'Mes dépôts et contributions sur GitLab.' }
  ],
  skills: [
    {
        "title": "Développement Backend",
        "description": "Création d'APIs robustes et sécurisées, conception de bases de données et développement de logique métier.",
        "items": [
            "Spring Boot",
            "Laravel",
            "AdonisJS"
        ],
        "levels": [
            95,
            75,
            65
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
    {
      title: 'OpenSMR', platform: 'web', featured: true,
      description: 'Application de gestion des risques et de conformité ISO 27001 à laquelle j’ai contribué. Inventaire des actifs, matrice des risques et déclaration d’applicabilité sont réunis dans un même espace.',
      category: 'Application web · Gestion des risques', technologies: ['Angular'],
      image: 'assets/projects/opensmr-tableau-de-bord.png', alt: 'Vue d’ensemble OpenSMR avec les indicateurs du périmètre et la matrice des risques',
      live: 'https://opensmr.netlify.app/', repository: '',
      gallery: [
        { src: 'assets/projects/opensmr-tableau-de-bord.png', label: 'Vue d’ensemble · Tableau de bord', format: 'web' },
        { src: 'assets/projects/opensmr-matrice-risques.png', label: 'Analyse · Matrice des risques', format: 'web' },
        { src: 'assets/projects/opensmr-ajout-actif.png', label: 'Inventaire · Ajout d’un actif', format: 'web' },
        { src: 'assets/projects/opensmr-scenario-risque.png', label: 'Risques · Création d’un scénario', format: 'web' },
        { src: 'assets/projects/opensmr-mesures-iso.png', label: 'Référentiel · Mesures ISO 27001', format: 'web' },
        { src: 'assets/projects/opensmr-declaration-applicabilite.png', label: 'Conformité · Déclaration d’applicabilité', format: 'web' },
        { src: 'assets/projects/opensmr-sentinel.png', label: 'Sentinel · Aide à l’évaluation des risques', format: 'web' },
        { src: 'assets/projects/opensmr-tableau-sombre.png', label: 'Thème sombre · Tableau de bord', format: 'web' },
        { src: 'assets/projects/opensmr-actifs-sombre.png', label: 'Thème sombre · Inventaire des actifs', format: 'web' },
        { src: 'assets/opensmr.png', label: 'Connexion · Accès à OpenSMR', format: 'web' }
      ]
    },
    {
      title: 'GraphX Lab — Web', platform: 'web',
      description: 'Cours, quiz et laboratoire interactif pour explorer la recherche opérationnelle et la théorie des graphes. Une version mobile complète cette plateforme web.',
      category: 'Application web · Pédagogie', technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
      image: 'assets/projects/graphx-laboratoire.png', alt: 'Laboratoire web GraphX Lab pour construire un graphe et choisir un algorithme',
      live: 'https://ro-tg.vercel.app/', repository: '',
      gallery: [
        { src: 'assets/projects/graphx-laboratoire.png', label: 'Web · Laboratoire de graphes', format: 'web' },
        { src: 'assets/projects/graphx-cours.png', label: 'Web · Bibliothèque de cours', format: 'web' },
        { src: 'assets/projects/graphx-exemple.png', label: 'Web · Exemple de graphe orienté', format: 'web' }
      ]
    },
    {
      title: 'GraphX Lab — Mobile', platform: 'mobile',
      description: 'L’application compagnon de GraphX Lab : des cours et quiz de recherche opérationnelle et de théorie des graphes, avec un laboratoire pour construire un graphe et explorer ses algorithmes.',
      category: 'Application mobile · Pédagogie', technologies: ['Flutter', 'Dart'],
      image: 'assets/projects/graphx-mobile-laboratoire.jpeg', alt: 'Graphe orienté construit dans le laboratoire mobile GraphX Lab', contain: true,
      live: '', repository: 'https://github.com/Mgreat01/roTGMobi',
      gallery: [
        { src: 'assets/projects/graphx-mobile-laboratoire.jpeg', label: 'Laboratoire · Graphe et parcours', format: 'mobile' },
        { src: 'assets/projects/graphx-mobile-methodes.jpeg', label: 'Choix des algorithmes', format: 'mobile' },
        { src: 'assets/projects/graphx-mobile-construction.jpeg', label: 'Construction des sommets et des arêtes', format: 'mobile' },
        { src: 'assets/projects/graphx-mobile-accueil-laboratoire.jpeg', label: 'Laboratoire · Nouveau graphe', format: 'mobile' },
        { src: 'assets/projects/graphx-mobile-chapitres.jpeg', label: 'Chapitres de recherche opérationnelle', format: 'mobile' },
        { src: 'assets/projects/graphx-mobile-representations.jpeg', label: 'Cours · Représentation des graphes', format: 'mobile' },
        { src: 'assets/projects/graphx-mobile-transport.jpeg', label: 'Cours · Problème de transport', format: 'mobile' },
        { src: 'assets/projects/graphx-mobile.jpeg', label: 'Chapitres de théorie des graphes', format: 'mobile' }
      ]
    },
    {
      title: 'DevRadar', platform: 'mobile',
      description: 'Application mobile pour rechercher des profils GitHub, explorer leurs projets et consulter leur activité. Des filtres par langage et localisation facilitent la découverte, avec une interface claire ou sombre.',
      category: 'Application mobile · Outils développeur', technologies: [],
      image: 'assets/projects/devradar-profil-clair.jpeg', alt: 'Profil GitHub et aperçu de son activité dans DevRadar', contain: true,
      live: '', repository: 'https://github.com/Mgreat01/devradar_mobile',
      gallery: [
        { src: 'assets/projects/devradar-profil-clair.jpeg', label: 'Thème clair · Profil GitHub', format: 'mobile' },
        { src: 'assets/projects/devradar-profil-sombre.jpeg', label: 'Thème sombre · Profil GitHub', format: 'mobile' },
        { src: 'assets/projects/devradar-recherche.jpeg', label: 'Recherche et profils récents', format: 'mobile' },
        { src: 'assets/projects/devradar-filtres.jpeg', label: 'Filtres de découverte', format: 'mobile' },
        { src: 'assets/projects/devradar-resultats.jpeg', label: 'Résultats de la recherche', format: 'mobile' },
        { src: 'assets/projects/devradar-langages.jpeg', label: 'Répartition des langages', format: 'mobile' }
      ]
    },
    { title: 'Gestionnaire d’événements', platform: 'web', description: 'Application complète pour organiser et gérer des événements avec interface moderne.', category: 'Application web · Événementiel', technologies: ['Laravel', 'Angular', 'MySQL'], image: 'eventspot.png', alt: 'Interface web du gestionnaire d’événements', live: '', repository: 'https://github.com/Mgreat01/eventfront' },
    { title: 'Gestionnaire d’événements mobile', platform: 'mobile', description: 'Application complète pour organiser et gérer des événements version mobile.', category: 'Application mobile · Événementiel', technologies: ['Flutter', 'Laravel', 'MySQL'], image: 'evMob.png', alt: 'Écrans de l’application mobile de gestion d’événements', contain: true, live: '', repository: 'https://github.com/Mgreat01/projet-git' }
  ]
};
