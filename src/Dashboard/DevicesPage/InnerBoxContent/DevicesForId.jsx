import { faTrash, faLocationDot, faTowerObservation, faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import React, { useState } from 'react'

const DevicesForId = ({ data = [] }, setDevices) => {

  const [copiedId, setCopiedId] = useState(null);

  const handleDelete = async (deviceId) => {
    try {
      // if (!window.confirm("Delete this device?")) return;
      const data = await axios.post("https://fire-and-smoke-backend.onrender.com/devices/delete", { deviceId }, { withCredentials: true });
      if (data.status == (201)) {
        setDevices((prev) => prev.filter(d => d.id !== deviceId));
      }
    }
    catch (error) {
      console.log(error);
    }
  }
  const handleCopy = async (id) => {
    try {
      await navigator.clipboard.writeText(id);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1500);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="flex gap-4 flex-wrap justify-center">

      {data.map((device, index) => (
        <div
          key={device.id || index}
          className="w-full sm:w-[90%] md:w-[450px] 
                     bg-white p-4 sm:p-5 
                     rounded-2xl border border-gray-200 
                     shadow-sm hover:shadow-lg 
                     transition-all duration-300 
                     flex flex-col gap-4"
        >

          {/* 🔥 Top Section */}
          <div className="flex justify-between items-start">

            <div className="flex gap-3 items-center">

              <div className="bg-gradient-to-r from-orange-400 to-red-400 p-2 sm:p-3 rounded-xl">
                <FontAwesomeIcon icon={faTowerObservation} className="text-white text-sm sm:text-base" />
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                  {device.name || "Device"}
                </h3>

                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span>{device.location || "Unknown"}</span>
                </div>
              </div>

            </div>

            <button className="p-2 rounded-lg hover:bg-red-50 transition" onClick={() => { handleDelete(device.id) }}>
              <FontAwesomeIcon icon={faTrash} className="text-red-500 text-sm" />
            </button>

          </div>

          {/* 🔥 Status */}
          <div className="flex justify-between items-center">
            <p className="text-gray-500 text-xs sm:text-sm">Status</p>
            <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600 font-medium">
              Active
            </span>
          </div>

          {/* 🔥 Device ID */}
          <div className="flex justify-between items-center">
            <p className="text-gray-500 text-xs sm:text-sm">ID</p>

            <div className="relative group cursor-pointer max-w-[60%]">

              <div
                onClick={() => handleCopy(device.id)}
                className="flex items-center gap-2 px-2 sm:px-3 py-1 rounded-xl 
                           bg-yellow-100 hover:bg-yellow-200 transition"
              >
                {/* 🔥 Truncated ID */}
                <span className="text-xs text-gray-700 truncate max-w-[120px] sm:max-w-[200px]">
                  {device.id}
                </span>

                <FontAwesomeIcon
                  icon={faCopy}
                  className={`text-xs sm:text-sm ${copiedId === device.id ? "text-green-600" : "text-gray-500"
                    }`}
                />
              </div>

              {/* Tooltip (hide on mobile) */}
              <div className="hidden sm:block absolute -top-8 left-1/2 -translate-x-1/2 
                    opacity-0 group-hover:opacity-100 
                    transition text-xs px-2 py-1 rounded-md 
                    bg-black text-white whitespace-nowrap">

                {copiedId === device.id ? "Copied ✅" : "Click to copy"}

              </div>

            </div>
          </div>

          {/* 🔥 Coordinates */}
          <div className="bg-gray-50 rounded-xl p-3 text-xs sm:text-sm flex flex-col gap-2">

            <div className="flex justify-between">
              <p className="text-gray-500">Longitude</p>
              <p className="font-medium text-gray-700">
                {device.longitude || "--"}
              </p>
            </div>

            <div className="flex justify-between">
              <p className="text-gray-500">Latitude</p>
              <p className="font-medium text-gray-700">
                {device.latitude || "--"}
              </p>
            </div>

          </div>

        </div>
      ))}

    </div>
  )
}

export default DevicesForId;