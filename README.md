# Personal-Finance-Management
A web-based Personal Finance Management system with separate frontend and backend modules

## 🚀 Features  
- Track income and expenses by category  
- Add, edit and delete transactions  
- Responsive UI for desktop & mobile  
- Ready for integration with authentication & backend

## 🧰 Tech Stack  
- React (functional components + hooks)  
- React Router (for routing)  
- HTTP client (Axios or Fetch)  
- Styling: CSS / Styled-Components
- - Testing: Jest + React Testing Library
  - Includes `@testing-library/jest-dom` for custom DOM matchers
## 📥 Getting Started  

### Prerequisites  
- Node.js installed  
- npm or yarn as package manager

### Installation  
```bash
# Clone this repository  
git clone <your-repo-url>  
cd frontend  

# Install dependencies  
npm install   # or yarn install  
```

### Run in development  
```bash
npm start   # or yarn start  
```

### Build for production  
```bash
npm run build   # or yarn build  
```

## ⚙️ Configuration  
Create a `.env` file in the `frontend` directory.  
```env
REACT_APP_API_BASE_URL=http://localhost:5000/api  
```
*(Update when backend is ready.)*

## 📂 Folder Structure  
```
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
```




