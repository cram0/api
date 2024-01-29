# Comment faire une API Express

## Pré-requis

### Installer nodejs et npm

Fedora `sudo dnf install nodejs npm`\
---\
Ubuntu `sudo apt install nodejs npm`\
---\
Arch `sudo pacman -Sy nodejs npm`

### Demarrer le projet

Lancer le projet avec npm pour verifier que tout démarre :

`npm i && npm run dev`

Vous aurez surement une erreur avec un code **'ERR_SOCKET_BAD_PORT'**, c'est _normal_.

Vous pouvez aller voir à quoi est directement relié `npm run dev` dans le fichier `package.json` mais pas besoin d'y toucher pour l'instant.

## Exercices

### 1) Definir le port pour Express

Quand vous commencez votre API, on vous demande quel port vous souhaitez utiliser, par défaut pour express on utilise le port **3030**.

Nous utilisons un fichier `.env` qui sera lu par notre API pour lui donner, à vous de le remplir avec le bon.


### 2)