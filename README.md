# 📝 Todo Application

A modern, feature-rich full-stack Todo application built with React and Node.js, featuring a clean minimalistic design, comprehensive task management, and seamless user experience.

![Status](https://img.shields.io/badge/Status-Complete-brightgreen) ![React](https://img.shields.io/badge/React-18+-blue) ![Node.js](https://img.shields.io/badge/Node.js-16+-green) ![MongoDB](https://img.shields.io/badge/MongoDB-Latest-darkgreen) ![License](https://img.shields.io/badge/License-MIT-yellow)

## ✨ Features

- ✅ **Full CRUD Operations** - Create, read, update, delete tasks with ease
- ✅ **Rich Task Descriptions** - Add detailed descriptions to organize your thoughts
- ✅ **Minimalistic UI/UX** - Clean black/white interface for distraction-free productivity
- ✅ **Smart Task Management** - Mark tasks as complete/incomplete with visual feedback
- ✅ **Expandable Content** - Show more/less functionality for long descriptions
- ✅ **Real-time Updates** - Instant UI updates with optimistic rendering
- ✅ **Fully Responsive** - Works seamlessly across desktop, tablet, and mobile
- ✅ **Robust Error Handling** - User-friendly error messages and loading states
- ✅ **Custom Iconography** - Handcrafted SVG icons for all interactions
- ✅ **RESTful API** - Well-structured backend with proper HTTP methods

## 🎨 Design Philosophy

This Todo app follows a **minimalistic design approach** with:
- **Black & White Color Scheme** - Professional, distraction-free interface
- **Clean Typography** - Light, modern fonts for better readability  
- **Spacious Layout** - Ample white space for visual clarity
- **Subtle Interactions** - Smooth hover states and transitions
- **Custom UI Components** - Tailored checkboxes, buttons, and form elements

## 🚀 Quick Start

### Prerequisites
- **Node.js** 16+ ([Download](https://nodejs.org/))
- **MongoDB** - Local installation or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **npm** or **yarn** package manager
- **Git** for cloning the repository

### Installation & Setup

1. **Clone Repository**
   ```bash
   git clone https://github.com/yadavaman13/Todo.git
   cd Todo
   ```

2. **Backend Configuration**
   ```bash
   cd server
   npm install
   ```
   
   Create `.env` file in server directory:
   ```env
   PORT=5000
   MONGO_URL=mongodb://127.0.0.1:27017/task
   # For MongoDB Atlas:
   # MONGO_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/task
   ```
   
   Start the backend server:
   ```bash
   npm run server
   # Server will run on http://localhost:5000
   ```

3. **Frontend Configuration**
   ```bash
   cd ../client
   npm install
   npm run dev
   # Development server will run on http://localhost:5173
   ```

4. **Verify Installation**
   - ✅ Backend API: http://localhost:5000/api/tasks
   - ✅ Frontend App: http://localhost:5173
   - ✅ MongoDB connection successful

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

## 🔌 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Endpoints

| Method | Endpoint | Description | Status Codes |
|--------|----------|-------------|--------------|
| `GET` | `/tasks` | Retrieve all tasks | `200` Success |
| `POST` | `/tasks` | Create new task | `201` Created, `400` Bad Request |
| `PUT` | `/tasks/:id` | Update existing task | `200` Success, `404` Not Found |
| `DELETE` | `/tasks/:id` | Delete task | `200` Success, `404` Not Found |

### Request/Response Examples

**Create Task**
```javascript
POST /api/tasks
Content-Type: application/json

{
  "title": "Complete project documentation",
  "description": "Write comprehensive README and API docs"
}

Response: 201 Created
{
  "_id": "64f8a1b2c3d4e5f6g7h8i9j0",
  "title": "Complete project documentation",
  "description": "Write comprehensive README and API docs",
  "completed": false,
  "createdAt": "2023-09-06T10:30:00.000Z",
  "updatedAt": "2023-09-06T10:30:00.000Z"
}
```

**Update Task**
```javascript
PUT /api/tasks/64f8a1b2c3d4e5f6g7h8i9j0
Content-Type: application/json

{
  "title": "Updated title",
  "description": "Updated description",
  "completed": true
}

Response: 200 OK
{
  "_id": "64f8a1b2c3d4e5f6g7h8i9j0",
  "title": "Updated title",
  "description": "Updated description",
  "completed": true,
  "createdAt": "2023-09-06T10:30:00.000Z",
  "updatedAt": "2023-09-06T11:45:00.000Z"
}
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

## 🚀 Deployment Guide

### Backend Deployment (Railway/Heroku)

1. **Railway Deployment**
   ```bash
   # Install Railway CLI
   npm install -g @railway/cli
   
   # Login and deploy
   railway login
   railway init
   railway up
   ```

2. **Heroku Deployment**
   ```bash
   # Install Heroku CLI and login
   heroku create your-todo-api
   heroku config:set MONGO_URL=your-mongodb-atlas-url
   git push heroku main
   ```

3. **Environment Variables**
   ```env
   PORT=5000
   MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/task
   NODE_ENV=production
   ```

### Frontend Deployment (Vercel/Netlify)

1. **Vercel Deployment**
   ```bash
   # Install Vercel CLI
   npm install -g vercel
   
   # Deploy from client directory
   cd client
   vercel
   ```

2. **Netlify Deployment**
   ```bash
   # Build the project
   cd client
   npm run build
   
   # Deploy dist folder to Netlify
   # Or connect your GitHub repo to Netlify
   ```

3. **Update API Base URL**
   ```javascript
   // In client/src/services/api.js
   const API_BASE_URL = process.env.NODE_ENV === 'production' 
     ? 'https://your-api-domain.com/api'
     : 'http://localhost:5000/api';
   ```

## 🐛 Troubleshooting

### Common Issues & Solutions

| Issue | Symptoms | Solution |
|-------|----------|----------|
| **MongoDB Connection Failed** | Server won't start, connection errors | • Ensure MongoDB is running<br/>• Check connection string in `.env`<br/>• For Atlas: Verify network access |
| **CORS Errors** | Frontend can't reach backend | • Ensure backend server is running on port 5000<br/>• Check CORS configuration in `app.js` |
| **Port Already in Use** | `EADDRINUSE` error | • Kill existing processes: `taskkill /F /IM node.exe`<br/>• Use different port in `.env` |
| **Module Not Found** | Import/require errors | • Run `npm install` in both client and server<br/>• Clear node_modules and reinstall |
| **Build Errors** | Frontend won't compile | • Check for syntax errors<br/>• Ensure all dependencies are installed |

### Debug Commands

```bash
# Check if MongoDB is running
mongosh --eval "db.runCommand('ping')"

# Check port usage
netstat -ano | findstr :5000
netstat -ano | findstr :5173

# View server logs
cd server && npm run server

# View build output
cd client && npm run build
```

### Performance Tips

- Use MongoDB indexing for better query performance
- Implement pagination for large task lists
- Add service worker for offline functionality
- Use React.memo for component optimization

## 🤝 Contributing

We welcome contributions! Here's how you can help improve this Todo application:

### Getting Started
1. **Fork** the repository on GitHub
2. **Clone** your fork locally
3. **Create** a new branch for your feature
4. **Make** your changes
5. **Test** thoroughly
6. **Submit** a pull request

### Development Workflow
```bash
# Fork and clone
git clone https://github.com/YOUR_USERNAME/Todo.git
cd Todo

# Create feature branch
git checkout -b feature/amazing-feature

# Make changes and commit
git add .
git commit -m "Add amazing feature"

# Push to your fork
git push origin feature/amazing-feature

# Create Pull Request on GitHub
```

### Contribution Guidelines
- ✅ Follow existing code style and conventions
- ✅ Add comments for complex logic
- ✅ Test your changes thoroughly
- ✅ Update README if adding new features
- ✅ Keep commits small and focused
- ✅ Write clear commit messages

### What We're Looking For
- 🐛 Bug fixes and improvements
- ⚡ Performance optimizations
- 🎨 UI/UX enhancements
- 📚 Documentation improvements
- 🧪 Additional test coverage
- 🌟 New features (discuss first in issues)

### Code of Conduct
Please be respectful and constructive in all interactions. We're here to learn and build together!

## 📄 License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.

### What this means:
- ✅ **Commercial use** - Use it in your business
- ✅ **Modification** - Change it however you want
- ✅ **Distribution** - Share it with others
- ✅ **Private use** - Use it for personal projects
- ⚠️ **Liability** - We're not responsible if something goes wrong
- ⚠️ **Warranty** - No guarantees, but we built it with care

## 👤 Author & Contact

**Aman Yadav**
- 🐙 GitHub: [@yadavaman13](https://github.com/yadavaman13)
- 📧 Email: yadavaman13@email.com
- 💼 LinkedIn: [Connect with me](https://linkedin.com/in/yadavaman13)
- 🌐 Portfolio: [yadavaman.dev](https://yadavaman.dev)

## 🙏 Acknowledgments

Special thanks to:
- **React Team** - For the amazing framework
- **MongoDB** - For the robust database solution  
- **Tailwind CSS** - For the utility-first CSS framework
- **Open Source Community** - For inspiration and resources

---

<div align="center">

### ⭐ **Found this helpful? Give it a star!** ⭐

**Made with ❤️ by [Aman Yadav](https://github.com/yadavaman13)**

*Happy coding! 🚀*

</div>
