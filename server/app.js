const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const taskRoutes = require("./route/taskRoutes");

const app = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URL).then(() =>
     {console.log("db connected")
     }).catch((error) => {console.log(error)});

// Routes
app.use('/api/tasks', taskRoutes);

// Basic route
app.get('/', (req, res) => {
    res.json({ message: 'Todo API is running!' });
});

let PORT = process.env.PORT || 5000

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
});