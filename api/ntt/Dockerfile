FROM node:20

WORKDIR /api/ntt

COPY package*json ./

RUN npm i

COPY . .

EXPOSE 3001

CMD ["npm", "run", "server"]