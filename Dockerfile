
# Montar servidor Nodejs

FROM node:9.4.0-alpine as client
#Crear espacio de trabajo
WORKDIR /usr/app/client/
#Copiar archivos json al nuevo destino
COPY client/package*.json ./
#ejecutar paquete con gestor npms
RUN npm install -qy
#Copiar configuracion al destino
COPY client/ ./
#Crear contenedor a partir del comando build
RUN npm run build


# Montar servidor Nodejs

FROM node:9.4.0-alpine
#Crear espacio de trabajo
WORKDIR /usr/app/
#Copiar archivos json al nuevo destino
COPY --from=client /usr/app/client/build/ ./client/build/
#Crear espacio de trabajo
WORKDIR /usr/app/server/
#Copiar archivos json al nuevo destino
COPY server/package*.json ./
#ejecutar paquete con gestor npm
RUN npm install -qy
#Copiar configuracion al destino
COPY server/ ./

ENV PORT 8000

EXPOSE 8000

CMD ["npm", "start"]