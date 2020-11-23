#Inportar NODE.js
FROM node:12.10.0

#Crear espacio de trabajo
WORKDIR /usr/app

#Copiar archivos json al espacio de trabajo 
COPY package*.json ./


RUN npm ci -qy

#copiar todos los archivos
COPY . .

#Publicar el sitio por el puerto 3000 localhost:3000
EXPOSE 3000

#compilar
CMD ["npm", "start"]
