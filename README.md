# 📝 Todo Application

A modern full-stack Todo application with React frontend and Node.js backend.

![Status](https://img.shields.io/badge/Status-Complete-brightgreen) ![React](https://img.shields.io/badge/React-18+-blue) ![Node.js](https://img.shields.io/badge/Node.js-16+-green) ![MongoDB](https://img.shields.io/badge/MongoDB-Latest-darkgreen)

## ✨ Features

- ✅ **CRUD Operations** - Create, read, update, delete tasks
- ✅ **Real-time Updates** - Instant UI updates
- ✅ **Task Status** - Mark tasks as complete/incomplete
- ✅ **Responsive Design** - Works on all devices
- ✅ **Error Handling** - User-friendly error messages

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- MongoDB (local or Atlas)
- npm

### Installation

1. **Clone & Setup**
   ```bash
   git clone https://github.com/yadavaman13/Todo.git
   cd Todo
   ```

2. **Backend Setup**
   ```bash
   cd server
   npm install
   ```
   
   Create `.env` file:
   ```env
   PORT=5000
   MONGO_URL=mongodb://127.0.0.1:27017/task
   ```
   
   Start server:
   ```bash
   npm run server
   ```

3. **Frontend Setup**
   ```bash
   cd ../client
   npm install
   npm run dev
   ```

4. **Access Application**
   - Frontend: http://localhost:5173
   - Backend: http://localhost:5000

## 🏗️ Architecture

```
Todo/
├── client/          # React Frontend
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Page components
│   │   └── services/     # API services
│   └── package.json
└── server/          # Node.js Backend
    ├── controller/  # Business logic
    ├── model/       # Database schemas
    ├── route/       # API routes
    └── app.js       # Entry point
```

## 🔌 API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/tasks` | Get all tasks |
| `POST` | `/api/tasks` | Create task |
| `PUT` | `/api/tasks/:id` | Update task |
| `DELETE` | `/api/tasks/:id` | Delete task |

### Example Usage
```javascript
// Get all tasks
fetch('http://localhost:5000/api/tasks')

// Create task
fetch('http://localhost:5000/api/tasks', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'New Task' })
})
```

## �️ Tech Stack

**Frontend:** React, Tailwind CSS, React Router  
**Backend:** Node.js, Express, MongoDB, Mongoose  
**Tools:** Vite, Nodemon, CORS

## � Screenshots

> Add screenshots of your application here

## 🚀 Deployment

### Backend (Heroku)
```bash
heroku create your-todo-api
git push heroku main
```

### Frontend (Netlify/Vercel)
```bash
npm run build
# Deploy dist folder
```

## 🐛 Common Issues

| Issue | Solution |
|-------|----------|
| Cannot connect to MongoDB | Check MongoDB is running and connection string |
| CORS Error | Ensure backend server is running |
| Port already in use | Kill existing process: `taskkill /F /IM node.exe` |

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Aman Yadav** - [yadavaman13](https://github.com/yadavaman13)

---

⭐ **Star this repo if you found it helpful!**
