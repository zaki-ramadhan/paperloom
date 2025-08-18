# Paperloom — Notes App

[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
---

Paperloom is a simple MERN stack project that I created as a practice exercise.  
The goal is straightforward: **manage personal notes** through clear CRUD flows.

- **Backend** uses **Node.js, Express, and MongoDB (via Mongoose)**.
- **Frontend** is being built with **React** (Vite), **React Router** (routing), and **react-hot-toast** (notifications).

The project is intentionally minimal to keep the focus on core features. It can be extended with authentication, full-text search, or richer UI as needed.

---

## 🚀 Quick Overview

- **Backend**: Notes API (GET ready; create/update/delete planned or in progress).
- **Frontend**: React app with routing & toast notifications is **in progress**.
- **Security**: keep secrets in `.env` files (do **not** commit them).

---

## 📂 Project Structure

```
paperloom/
├─ backend/
│  ├─ src/
│  │  ├─ config/            # db connection, env loader
│  │  ├─ controllers/       # notes handlers
│  │  ├─ models/            # Note schema (Mongoose)
│  │  └─ routes/            # /api/notes
│  ├─ package.json
│  └─ .env.example          # placeholder only (no real credentials)
└─ frontend/
   ├─ src/
   │  ├─ app/               # routes/layouts/pages (example)
   │  ├─ components/        # UI components
   │  └─ main.jsx/tsx       # app entry (Vite)
   ├─ index.html
   └─ package.json
```

> This structure is indicative; adapt folder names to your preferred conventions.

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

**`backend/.env.example` (safe placeholder)**
```env
MONGO_URI=mongodb+srv://<user>:<pass>@<cluster>/<db>?retryWrites=true&w=majority
PORT=5000
```

### Frontend
```bash
cd frontend
npm install
# create .env locally to point the app to your API base URL
# Vite requires the VITE_ prefix
echo "VITE_API_BASE_URL=http://localhost:5000/api" > .env
npm run dev
```

> In your frontend code, read the API base URL from `import.meta.env.VITE_API_BASE_URL`.

---

## 📡 API (Backend)

Base URL: `http://localhost:<PORT>/api/notes`

| Method | Path   | Description    |
|------: |------- |----------------|
| GET    | `/`    | List all notes |
| POST   | `/`    | Create note    |
| PUT    | `/:id` | Update note    |
| DELETE | `/:id` | Delete note    |

> Example sort in controllers:  
> ```js
> Note.find().sort({ createdAt: -1 }) // newest first (1 = oldest first)
> ```

---

## 🔒 Security Notes

- Never commit `.env`, API keys, or connection strings.
- If a secret was committed by mistake, remove it from Git history and **rotate** the credentials immediately.
- For production hardening, consider `helmet`, CORS restrictions, rate limiting, and request validation.

---

## 🧪 Quality (recommended)

- ESLint + Prettier
- Tests (Jest/Vitest + Supertest)
- Conventional Commits
- Branching: `main` (stable), `dev`, `feature/*`

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
