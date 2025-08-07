# 📝 Todo Application

A modern full-stack Todo application with React frontend and Node.js backend, featuring a minimalistic black/white design and comprehensive task management capabilities.

![Status](https://img.shields.io/badge/Status-Complete-brightgreen) ![React](https://img.shields.io/badge/React-18+-blue) ![Node.js](https://img.shields.io/badge/Node.js-16+-green) ![MongoDB](https://img.shields.io/badge/MongoDB-Latest-darkgreen)

## ✨ Features

- ✅ **Full CRUD Operations** - Create, read, update, delete tasks
- ✅ **Task Descriptions** - Add detailed descriptions to tasks
- ✅ **Minimalistic Design** - Clean black/white interface
- ✅ **Task Status Management** - Mark tasks as complete/incomplete
- ✅ **Expandable Content** - Show more/less for long descriptions
- ✅ **Real-time Updates** - Instant UI updates after operations
- ✅ **Responsive Design** - Works perfectly on all devices
- ✅ **Error Handling** - User-friendly error messages and loading states
- ✅ **Custom Icons** - Clean SVG icons for all actions

## 🎨 Design Philosophy

This Todo app follows a **minimalistic design approach** with:
- **Black & White Color Scheme** - Professional, distraction-free interface
- **Clean Typography** - Light, modern fonts for better readability  
- **Spacious Layout** - Ample white space for visual clarity
- **Subtle Interactions** - Smooth hover states and transitions
- **Custom UI Components** - Tailored checkboxes, buttons, and form elements

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

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|---------------|
| `GET` | `/api/tasks` | Get all tasks | None |
| `POST` | `/api/tasks` | Create task | `{ "title": "string", "description": "string" }` |
| `PUT` | `/api/tasks/:id` | Update task | `{ "title": "string", "description": "string", "completed": boolean }` |
| `DELETE` | `/api/tasks/:id` | Delete task | None |

### Example Usage
```javascript
// Get all tasks
fetch('http://localhost:5000/api/tasks')

// Create task with description
fetch('http://localhost:5000/api/tasks', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
    title: 'Complete project', 
    description: 'Finish the Todo app with all features' 
  })
})

// Update task
fetch('http://localhost:5000/api/tasks/TASK_ID', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
    title: 'Updated title',
    description: 'Updated description',
    completed: true 
  })
})
```

## 🛠️ Tech Stack

**Frontend:** React 18+, Tailwind CSS, React Router DOM  
**Backend:** Node.js, Express.js, MongoDB, Mongoose  
**Tools:** Vite, Nodemon, CORS  
**Design:** Custom CSS, SVG Icons, Responsive Layout

## 🎯 Key Components

### Frontend Components
- **AddTask** - Task creation form with title and description inputs
- **ShowTask** - Task display with inline editing, completion toggle, and expandable descriptions
- **HomePage** - Main container with state management and API integration
- **Navbar** - Minimalistic navigation with clean typography

### Backend Structure
- **Task Model** - MongoDB schema with title, description, completion status, and timestamps
- **Task Controller** - Business logic for all CRUD operations
- **Task Routes** - RESTful API endpoints
- **Error Handling** - Comprehensive error responses and validation

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
