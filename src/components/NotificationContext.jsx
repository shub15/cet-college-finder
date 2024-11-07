import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || '';

// Create context
export const NotificationContext = createContext();

// Context provider
export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const URL = `${API_URL}/api/notifications`;

  useEffect(() => {
    // Fetch notifications from the backend when the app loads
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(URL);
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };
    
    fetchNotifications();
  }, []);

  const addNotification = async (notification) => {
    try {
      const response = await axios.post(URL, { text: notification });
      setNotifications((prevNotifications) => [...prevNotifications, response.data]);
    } catch (error) {
      console.error('Error adding notification:', error);
    }
  };

  const updateNotification = async (id, updatedText) => {
    try {
      const response = await axios.put(`${URL}/${id}`, { text: updatedText });
      setNotifications((prevNotifications) =>
        prevNotifications.map((notif) =>
          notif.id === id ? response.data : notif
        )
      );
    } catch (error) {
      console.error('Error updating notification:', error);
    }
  };

  const deleteNotification = async (id) => {
    try {
      await axios.delete(`${URL}/delete/${id}`);
      setNotifications((prevNotifications) =>
        prevNotifications.filter((notif) => notif.id !== id)
      );
    } catch (error) {
      console.error('Error deleting notification:', error);
    }
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, updateNotification, deleteNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
