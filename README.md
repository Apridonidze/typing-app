# Typing App

Typing App is a simple typing game that lets you practice typing with custom themes and adjustable font sizes. Your settings are saved locally, so you won’t need to reset them every time you visit or refresh the app. You can also view the current version’s features and upcoming updates for future versions.

## Features

- Custom themes and font sizes that are saved locally  
- Real-time typing practice and tracking  
- View current version features and planned updates  

## Technologies Used

- React  
- Bootstrap  
- Node.js

- ## Structure
- Typing-App/
├── backend/
│ ├── .env
│ ├── package-lock.json
│ ├── package.json
│ ├── server.js
│ └── words.json
├── src/
│ ├── assets/
│ │ └── img/react.svg
│ ├── components/
│ │ ├── Buttons.jsx
│ │ ├── Controls.jsx
│ │ ├── Focused.jsx
│ │ ├── FooterBtn.jsx
│ │ ├── RefreshBtn.jsx
│ │ ├── TextSize.jsx
│ │ ├── ThemeButtons.jsx
│ │ ├── Timer.jsx
│ │ └── Words.jsx
│ ├── containers/
│ │ ├── App.jsx
│ │ ├── Final.jsx
│ │ ├── Footer.jsx
│ │ ├── Game.jsx
│ │ ├── Header.jsx
│ │ ├── Main.jsx
│ │ ├── Theme.jsx
│ │ ├── Versions.jsx
│ │ └── Wrapper.jsx
│ ├── index.css
│ ├── main.jsx
│ └── index.html
├── .gitignore
├── eslint.config.js
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js

## Installation

### 1. Clone the Repository

git clone https://github.com/your-username/Typing-App.git
cd Typing-App

### 2. Install Dependencies

cd frontend
npm install

cd ../backend
npm install

### 3. Install Dependencies 

Create .env file in backend and add environment variables :
PORT=8080

### 4. Running App 
cd backend 
nodemon server.js

cd frontend
npm run dev
