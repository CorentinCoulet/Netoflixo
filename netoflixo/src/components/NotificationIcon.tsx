import React, { useState } from 'react';
import Bell from '../assets/bell.png'

const NotificationIcon = () => {
  const [notificationCount, setNotificationCount] = useState(3);

  const handleMouseOver = () => {
    setNotificationCount(0);
  };

  return (
    <div className="relative inline-block w-6 h-6" onMouseOver={handleMouseOver}>
        <span className="absolute bottom-2 left-2 bg-red-700 text-white rounded-full py-0.5 px-0.75 text-xs bold flex items-center justify-center min-w-3">{notificationCount}</span>
        <img src={Bell} alt="Notification Icon" />
    </div>
  );
};

export default NotificationIcon;
