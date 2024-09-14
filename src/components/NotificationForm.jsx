import React, { useState, useContext } from 'react';
import { NotificationContext } from './NotificationContext';

const NotificationForm = () => {
  const [notification, setNotification] = useState('');
  const { addNotification } = useContext(NotificationContext);  // Get the addNotification function

  const handleSubmit = (e) => {
    e.preventDefault();
    addNotification(notification);  // Add the notification to the global state
    setNotification('');  // Clear the form
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Add Notification</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Notification Text</label>
          <textarea
            value={notification}
            onChange={(e) => setNotification(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter notification text"
            rows="3"
          />
        </div>
        <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">
          Add Notification
        </button>
      </form>
    </div>
  );
};

export default NotificationForm;
