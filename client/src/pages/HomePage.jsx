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
    <>
      <div className='border-3 border-red-500 h-auto min-h-150 w-150 flex flex-col justify-start mx-auto mt-5 p-6'>
        <AddTask onTaskAdded={fetchTasks} />
        
        {loading ? (
          <div className="text-center py-4">
            <p className="text-gray-500">Loading tasks...</p>
          </div>
        ) : (
          <Showtask tasks={tasks} onTaskUpdated={fetchTasks} />
        )}
      </div>
    </>
  )
}

export default HomePage
