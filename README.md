# Ephraim Monga — Portfolio

Mon portfolio de développeur web et mobile, basé à Kinshasa. Il rassemble mes projets, mes compétences et mes liens professionnels.

[Voir le portfolio](https://portfolio1-eight-wine.vercel.app/) · [GitHub](https://github.com/Mgreat01) · [GitLab](https://gitlab.com/ephraimmonga5)

## Les projets

- **[OpenSMR](https://opensmr.netlify.app/)** — gestion des risques et conformité ISO 27001.
- **[RO & TG](https://ro-tg.vercel.app/exercices.html)** — exercices de recherche opérationnelle et de théorie des graphes.
- **[Gestionnaire d’événements](https://github.com/Mgreat01/eventfront)** — application web avec Laravel, Angular et MySQL.
- **[Version mobile](https://github.com/Mgreat01/projet-git)** — application Flutter reliée au backend Laravel.

## Côté technique

Le site repose sur HTML, CSS et JavaScript, sans étape de compilation. Tailwind est chargé par CDN, Inter via Google Fonts et les icônes via Lucide. Les mises en page et les interactions propres au portfolio sont dans `assets/`.

```text
index.html                       Sections, présentation et contact
assets/
  portfolio-data.js              Projets, compétences et profils
  app.js                         Rendu des cartes, navigation et formulaire
  styles.css                     Styles et adaptations aux petits écrans
  cv-ephraim-monga.pdf            CV téléchargeable
  opensmr.png                    Capture d’OpenSMR
```

Les autres captures sont à la racine du dépôt. Les cartes affichent les liens disponibles dans les données. Le formulaire de contact prépare un email dans la messagerie du visiteur.

## En local

```sh
python -m http.server 8000
```

Le site est ensuite accessible sur [localhost:8000](http://localhost:8000). Une connexion Internet permet de charger Tailwind, la police et les icônes.

Vérification de la syntaxe JavaScript :

```sh
node --check assets/app.js
node --check assets/portfolio-data.js
```
