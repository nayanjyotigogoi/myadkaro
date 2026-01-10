FROM node:20-alpine

# Set working directory
WORKDIR /app

# Accept build-time env variables
ARG NEXT_PUBLIC_API_BASE_URL
ENV NEXT_PUBLIC_API_BASE_URL=$NEXT_PUBLIC_API_BASE_URL

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# Build Next.js app
RUN npm run build

# Expose Next.js port
EXPOSE 3000

# Start Next.js
CMD ["npm", "start"]
