FROM node:14.7.0
EXPOSE 3001/tcp
WORKDIR /app
COPY . .
CMD npm run start
