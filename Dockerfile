FROM node:14.7.0

WORKDIR /usr/src/app

COPY package.json ./

COPY package-lock.json ./

RUN npm install 

COPY . .

EXPOSE 3001/tcp

CMD ["npm", "run", "start"]