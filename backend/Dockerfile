FROM node:19.4 as buidler

COPY ./package.json ./package.json
RUN npm install --legacy-peer-deps

COPY ./tsconfig.json ./tsconfig.json
COPY ./tsconfig.build.json ./tsconfig.build.json
COPY ./.env ./.env
COPY ./src/ ./src/
COPY ./prisma/ ./prisma/

ENV DATABASE_URL="postgresql://postgres:xrOsNEW8kLZjwGv9TpjZ@containers-us-west-193.railway.app:7651/railway"
ENV JWT_SECRET='axzcbasfawerzxclvn'
RUN npx prisma generate dev
RUN npm run build

EXPOSE 5000
CMD npm run start:prod