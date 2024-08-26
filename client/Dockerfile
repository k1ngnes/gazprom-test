FROM node:22 as Production

WORKDIR /usr/src/client

COPY package.json .
COPY package-lock.json .

RUN NODE_ENV=development npm install

COPY . .

RUN npm run build

CMD ["sh", "-c", "npm run dev"]