#nasn3ou dockerfile pour le serveur Node.js zeda kima sna3na ll angular
FROM node:alpine3.14
WORKDIR /app
COPY package.json .

RUN npm install 

COPY . .

# port 3000
EXPOSE 3000

# Commande de démarrage du serveur
CMD ["npm", "start"]



# to run (docker build -t annestouna-backend .
#docker run -d -p 3000:3000 annestouna-backend )