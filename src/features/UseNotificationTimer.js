import { useState, useEffect } from "react";

const useNotificationTimer = (notification, duration = 3000) => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (notification) {
      setShowNotification(true);
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [notification, duration]);

  return showNotification;
};

export default useNotificationTimer;
