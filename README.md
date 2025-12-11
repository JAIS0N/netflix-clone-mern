# 🎬 **MovieHub — Full-Stack Movie Discovery App with AI Chatbot**

MovieHub is a modern full-stack MERN application that allows users to discover movies, explore detailed information, manage watchlists & favourites, check OTT availability, and chat with an **AI-powered movie assistant (Gemini)** — all with a sleek, responsive UI.

---

## 📸 **Screenshots**

> Add your screenshots inside the `/screenshots` folder and update paths below.

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

