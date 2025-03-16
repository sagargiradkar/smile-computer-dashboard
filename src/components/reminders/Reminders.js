import React, { useState } from 'react';

const Reminders = () => {
  const [reminders, setReminders] = useState([
    { id: 1, title: 'Follow up with prospective students', dueDate: '2025-03-20', priority: 'High', completed: false },
    { id: 2, title: 'Collect pending fees from Batch 12', dueDate: '2025-03-25', priority: 'Medium', completed: false },
    { id: 3, title: 'Order new equipment for Lab 3', dueDate: '2025-04-01', priority: 'Low', completed: false },
    { id: 4, title: 'Schedule faculty meeting', dueDate: '2025-03-18', priority: 'High', completed: true }
  ]);

  const [newReminder, setNewReminder] = useState({
    title: '',
    dueDate: '',
    priority: 'Medium'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReminder({
      ...newReminder,
      [name]: value
    });
  };

  const addReminder = () => {
    if (!newReminder.title || !newReminder.dueDate) return;
    
    const reminder = {
      id: reminders.length + 1,
      title: newReminder.title,
      dueDate: newReminder.dueDate,
      priority: newReminder.priority,
      completed: false
    };
    
    setReminders([...reminders, reminder]);
    setNewReminder({ title: '', dueDate: '', priority: 'Medium' });
  };

  const toggleComplete = (id) => {
    setReminders(reminders.map(reminder => 
      reminder.id === id ? { ...reminder, completed: !reminder.completed } : reminder
    ));
  };

  const deleteReminder = (id) => {
    setReminders(reminders.filter(reminder => reminder.id !== id));
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Reminders</h1>
        <div className="flex items-center space-x-2">
          <button 
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            onClick={() => document.getElementById('addReminderModal').classList.remove('hidden')}
          >
            Add Reminder
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 flex space-x-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Status</label>
          <select className="border rounded-md px-3 py-2">
            <option>All</option>
            <option>Active</option>
            <option>Completed</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Priority</label>
          <select className="border rounded-md px-3 py-2">
            <option>All</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Sort by</label>
          <select className="border rounded-md px-3 py-2">
            <option>Due Date (Ascending)</option>
            <option>Due Date (Descending)</option>
            <option>Priority</option>
          </select>
        </div>
      </div>

      {/* Reminders List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {reminders.map((reminder) => (
              <tr key={reminder.id} className={reminder.completed ? 'bg-gray-50' : ''}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input 
                    type="checkbox" 
                    checked={reminder.completed} 
                    onChange={() => toggleComplete(reminder.id)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={reminder.completed ? 'line-through text-gray-500' : ''}>
                    {reminder.title}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(reminder.dueDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getPriorityColor(reminder.priority)}`}>
                    {reminder.priority}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-4">Edit</button>
                  <button 
                    className="text-red-600 hover:text-red-900"
                    onClick={() => deleteReminder(reminder.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Reminder Modal */}
      <div id="addReminderModal" className="hidden fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
        <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
          <div className="mt-3">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Reminder</h3>
            <div className="mt-2 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={newReminder.title}
                  onChange={handleInputChange}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Enter reminder title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
                <input
                  type="date"
                  name="dueDate"
                  value={newReminder.dueDate}
                  onChange={handleInputChange}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                <select
                  name="priority"
                  value={newReminder.priority}
                  onChange={handleInputChange}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button 
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                onClick={() => document.getElementById('addReminderModal').classList.add('hidden')}
              >
                Cancel
              </button>
              <button 
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                onClick={() => {
                  addReminder();
                  document.getElementById('addReminderModal').classList.add('hidden');
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reminders;