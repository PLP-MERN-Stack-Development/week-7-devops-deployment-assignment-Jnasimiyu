# 🐞 MERN Bug Tracker

A full-stack Bug Tracker application built with the MERN stack (MongoDB, Express.js, React, Node.js), with full deployment, CI/CD, environment management, logging, and monitoring setup.

## 🚀 Live Demo

- 🔗 Frontend: [https://your-frontend.netlify.app](https://your-frontend.netlify.app)
- 🔗 Backend API: [https://your-backend.onrender.com](https://your-backend.onrender.com)

## 📦 Features

- Create, edit, assign, and manage bug reports
- View all bugs with filtering by severity, status, etc.
- MongoDB Atlas database with connection pooling
- Secure HTTP headers with `helmet`
- Logging with `morgan`
- Frontend deployed on **Netlify**
- Backend deployed on **Render**
- CI/CD using **GitHub Actions**
- Monitoring & uptime tracking

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS, Axios
- **Backend:** Node.js, Express.js, MongoDB Atlas, Mongoose
- **Testing:** Jest, Supertest, React Testing Library, Vitest
- **Deployment:** Netlify (frontend), Render (backend)
- **CI/CD:** GitHub Actions
- **Monitoring:** UptimeRobot, Sentry (optional)

## 🔧 Environment Variables

### Backend (`.env`)
```env
PORT=5000
MONGO_URI=your_mongodb_atlas_uri
NODE_ENV=production
