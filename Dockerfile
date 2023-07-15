FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Install dependencies
COPY package*.json ./
COPY prisma ./prisma/
COPY node_modules ./node_modules/

RUN npm install

# Generate prisma
RUN npx prisma generate

# Set the command to run when the container starts
CMD ["/bin/sh", "-c", "npm run dev"]
