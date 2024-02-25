FROM node:14
WORKDIR /App
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 8081
EXPOSE 19000
EXPOSE 19001
EXPOSE 19002

CMD ["npm", "start"]

# docker run -it -p 19000:19000 -p 19001:19001 -p 19002:19002 -p 8081:8081 kickoff