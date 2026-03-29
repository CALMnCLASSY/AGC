FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies including devDependencies
# (tsx and typescript are devDependencies needed to run the app)
# We temporarily set NODE_ENV to development to force full install
RUN NODE_ENV=development npm ci

# Copy source code
COPY . .

# Expose the Express health check port
EXPOSE 3031

# Health check so Coolify knows the app is running
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
  CMD wget -qO- http://localhost:3031/health || exit 1

# Start the bot
CMD ["npm", "start"]
