# 📝 Todo Application

A full-stack Todo application built with React.js frontend and Node.js/Express backend with MongoDB database. This application allows users to create, read, update, and delete tasks with a clean and intuitive interface.

![Todo App Preview](https://img.shields.io/badge/Status-Complete-brightgreen) ![React](https://img.shields.io/badge/React-18.0+-blue) ![Node.js](https://img.shields.io/badge/Node.js-16.0+-green) ![MongoDB](https://img.shields.io/badge/MongoDB-Latest-darkgreen)

## 🚀 Features

- ✅ **Add Tasks**: Create new tasks with titles and descriptions
- ✅ **View Tasks**: Display all tasks in a clean, organized list
- ✅ **Update Tasks**: Edit task titles with inline editing
- ✅ **Delete Tasks**: Remove tasks with confirmation dialog
- ✅ **Mark Complete**: Toggle task completion status with checkboxes
- ✅ **Real-time Updates**: Instant UI updates after any operation
- ✅ **Responsive Design**: Works perfectly on desktop and mobile
- ✅ **Error Handling**: User-friendly error messages and loading states

## 🏗️ Project Structure

```
Todo/
├── client/                    # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx     # Navigation component
│   │   │   └── Showtask.jsx   # Task display component
│   │   ├── pages/
│   │   │   ├── AddTask.jsx    # Task creation component
│   │   │   └── HomePage.jsx   # Main page component
│   │   ├── services/
│   │   │   └── api.js         # API service functions
│   │   ├── assets/
│   │   ├── App.jsx            # Main App component
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── README.md
│
└── server/                    # Node.js Backend
    ├── controller/
    │   └── taskController.js  # Task business logic
    ├── model/
    │   └── Task.js           # MongoDB task schema
    ├── route/
    │   └── taskRoutes.js     # API route definitions
    ├── view/                 # (Empty - using React frontend)
    ├── app.js               # Main server file
    ├── package.json
    └── .env                 # Environment variables
```

## 🛠️ Tech Stack

### Frontend
- **React.js 18+** - Modern JavaScript library for building user interfaces
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Fetch API** - For making HTTP requests to the backend

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database for data storage
- **Mongoose** - MongoDB object modeling library
- **CORS** - Cross-Origin Resource Sharing middleware
- **dotenv** - Environment variable management
- **Nodemon** - Development tool for auto-restarting server

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 16.0 or higher)
- **npm** (comes with Node.js)
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git** (optional, for cloning)

### Check Your Versions
```bash
node --version    # Should be 16.0+
npm --version     # Should be 8.0+
```

## 🚀 Getting Started

### 1. Clone or Download the Project
```bash
# If using Git
git clone <your-repo-url>
cd Todo

# Or download and extract the ZIP file
```

### 2. Backend Setup

#### Navigate to Server Directory
```bash
cd server
```

#### Install Dependencies
```bash
npm install
```

#### Environment Configuration
Create a `.env` file in the server directory:
```bash
# server/.env
PORT=5000
MONGO_URL=mongodb://127.0.0.1:27017/task
```

**For MongoDB Atlas (Cloud):**
```bash
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/task
```

#### Start the Backend Server
```bash
# Development mode (recommended)
npm run server

# Production mode
npm start
```

The backend server will start on `http://localhost:5000`

### 3. Frontend Setup

#### Open New Terminal and Navigate to Client Directory
```bash
cd client
```

#### Install Dependencies
```bash
npm install
```

#### Start the Frontend Development Server
```bash
npm run dev
```

The frontend will start on `http://localhost:5173`

### 4. Access Your Application
Open your browser and navigate to:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000/api/tasks

## 🔌 API Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| `GET` | `/api/tasks` | Retrieve all tasks | None |
| `POST` | `/api/tasks` | Create a new task | `{ "title": "string", "description": "string" }` |
| `PUT` | `/api/tasks/:id` | Update a specific task | `{ "title": "string", "completed": boolean }` |
| `DELETE` | `/api/tasks/:id` | Delete a specific task | None |

### Example API Usage

#### Create a New Task
```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Learn React", "description": "Complete React tutorial"}'
```

#### Get All Tasks
```bash
curl http://localhost:5000/api/tasks
```

#### Update a Task
```bash
curl -X PUT http://localhost:5000/api/tasks/TASK_ID \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated Task Title", "completed": true}'
```

#### Delete a Task
```bash
curl -X DELETE http://localhost:5000/api/tasks/TASK_ID
```

## 💾 Database Schema

### Task Model
```javascript
{
  _id: ObjectId,           // Auto-generated MongoDB ID
  title: String,           // Task title (required)
  description: String,     // Task description (optional)
  completed: Boolean,      // Completion status (default: false)
  createdAt: Date,        // Auto-generated creation timestamp
  updatedAt: Date         // Auto-generated update timestamp
}
```

## 🎨 Frontend Components

### HomePage.jsx
- Main container component
- Manages task state and API calls
- Handles loading states

### AddTask.jsx
- Task creation form
- Input validation
- API integration for creating tasks

### ShowTask.jsx
- Task list display
- Inline editing functionality
- Delete and update operations

### Navbar.jsx
- Navigation component
- Responsive design
- Route links

## 🛡️ Error Handling

### Frontend
- User-friendly error messages
- Loading states during API calls
- Form validation
- Confirmation dialogs for destructive actions

### Backend
- Comprehensive error responses
- Input validation
- Database connection error handling
- Proper HTTP status codes

## 📱 Responsive Design

The application is fully responsive and works seamlessly on:
- 🖥️ Desktop computers
- 💻 Laptops
- 📱 Tablets
- 📱 Mobile phones

## 🚀 Deployment

### Backend Deployment (Heroku Example)
```bash
# In server directory
heroku create your-todo-api
git add .
git commit -m "Deploy backend"
git push heroku main
```

### Frontend Deployment (Netlify/Vercel)
```bash
# In client directory
npm run build
# Upload dist folder to your hosting service
```

### Environment Variables for Production
Update your `.env` file for production:
```bash
PORT=80
MONGO_URL=your_production_mongodb_url
NODE_ENV=production
```

## 🔧 Troubleshooting

### Common Issues

#### 1. "Cannot connect to MongoDB"
- Ensure MongoDB is running locally
- Check your connection string in `.env`
- Verify network connectivity

#### 2. "CORS Error"
- Ensure the backend server is running
- Check CORS configuration in `app.js`

#### 3. "Cannot GET /api/tasks"
- Verify backend server is running on port 5000
- Check route definitions in `taskRoutes.js`

#### 4. Frontend not loading
- Ensure you're running `npm run dev` in the client directory
- Check for port conflicts
- Clear browser cache

### Debug Commands
```bash
# Check if ports are in use
netstat -an | find "5000"  # Windows
lsof -i :5000              # Mac/Linux

# Kill processes on port
taskkill /F /IM node.exe   # Windows
killall node              # Mac/Linux
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

Created with ❤️ by [Your Name]

## 🙏 Acknowledgments

- React.js team for the amazing library
- Express.js for the robust backend framework
- MongoDB for the flexible database solution
- Tailwind CSS for the utility-first styling approach

---

## 📞 Support

If you encounter any issues or have questions:

1. Check the troubleshooting section above
2. Open an issue on GitHub
3. Contact: [your-email@example.com]

**Happy Coding! 🎉**
