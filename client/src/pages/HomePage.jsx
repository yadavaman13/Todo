import React, { useState, useEffect } from 'react'
import AddTask from './AddTask'
import Showtask from '../components/Showtask'
import { taskAPI } from '../services/api'

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch tasks from backend
  const fetchTasks = async () => {
    try {
      setLoading(true);
      const data = await taskAPI.getAllTasks();
      setTasks(data);
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
      alert('Failed to load tasks. Please refresh the page.');
    } finally {
      setLoading(false);
    }
  };

  // Load tasks when component mounts
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='max-w-4xl mx-auto px-6 py-12'>
        <div className='mb-16'>
          <AddTask onTaskAdded={fetchTasks} />
        </div>
        
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block w-8 h-8 border-2 border-gray-300 border-t-black rounded-full animate-spin"></div>
            <p className="text-gray-500 mt-4 font-light">Loading tasks...</p>
          </div>
        ) : (
          <Showtask tasks={tasks} onTaskUpdated={fetchTasks} />
        )}
      </div>
    </div>
  )
}

export default HomePage
