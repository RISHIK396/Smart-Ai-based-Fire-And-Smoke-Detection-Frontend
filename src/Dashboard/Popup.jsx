import React from 'react';

const Popup = ({ popup,onClose }) => {
  if (!popup) return null; // 👈 clean early return

  return (
    <div className="fixed top-5 right-5 bg-red-600 text-white p-4 rounded-lg shadow-lg z-50 w-80 animate-pulse">
      <h3 className="font-bold text-lg">🚨 Fire Alert!</h3>
      <button className="absolute top-2 right-2 text-white text-xl font-bold hover:text-gray-200" onClick={onClose}>x</button>

      <p><strong>Device:</strong> {popup.deviceName}</p>
      <p><strong>Location:</strong> {popup.location}</p>
      <p><strong>Temp:</strong> {popup.temperature}°C</p>

      {popup.image && (
        <img
          src={popup.image}
          alt="alert"
          className="mt-2 rounded-md w-full h-32 object-cover"
        />
      )}
    </div>
  );
};

export default Popup;