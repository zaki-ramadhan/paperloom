# Paperloom — Notes App

Paperloom is a simple MERN stack project that I created as a practice exercise.  
The idea behind this project is straightforward: **to manage personal notes**.  
As the name suggests, Paperloom acts as a place where notes can be created, updated, and organized easily.

The backend is built with **Node.js, Express, and MongoDB (via Mongoose)**, while the frontend folder is prepared for future development using React/Vite or another modern framework.  

This project is intentionally kept minimal to highlight the core CRUD functionality (create, read, update, delete). It’s designed as a learning project, but it can be extended with features like authentication, search, or a user-friendly interface.

---

## 🚀 Quick Overview
- **Backend**: basic notes API (GET ready; create/update/delete to extend).
- **Frontend**: empty scaffold for later.
- **Security**: keep secrets in `.env` (do **not** commit).

---

## ⚙️ Setup

### Requirements
- Node.js 18+
- MongoDB (Atlas or local)

### Backend
```bash
cd backend
npm install
# create .env locally (include MONGO_URI, PORT, etc.)
npm run dev
```

### Frontend (optional, later)
```bash
cd frontend
# e.g., initialize with your preferred framework (Vite/React, Next.js, etc.)
```

---

## 📡 API (Backend)

Base URL: `http://localhost:<PORT>/api/notes`

| Method | Path   | Description    |
|------: |------- |----------------|
| GET    | `/`    | List all notes |
| POST   | `/`    | Create note    |
| PUT    | `/:id` | Update note    |
| DELETE | `/:id` | Delete note    |

---

## 🔒 Security Notes
- Never commit `.env`, API keys, or connection strings.
- If a secret was committed by mistake, remove it from git history and **rotate** the credentials immediately.

---

## 📤 Publishing
```bash
git init
git add .
git commit -m "chore: initial commit"
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

---

## 📄 License
Private by default. For open source, consider **MIT** or **Apache-2.0**.
