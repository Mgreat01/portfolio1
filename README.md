# Ephraim Monga — Portfolio

Mon portfolio de développeur web et mobile, basé à Kinshasa. Il rassemble mes projets, mes compétences et mes liens professionnels.

[Voir le portfolio](https://portfolio1-eight-wine.vercel.app/) · [GitHub](https://github.com/Mgreat01) · [GitLab](https://gitlab.com/ephraimmonga5)

## Les projets

- **[OpenSMR](https://opensmr.netlify.app/)** — gestion des risques et conformité ISO 27001.
- **[GraphX Lab](https://ro-tg.vercel.app/)** — cours, quiz et laboratoire de graphes, sur le web et sur mobile.
- **DevRadar** — recherche de profils GitHub, découverte de projets et consultation de l’activité, en thème clair ou sombre.
- **[Gestionnaire d’événements](https://github.com/Mgreat01/eventfront)** — application web avec Laravel, Angular et MySQL.
- **[Version mobile](https://github.com/Mgreat01/projet-git)** — application Flutter reliée au backend Laravel.

## Côté technique

Le site repose sur HTML, CSS et JavaScript, sans étape de compilation. Tailwind est chargé par CDN, Inter via Google Fonts et les icônes via Lucide. Les mises en page et les interactions propres au portfolio sont dans `assets/`.

```text
index.html                       Sections, présentation et contact
assets/
  portfolio-data.js              Projets, compétences et profils
  app.js                         Rendu des cartes, navigation et formulaire
  gallery.js                     Consultation des captures des projets
  styles.css                     Styles et adaptations aux petits écrans
  cv-ephraim-monga.pdf            CV téléchargeable
  opensmr.png                    Capture d’OpenSMR
  projects/                      Captures de GraphX Lab et DevRadar
```

Chaque projet dispose d’une couverture. Les séries de captures se parcourent dans une galerie avec miniatures, boutons précédent/suivant et navigation au clavier. Les écrans web et mobile de GraphX Lab sont réunis dans la même fiche. Les anciennes captures restent à la racine du dépôt.

Les cartes affichent les liens disponibles dans les données. Le formulaire de contact prépare un email dans la messagerie du visiteur.

## En local

```sh
python -m http.server 8000
```

Le site est ensuite accessible sur [localhost:8000](http://localhost:8000). Une connexion Internet permet de charger Tailwind, la police et les icônes.

Vérification de la syntaxe JavaScript :

```sh
node --check assets/app.js
node --check assets/portfolio-data.js
node --check assets/gallery.js
```
