# Personal-Finance-Management

A web-based Personal Finance Management system with separate **frontend** and **backend** modules, designed to help users track income, expenses, and transactions efficiently.  

---

## 🚀 Features  

### Backend
- RESTful API endpoints for managing transactions  
- Add, edit, delete, and fetch transaction records  
- Secure database connection using environment variables  
- Structured project architecture (MVC pattern)  
- Middleware setup for future authentication and error handling  
- CORS enabled for frontend communication  

### Frontend
- Track income and expenses by category  
- Add, edit, and delete transactions  
- Responsive UI for desktop & mobile  
- Ready for integration with backend authentication  

---

## 🧰 Tech Stack  

### Backend
- Node.js — Runtime environment  
- Express.js — Backend framework  
- MongoDB (with Mongoose) — Database  
- dotenv — Environment variable management  
- cors — Cross-origin requests  
- jsonwebtoken, bcryptjs — For future authentication  

### Frontend
- React (functional components + hooks)  
- React Router — For routing  
- HTTP client (Axios or Fetch)  
- Styling: CSS / Styled-Components  
- Testing: Jest + React Testing Library  
  - Includes `@testing-library/jest-dom` for custom DOM matchers  

---

## 📥 Getting Started  

### Prerequisites
- Node.js installed  
- npm or yarn as package manager  
- MongoDB Atlas account or local MongoDB instance  

---

## 🔹 Backend Setup  

### Installation
```bash
# Clone this repository
git clone <your-backend-repo-url>
cd backend

# Install dependencies
npm install

```

## Backend Folder Structure
backend/
│
├── config/      
├── controllers/  
├── middleware/   
├── models/        
├── routes/      
├── .env        
├── package.json
└── server.js    

## Frontend Folder Structure
frontend/
│
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   └── style.css
├── README.md
├── package-lock.json
└── package.json
