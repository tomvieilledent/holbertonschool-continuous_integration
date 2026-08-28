FROM node:22-alpine

RUN npm install -g npm@latest

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY index.js ./

EXPOSE 5001

CMD ["node", "index.js"]
