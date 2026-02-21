# Créér une Todo List avec JavaScript  

## Todo List Deluxe
 
 --------------

![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

--------

## Mission  

Projet personnel (Février 2026) :
Réalisation d’une Todo List en HTML, CSS et JavaScript.<br />
Ce type de projet est un classique du portfolio d’un développeur web, car il permet de mettre en pratique les bases essentielles du langage.

J’avais déjà créé une première version il y a 15 mois, mais mon niveau ayant progressé, j’ai souhaité proposer une version plus complète et mieux structurée.

Cette nouvelle Todo List inclut notamment :
* la modification d’une tâche existante
* la possibilité de marquer une tâche comme réalisée
* un message de confirmation avant suppression
* une interface plus soignée et plus ergonomique


## Compétences 
 
Ce projet me permet de consolider plusieurs compétences essentielles en JavaScript moderne et en développement front‑end :

Manipulation avancée du DOM
* Création dynamique d’éléments (createElement, append, innerHTML)
* Gestion d’interfaces interactives (édition inline, boutons d’action, overlay de confirmation)
* Mise à jour du rendu via une fonction render() centralisée

Gestion d’état et logique applicative
* Stockage des tâches dans un tableau manipulé en temps réel
* Gestion de différents états : ajout, édition, suppression, confirmation, marquage comme fait
* Utilisation de variables d’état (editingIdx, pendingDeleteIdx) pour contrôler l’interface

Persistance des données avec localStorage
* Sauvegarde automatique de la liste des tâches
* Récupération des données au chargement
* Persistance du mode sombre entre les sessions

Événements et interactions utilisateur
* Gestion des événements clavier (Enter, Escape)
* Gestion des clics pour modifier, valider, supprimer ou marquer une tâche
* Prévention du comportement par défaut des formulaires (preventDefault())

Mode sombre dynamique
* Détection automatique du thème système via matchMedia
* Application du thème via classList.toggle
* Sauvegarde du choix utilisateur dans localStorage

Organisation du code et bonnes pratiques
* Encapsulation dans une IIFE pour éviter la pollution de l’espace global
* Séparation claire entre : état, DOM, logique métier, rendu, persistance
* Code lisible, structuré et facilement maintenable


## Sécurité

Ce projet inclut plusieurs mesures destinées à renforcer la sécurité de l’application, en particulier contre les attaques XSS et les injections de contenu malveillant. L’objectif est de garantir que les données manipulées restent sûres, même lorsqu’elles proviennent de l’utilisateur.

Protection contre les attaques XSS
* les textes saisies sont insérés via "textContent"
* Le navigateur affiche la balise comme du texte, sans l’exécuter
* Aucune exécution de code dynamique

Validation stricte des entrées utilisateur
* suppression des espaces inutiles avec (trim())
* refus des entrées vides
* limitation de la longueur maximale du texte

Content Security Policy (CSP)
* bloquer les scripts inline non autorisés
* empêcher le chargement de scripts externes non approuvés
* réduire fortement les risques d’XSS persistante ou réfléchie

Stockage local sécurisé
* seules des données validées et non exécutables y sont stockées
* aucune donnée HTML ou script n’est jamais réinjectée dans le DOM via "innerHTML"
* les données restaurées au chargement sont traitées comme du texte

## Déploiement automatisé avec GitHub Actions

Ce projet m’a également permis d’utiliser GitHub Actions pour la première fois afin d’automatiser la mise en ligne du site.
Grâce à un workflow dédié, chaque mise à jour poussée sur la branche principale déclenche automatiquement un processus de build et de déploiement.

Cette approche offre plusieurs avantages :

* déploiement continu sans intervention manuelle
* réduction des erreurs humaines
* mise en production plus rapide et plus fiable
* meilleure compréhension des outils DevOps modernes

L’intégration de GitHub Actions représente une étape importante dans la professionnalisation de mon workflow de développement.


--------
<p align="center" width="100%">
    <img width="90%" src="https://github.com/Bernard-VERA/Todo-List-Deluxe/blob/main/image/site_img.jpeg"> 
</p>