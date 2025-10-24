Personal-Finance-Management — Backend

A web-based Personal Finance Management system with separate frontend and backend modules. This repository contains the backend API built using Node.js, Express, and MongoDB, designed to handle data, transactions, and future authentication.

🚀 Features

RESTful API endpoints for managing transactions

Add, edit, delete, and fetch transaction records

Secure database connection using environment variables

Structured project architecture (MVC pattern)

Middleware setup for future authentication and error handling

CORS enabled for frontend communication

🧰 Tech Stack

Node.js — Runtime environment

Express.js — Backend framework

MongoDB (with Mongoose) — Database

dotenv — Environment variable management

cors — Cross-origin requests

jsonwebtoken, bcryptjs — (for future authentication support)

📥 Getting Started ✅ Prerequisites

Node.js installed

npm as a package manager

MongoDB Atlas account or local MongoDB instance

🧑‍💻 Installation
```
# Clone this repository
git clone <your-backend-repo-url>
cd backend

# Install dependencies
npm install
```
▶️ Run the Server
```
# Development mode (with nodemon if installed)
npm run dev

# OR normal mode
npm start
```
Server will start on:
```
http://localhost:5000
```
You should see:
```
Server running on port 5000
MongoDB Connected
```
⚙️ Configuration

Create a .env file in the root of the backend directory and add:
```
PORT=5000
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your_secret_key   # optional for auth
```
Replace your-mongodb-connection-string with the connection URL from MongoDB Atlas.

📂 Folder Structure backend/ │ ├── config/ # Database config ├── controllers/ # Business logic ├── middleware/ # Middlewares (auth, error handling) ├── models/ # Mongoose models ├── routes/ # API routes ├── .env # Environment variables ├── package.json ├── server.js # Main entry point └── README.md

🧪 API Test

You can use [Postman] or cURL to test the routes.

Example:
```
GET http://localhost:5000/
```
Response:
```
"API is running ..."
```
🧑‍🤝‍🧑 Contributors

Backend: S Rahul Kanth

Frontend: Revathi Miriyam

├── models/ # Mongoose models (User, Account, Transaction) ├── controllers/ # Business logic for each route ├── routes/ # API routes ├── middleware/ # Auth middleware (JWT verification) ├── server.js # Entry point of the application └── .env # Environment variables.