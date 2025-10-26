import React, { useState, useEffect } from "react";

export default function SimpleNotification({ message }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 3000); // auto hide
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    // Container for slide-in effect
    <div className="fixed top-40 right-9 z-5">
      <div
        className={`transform transition-transform duration-900 ${
          visible ? "translate-x-0 opacity-100" : "translate-x-32 opacity-0"
        } bg-blue-500 text-white p-4 rounded shadow-md flex items-center justify-between w-80`}
      >
        <span>{message}</span>
        <button
          className="ml-4 font-bold text-lg hover:text-gray-200"
          onClick={() => setVisible(false)}
        >
          ×
        </button>
      </div>
    </div>
  );
}
