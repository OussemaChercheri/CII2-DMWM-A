# Utilisation de l'image de base Node.js Alpine pour la construction
FROM node:12-alpine as build

# bch nasn3ou dossier fi west l'image kenou mch mawjoud
RUN mkdir -p /app

# Définition du répertoire de travail
WORKDIR /app

# Copie du fichier package.json fi west rép de l'app
COPY package.json /app/

# Installation des dépendances
RUN npm install 

# Copie du reste des fichiers de l'application
COPY . /app/

# Construction de l'application Angular en mode production
RUN npm run build --prod



# to run (docker build -t annestouna-frontend .
#docker run -d -p 8080:80 annestouna-frontend)
