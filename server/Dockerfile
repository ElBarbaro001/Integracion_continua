FROM node:12.10.0-alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm install -qy

COPY . .

EXPOSE 8090

CMD ["npm", "start"]
