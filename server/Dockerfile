FROM node:22.4 as Production

WORKDIR /usr/src/server

COPY package.json .
COPY package-lock.json .

RUN NODE_ENV=development npm install

COPY . .

CMD ["sh", "-c", "npm run start"]