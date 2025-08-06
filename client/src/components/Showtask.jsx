import React, { useState } from 'react'
import { taskAPI } from '../services/api'

const Showtask = ({ tasks, onTaskUpdated }) => {
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await taskAPI.deleteTask(id);
        onTaskUpdated(); // Refresh task list
      } catch (error) {
        console.error('Failed to delete task:', error);
        alert('Failed to delete task. Please try again.');
      }
    }
  };

  const handleEdit = (task) => {
    setEditingId(task._id);
    setEditTitle(task.title);
  };

  const handleUpdate = async (id) => {
    try {
      await taskAPI.updateTask(id, { title: editTitle });
      setEditingId(null);
      setEditTitle('');
      onTaskUpdated(); // Refresh task list
    } catch (error) {
      console.error('Failed to update task:', error);
      alert('Failed to update task. Please try again.');
    }
  };

  const toggleComplete = async (task) => {
    try {
      await taskAPI.updateTask(task._id, { completed: !task.completed });
      onTaskUpdated(); // Refresh task list
    } catch (error) {
      console.error('Failed to toggle task:', error);
      alert('Failed to update task status. Please try again.');
    }
  };

  return (
    <div className="mt-6 w-full">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Your Tasks</h3>
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center">No tasks yet. Add one above!</p>
      ) : (
        <div className="space-y-3">
          {tasks.map((task) => (
            <div key={task._id} className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task)}
                className="w-4 h-4 text-blue-600"
              />
              
              {editingId === task._id ? (
                <div className="flex-1 flex gap-2">
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="flex-1 px-3 py-1 border border-gray-300 rounded"
                  />
                  <button
                    onClick={() => handleUpdate(task._id)}
                    className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <>
                  <span className={`flex-1 ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                    {task.title}
                  </span>
                  <button
                    onClick={() => handleEdit(task)}
                    className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Showtask
