import React, { useContext } from 'react';
import { NotificationContext } from './NotificationContext';

const NotificationList = () => {
  const { notifications, updateNotification, deleteNotification } = useContext(NotificationContext);

  const handleEdit = (id, currentText) => {
    const newText = prompt('Edit the notification text:', currentText);
    if (newText !== null && newText.trim() !== '') {
      updateNotification(id, newText.trim());
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Notifications</h2>
      {notifications.length > 0 ? (
        <ul className="space-y-4">
          {notifications.map((notif) => (
            <li key={notif.id} className="border p-4 rounded shadow">
              <p className='py-4'>{notif.text}</p>
              <button
                onClick={() => handleEdit(notif.id, notif.text)}
                className="bg-yellow-500 text-white py-1 px-2 rounded mr-2 hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => deleteNotification(notif.id)}
                className="bg-red-600 text-white py-1 px-2 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No notifications available.</p>
      )}
    </div>
  );
};

export default NotificationList;
