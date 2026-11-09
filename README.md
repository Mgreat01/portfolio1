# Portfolio d’Ephraim Monga

Site statique : HTML, Tailwind CSS via CDN, CSS local et JavaScript natif. Aucune installation ni compilation nécessaire. Les anciens fichiers et captures sont conservés.

## Lancer le site

Depuis le dossier du projet :

```powershell
python -m http.server 8000
```

Ouvrir http://localhost:8000. Le chargement de Tailwind, Inter et Lucide nécessite Internet. Les styles spécifiques et le contenu sont locaux. Lucide est facultatif : son indisponibilité ne bloque plus le JavaScript du site.

## Modifier les contenus

- `assets/portfolio-data.js` : compétences, projets et profils. Laisser les URL inconnues vides ; un état « non renseigné » apparaît. Les URL externes doivent commencer par HTTPS ou HTTP. Ajouter les captures au projet et renseigner leur chemin et leur texte alternatif.
- `index.html` : présentation, parcours, coordonnées et structure des sections.
- `assets/styles.css` : identité visuelle et adaptations responsive.
- `assets/app.js` : composants, indicateurs, navigation et préparation de l’email.
- `assets/cv-ephraim-monga.pdf` : nouveau CV fourni le 7 novembre 2026. Remplacer ce fichier pour actualiser le téléchargement en conservant ce nom. `ECV.pdf` est conservé comme ancien document.

Si vous renommez le PDF, mettre à jour les liens dans `index.html` et `cv` dans les données. Le CV doit réellement être livré avec le site : le score ne vérifie pas sa disponibilité réseau en continu.

## Indicateurs et score

Les chiffres proviennent des données locales ; ils ne représentent ni visiteurs, ni contributions GitHub, ni connexions authentifiées. Compétences dédupliquées sans distinction de casse.

- Présentation : 20 points si renseignée.
- Compétences : 20 points si au moins une est renseignée.
- Projets : 10 points par projet avec titre, description, technologies et lien (démo ou dépôt), maximum 30 points pour trois projets.
- CV : 20 points si configuré et fourni avec le site.
- Profils : 5 points par lien renseigné, maximum 10 points pour deux profils.

Un score de 100 % signifie que ces critères sont remplis, même si certains liens facultatifs manquent. Le calcul ne mesure pas la qualité du travail ou l’expertise.

## Informations à compléter ou confirmer

- Confirmer le lien LinkedIn repris exactement depuis le nouveau PDF : son adresse contient un espace encodé. Remplacer au besoin dans les données et les liens de navigation/contact/pied de page.
- OpenSMR est ajouté : https://opensmr.netlify.app/. La première capture fournie est intégrée dans `assets/opensmr.png`. Compléter le dépôt, votre rôle précis et les technologies complémentaires. Angular est identifiable dans le HTML public.
- Renseigner le dépôt RO–TG et les démos web/mobile du gestionnaire d’événements si disponibles.
- Ajouter éventuellement d’autres profils et préciser votre rôle, les dates et les résultats de chaque projet.

Aucune synchronisation automatique : elle nécessiterait une API officielle, une configuration et éventuellement un serveur pour protéger les secrets. Aucun jeton ne doit être placé dans ces fichiers publics.

Le formulaire utilise `mailto:` : il ouvre un brouillon dans la messagerie du visiteur. Il n’envoie aucun message lui-même et indique une adresse de secours. Un envoi depuis le site nécessiterait un service de formulaire ou une API serveur.

## Vérification

```powershell
node --check assets/app.js
node --check assets/portfolio-data.js
```

Spring Boot est mis en avant comme technologie la mieux maîtrisée, sans pourcentage inventé. Les autres niveaux sont les autoévaluations du portfolio initial. GitLab est renseigné : https://gitlab.com/ephraimmonga5.

Les vérifications de cette intervention couvrent la syntaxe JavaScript, le rendu des composants via un DOM simulé, les critères du score, les ressources locales et la réponse HTTP. Le navigateur de prévisualisation était indisponible : la vérification visuelle réelle reste à faire à 375, 768 et 1440 px, avec navigation clavier, ouverture/fermeture du menu et téléchargement du CV.

Le projet reste dans son dépôt local ; aucune nouvelle plateforme d’hébergement n’a été configurée.

Portfolio actuellement hébergé : https://portfolio1-eight-wine.vercel.app/. Les changements locaux devront être déployés par le processus Vercel du dépôt.
