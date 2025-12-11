# 🎬 **MovieHub — Full-Stack Movie Discovery App with AI Chatbot**

MovieHub is a modern full-stack MERN application that allows users to discover movies, explore detailed information, manage watchlists & favourites, check OTT availability, and chat with an **AI-powered movie assistant (Gemini)** — all with a sleek, responsive UI.

---

## 📸 **Screenshots**



### **🏠 Home Page**
![Home Screenshot](./screenshots/home.png)

### **🎬 Movie Details Page**
![Movie Details](./screenshots/movie-details.png)

### **🤖 AI Chatbot Widget**
![AI Chat](./screenshots/chat.png)

### **🔐 Login / Signup**
![Auth Pages](./screenshots/auth.png)

---

## ✨ **Features**

### 🔐 **Authentication**
- User **Signup / Login**
- **Google OAuth 2.0** Login
- Password Reset (verification code)
- JWT-based authentication
- Manage username, password, profile photo, language

### 🎬 **Movie Discovery**
- Search movies via TMDB  
- Autocomplete suggestions  
- Filter by rating, release year, language, upcoming  
- View cast, crew, storyline, runtime, rating, posters & backdrop  

### 📺 **OTT Availability**
- Detects available OTT providers such as Netflix, Prime Video, Hotstar  
- Auto-generated search links for each OTT  
- Google search fallback for unsupported providers  

### ❤️ **Watchlist & Favourites**
- Add / remove movies seamlessly  
- Stored per authenticated user  
- Smooth animations and UI indicators  

### 🤖 **AI Movie Chatbot (Gemini)**
- Floating chat widget (LinkedIn-style)  
- Users can ask anything about the selected movie:
  - Plot explanation
  - Character insights
  - Trivia & easter eggs
  - Themes & interpretations  
- AI uses **Gemini** with contextual movie data  
- Prevents off-topic or unrelated questions  

### 🎨 **UI / UX Highlights**
- TailwindCSS modern UI  
- Framer Motion animations  
- Fully responsive mobile-first layout  
- Autocomplete search bar  
- Dark theme for immersive browsing  

---

## 🛠️ **Tech Stack**

### **Frontend**
- React (Vite)
- TailwindCSS
- Axios
- Framer Motion
- React Icons

### **Backend**
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Google OAuth
- Gemini AI API  
- Nodemailer (local) / API email provider (production)

### **External APIs**
- TMDB  

### **Deployment**
- **Frontend → Vercel**
- **Backend → Render**
- **Database → MongoDB Atlas**

---

## 📂 **Project Structure**

moviehub/│├── backend/│ ├── controllers/│ ├── routes/│ ├── models/│ ├── middleware/│ ├── config/│ ├── server.js│ └── package.json│├── frontend/│ ├── src/│ │ ├── components/│ │ ├── pages/│ │ ├── context/│ │ └── App.jsx│ ├── public/│ └── vite.config.js│└── README.md
---

## ⚙️ **Environment Variables**

### **Backend `.env`**

| Variable | Description | Example Value |
| :--- | :--- | :--- |
| `MONGO_URI` | MongoDB connection string | `your_mongodb_connection` |
| `JWT_SECRET` | Secret key for JWT | `your_jwt_secret` |
| `EMAIL_USER` | Email address for sending mail | `your_email@gmail.com` |
| `EMAIL_PASS` | App password for email | `your_email_app_password` |
| `TMDB_API_KEY` | The Movie Database API key | `your_tmdb_api_key` |
| `GEMINI_API_KEY` | Google Gemini API key | `your_gemini_api_key` |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID | `your_google_oauth_client_id` |

### **Frontend `.env`**

| Variable | Description | Example Value |
| :--- | :--- | :--- |
| `VITE_BACKEND_LINK` | Deployed backend URL | `https://your-backend.onrender.com` |
| `VITE_TMDB_API` | The Movie Database API key | `your_tmdb_api_key` |
| `VITE_GOOGLE_AUTH_CLIENT_ID` | Google OAuth client ID | `your_google_client_id` |
| `VITE_EMAIL_API_KEY` | Email validator key | `your_email_validator_key` |

---

## 🚀 **Local Development Setup**

### 1. Clone Repository

git clone [https://github.com/](https://github.com/)<your-username>/<your-repo>.git
cd your-repo
