# Step 1: Use an official Node.js image
FROM node:22

# Step 2: Set working directory inside container
WORKDIR /usr/src/app

# Step 3: Copy package.json & package-lock.json first (for faster builds)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy all other backend files
COPY . .

# Step 6: Expose the port your app uses (5000 here)
EXPOSE 5000

# Step 7: Start the app
CMD ["npm", "start"]
