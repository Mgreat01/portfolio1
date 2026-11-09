/* Modifier ici les contenus variables. Une URL inconnue reste vide. */
window.portfolioData = {
  presentation: 'Développeur Web & Mobile Full-Stack basé à Kinshasa.',
  cv: 'assets/cv-ephraim-monga.pdf',
  profiles: [
    { name: 'GitHub', label: '@Mgreat01', url: 'https://github.com/Mgreat01', description: 'Mes dépôts et projets de développement.' },
    { name: 'LinkedIn', label: 'Ephraim Monga', url: 'https://www.linkedin.com/in/ephraim%20monga', description: 'Mon parcours professionnel. Lien fourni dans le CV.' },
    { name: 'Autre plateforme', label: 'À compléter', url: '', description: 'Un espace prêt pour un autre profil professionnel.' }
  ],
  skills: [
    { title: 'Backend & API', description: 'Logique métier, services et échanges de données.', items: ['Laravel', 'AdonisJS', 'Spring Boot', 'Node.js', 'Python', 'REST API'] },
    { title: 'Interfaces web & mobile', description: 'Des interfaces adaptées aux usages et aux écrans.', items: ['Angular', 'Flutter', 'Dart', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'KivyMD'] },
    { title: 'Données & outils', description: 'Stockage, collaboration et environnements de développement.', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Linux', 'Docker', 'Git', 'GitHub', 'GitLab'] }
  ],
  projects: [
    { title: 'OpenSMR', description: 'Application de gestion des risques et de conformité ISO 27001 à laquelle j’ai contribué.', category: 'Application web · Gestion des risques', technologies: ['Angular'], image: '', alt: '', live: 'https://opensmr.netlify.app/', repository: '' },
    { title: 'Exercices RO & théorie des graphes', description: 'Plateforme interactive pour s’exercer en recherche opérationnelle et théorie des graphes.', category: 'Application web · Pédagogie', technologies: ['HTML', 'Tailwind CSS', 'JavaScript'], image: 'graph.png', alt: 'Interface des exercices RO et théorie des graphes', live: 'https://ro-tg.vercel.app/exercices.html', repository: '' },
    { title: 'Gestionnaire d’événements', description: 'Application web pour organiser et gérer des événements avec une interface dédiée.', category: 'Application web · Événementiel', technologies: ['Laravel', 'Angular', 'MySQL'], image: 'eventspot.png', alt: 'Interface web du gestionnaire d’événements', live: '', repository: 'https://github.com/Mgreat01/eventfront' },
    { title: 'Gestionnaire d’événements mobile', description: 'Version mobile du gestionnaire d’événements, développée avec Flutter et Laravel.', category: 'Application mobile · Événementiel', technologies: ['Flutter', 'Laravel', 'MySQL'], image: 'evMob.png', alt: 'Écrans de l’application mobile de gestion d’événements', contain: true, live: '', repository: 'https://github.com/Mgreat01/projet-git' }
  ]
};
