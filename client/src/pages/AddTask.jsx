import React, { useState } from 'react'
import { taskAPI } from '../services/api'

const AddTask = ({ onTaskAdded }) => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (task.trim()) {
      setLoading(true);
      try {
        await taskAPI.createTask({ 
          title: task.trim(),
          description: description.trim() 
        });
        setTask(''); 
        setDescription('');
        if (onTaskAdded) onTaskAdded(); 
      } catch (error) {
        console.error('Failed to add task:', error);
        alert('Failed to add task. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className='text-3xl font-light text-center mb-8 text-gray-900'>Add New Task</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Task title..."
            className='w-full px-4 py-3 border border-gray-300 rounded-none bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black transition-colors'
            required
          />
        </div>
        
        <div>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Task description (optional)..."
            rows={3}
            className='w-full px-4 py-3 border border-gray-300 rounded-none bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black transition-colors resize-none'
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 px-6 rounded-none font-medium transition-colors ${
            loading 
              ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
              : 'bg-black text-white hover:bg-gray-800'
          }`}
        >
          {loading ? 'Adding...' : 'Add Task'}
        </button>
      </form>
    </div>
  )
}

export default AddTask
