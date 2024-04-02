import React, { createContext, useContext, useEffect, useState } from "react";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState({ weatherSuccess: [], weatherError: [], weatherWarning: [] });
  const [reLoad, setReLoad] = useState(false);

  const removeNotification = (type, index) => {
    const updatedNotifications = { ...notifications };
    updatedNotifications[type].splice(index, 1);
    setNotifications(updatedNotifications);
    // Save updated notifications to local storage
    localStorage.setItem('notifications', JSON.stringify(updatedNotifications));
  };

  const clearNotifications = () => {
    setNotifications({ weatherSuccess: [], weatherError: [], weatherWarning: [] });
    localStorage.removeItem('notifications');
  };

  const fetchNotifications = () => {
    const storedNotifications = JSON.parse(localStorage.getItem('notifications')) || { weatherSuccess: [], weatherError: [], weatherWarning: [] };
    setNotifications(storedNotifications);
  };

  useEffect(() => {
    if (reLoad) {
      fetchNotifications();
      setReLoad(false);
    }else{
      fetchNotifications();
    }
  }, [reLoad]);

  useEffect(() => {
    fetchNotifications();
  }, []); // Fetch notifications when component mounts

  return (
    <NotificationContext.Provider value={{ notifications, removeNotification, clearNotifications, setReLoad, reLoad }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);

export const saveNotification = (type, message) => {
  const weatherNotifications = JSON.parse(localStorage.getItem('notifications')) || { weatherSuccess: [], weatherError: [], weatherWarning: [] };
  weatherNotifications[type].push({ type, message });
  localStorage.setItem('notifications', JSON.stringify(weatherNotifications));
};
