import React, { useState } from 'react'
import { taskAPI } from '../services/api'

const AddTask = ({ onTaskAdded }) => {
  const [task, setTask] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (task.trim()) {
      setLoading(true);
      try {
        await taskAPI.createTask({ 
          title: task.trim(),
          description: '' 
        });
        console.log('Task added successfully!');
        setTask(''); // Clear input after adding
        if (onTaskAdded) onTaskAdded(); // Refresh task list
      } catch (error) {
        console.error('Failed to add task:', error);
        alert('Failed to add task. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="w-full">
      <h2 className='text-2xl font-bold text-center mb-4 text-gray-800'>Add New Task</h2>
      <form onSubmit={handleSubmit} className='flex gap-2'>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task..."
          className='flex-1 px-4 py-2 border border-gray-300 rounded-lg '
        />
        <button
          type="submit"
          disabled={loading}
          className={`px-6 py-2 text-white rounded-lg ${
            loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {loading ? 'Adding...' : 'Add'}
        </button>
      </form>

            {/* <div className="user-data">
                  <h3>Your Data:</h3>
                  {userAllData.map((items) =>(
                     <ul key={items._id}>
                        <span>{items.user}</span>
                        <button onClick={() => handleDelete(items._id)}>
                          Delete
                        </button>
                      </ul>
                  ))}
             </div> */}

    </div>

    
  )
}

export default AddTask
