# Projet Netoflixo

## Objectif

L'objectif de ce projet est de créer une plateforme de films inspirée de Netflix, avec une attention particulière portée à l'authentification des utilisateurs. Les principales fonctionnalités comprennent :

- **Partie Front-End** : Une interface utilisateur conviviale comprenant une liste de films, une barre de recherche, et des fonctionnalités avancées telles que l'authentification côté client. Les utilisateurs pourront également accéder à des catégories telles que "Favoris" et "En cours de visionnage".

- **Partie Back-End** : Un serveur local utilisant Node.js et Express, qui effectuera des requêtes à une base de données MongoDB pour récupérer les différents films. Une gestion sécurisée de l'authentification côté serveur sera mise en place.

- **Base de données locale** : Regroupant les différents films à afficher sur le site, cette base de données comprendra des informations essentielles telles que des tags de genre, une ID, un nom, une image et un synopsis.

## Languages / Frameworks / Outils

- **Front-End** : TypeScript, React, Vite, Redux.
  
- **Back-End** : Node.js, Express, MongoDB.

- **Outils de Conteneurisation** : Docker.

## Détails sur l'Authentification

L'authentification des utilisateurs sera gérée à la fois côté front-end et côté serveur pour garantir un environnement sécurisé. Les principales étapes comprennent :

### Côté Front-End

- **Barre de Recherche Authentifiée** : Les utilisateurs authentifiés auront accès à une barre de recherche avancée, améliorant l'expérience de navigation.

- **Catégories Personnalisées** : Les utilisateurs pourront marquer des films comme "Favoris" et les catégoriser dans "En cours de visionnage".

### Côté Back-End

- **Gestion Sécurisée des Utilisateurs** : Les informations d'authentification seront stockées de manière sécurisée dans la base de données.

- **Contrôle d'Accès** : Les requêtes vers les données sensibles seront protégées pour s'assurer que seuls les utilisateurs authentifiés y ont accès.

- **JWT (JSON Web Tokens)** : Un système de JWT sera mis en place pour gérer les sessions utilisateur, garantissant une authentification sécurisée.
