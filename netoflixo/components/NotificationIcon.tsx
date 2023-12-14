import React, { useState } from 'react';
import '../styles/NotificationIcon.css';
import Bell from '../src/assets/bell.png'

const NotificationIcon = () => {
  const [notificationCount, setNotificationCount] = useState(3);

  const handleMouseOver = () => {
    setNotificationCount(0);
  };

  return (
    <div className="notification-icon" onMouseOver={handleMouseOver}>
        <span className="notification-badge">{notificationCount}</span>
        <img src={Bell} alt="Notification Icon" />
    </div>
  );
};

export default NotificationIcon;
