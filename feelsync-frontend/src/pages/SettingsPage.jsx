import React, { useState } from 'react';

function SettingsPage() {
  const [notifications, setNotifications] = useState(true);

  const toggleNotifications = () => {
    setNotifications(!notifications);
  };

  return (
    <div className="settings-page">
      <h2>Settings</h2>
      <label>
        <input
          type="checkbox"
          checked={notifications}
          onChange={toggleNotifications}
        />
        Daily Notifications
      </label>
    </div>
  );
}

export default SettingsPage;
