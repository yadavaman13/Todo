import React, { useState } from 'react'
import { taskAPI } from '../services/api'

const Showtask = ({ tasks, onTaskUpdated }) => {
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [expandedTasks, setExpandedTasks] = useState(new Set());

  const handleDelete = async (id) => {
    if (window.confirm('Delete this task?')) {
      try {
        await taskAPI.deleteTask(id);
        onTaskUpdated();
      } catch (error) {
        console.error('Failed to delete task:', error);
        alert('Failed to delete task. Please try again.');
      }
    }
  };

  const handleEdit = (task) => {
    setEditingId(task._id);
    setEditTitle(task.title);
    setEditDescription(task.description || '');
  };

  const handleUpdate = async (id) => {
    try {
      await taskAPI.updateTask(id, { 
        title: editTitle.trim(), 
        description: editDescription.trim() 
      });
      setEditingId(null);
      setEditTitle('');
      setEditDescription('');
      onTaskUpdated();
    } catch (error) {
      console.error('Failed to update task:', error);
      alert('Failed to update task. Please try again.');
    }
  };

  const toggleComplete = async (task) => {
    try {
      await taskAPI.updateTask(task._id, { completed: !task.completed });
      onTaskUpdated();
    } catch (error) {
      console.error('Failed to toggle task:', error);
      alert('Failed to update task status. Please try again.');
    }
  };

  const toggleExpand = (taskId) => {
    const newExpanded = new Set(expandedTasks);
    if (newExpanded.has(taskId)) {
      newExpanded.delete(taskId);
    } else {
      newExpanded.add(taskId);
    }
    setExpandedTasks(newExpanded);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-12">
      <h3 className="text-3xl font-light text-center mb-8 text-gray-900">Your Tasks</h3>
      {tasks.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg font-light">No tasks yet. Create one above.</p>
        </div>
      ) : (
        <div className="space-y-1">
          {tasks.map((task) => (
            <div key={task._id} className="border border-gray-200 bg-white">
              {editingId === task._id ? (
                <div className="p-6 space-y-4">
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="w-full px-0 py-2 text-lg font-medium border-0 border-b border-gray-300 bg-transparent focus:outline-none focus:border-black"
                    placeholder="Task title"
                  />
                  <textarea
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                    rows={3}
                    className="w-full px-0 py-2 border-0 border-b border-gray-300 bg-transparent focus:outline-none focus:border-black resize-none"
                    placeholder="Task description"
                  />
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleUpdate(task._id)}
                      className="px-4 py-2 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <button
                      onClick={() => toggleComplete(task)}
                      className={`mt-1 w-5 h-5 border-2 flex-shrink-0 ${
                        task.completed 
                          ? 'bg-black border-black' 
                          : 'border-gray-300 hover:border-black'
                      } transition-colors`}
                    >
                      {task.completed && (
                        <svg className="w-3 h-3 text-white mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className={`text-lg font-medium mb-2 ${
                        task.completed 
                          ? 'line-through text-gray-400' 
                          : 'text-gray-900'
                      }`}>
                        {task.title}
                      </h4>
                      
                      {task.description && (
                        <div>
                          <p className={`text-gray-600 ${
                            task.completed ? 'line-through text-gray-400' : ''
                          } ${
                            expandedTasks.has(task._id) || task.description.length <= 100
                              ? '' 
                              : 'line-clamp-2'
                          }`}>
                            {task.description}
                          </p>
                          
                          {task.description.length > 100 && (
                            <button
                              onClick={() => toggleExpand(task._id)}
                              className="text-sm text-gray-500 hover:text-black mt-1 font-medium"
                            >
                              {expandedTasks.has(task._id) ? 'Show less' : 'Show more'}
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <div className="flex gap-2 flex-shrink-0">
                      <button
                        onClick={() => handleEdit(task)}
                        className="p-2 text-gray-500 hover:text-black transition-colors"
                        title="Edit task"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      
                      <button
                        onClick={() => handleDelete(task._id)}
                        className="p-2 text-gray-500 hover:text-red-600 transition-colors"
                        title="Delete task"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Showtask
