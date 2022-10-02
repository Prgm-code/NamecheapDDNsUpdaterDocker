FROM node:latest

WORKDIR /usr/src/app_ddns
RUN apt-get install -y 

COPY package*.json ./
RUN npm install


COPY . .

CMD [ "node", "index.js" ]

