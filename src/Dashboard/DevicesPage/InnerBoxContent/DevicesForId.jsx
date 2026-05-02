import { faTrash, faLocationDot, faTowerObservation, faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const DevicesForId = ({ data = [] }) => {

  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = async (id) => {
    try {
      await navigator.clipboard.writeText(id);
      setCopiedId(id);

      setTimeout(() => setCopiedId(null), 1500); // reset after 1.5s
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="flex gap-5 flex-wrap">

      {data.map((device, index) => (
        <div
          key={device.id || index}
          className="bg-white w-[450px] p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-4"
        >

          {/* 🔥 Top Section */}
          <div className="flex justify-between items-start">

            <div className="flex gap-3 items-center">

              <div className="bg-gradient-to-r from-orange-400 to-red-400 p-3 rounded-xl">
                <FontAwesomeIcon icon={faTowerObservation} className="text-white" />
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">
                  {device.name || "Device"}
                </h3>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span>{device.location || "Unknown"}</span>
                </div>
              </div>

            </div>

            {/* Delete */}
            <button className="p-2 rounded-lg hover:bg-red-50 transition">
              <FontAwesomeIcon icon={faTrash} className="text-red-500" />
            </button>

          </div>

          {/* 🔥 Status */}
          <div className="flex justify-between items-center">
            <p className="text-gray-500 text-sm">Status</p>
            <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600 font-medium">
              Active
            </span>
          </div>

          {/* 🔥 Device ID with Copy */}
          <div className="flex justify-between items-center">
            <p className="text-gray-500 text-sm">ID</p>

            {/* 🔥 Tooltip Wrapper */}
            <div className="relative group cursor-pointer">

              {/* ID + Icon */}
              <div
                onClick={() => handleCopy(device.id)}
                className="flex items-center gap-2 px-3 py-1 rounded-xl bg-yellow-100 hover:bg-yellow-200 transition"
              >
                <span className="text-xs text-gray-700">{device.id}</span>

                <FontAwesomeIcon
                  icon={faCopy}
                  className={`text-sm ${copiedId === device.id ? "text-green-600" : "text-gray-500"
                    }`}
                />
              </div>

              {/* 🔥 Tooltip */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 
                    opacity-0 group-hover:opacity-100 
                    transition text-xs px-2 py-1 rounded-md 
                    bg-black text-white whitespace-nowrap">

                {copiedId === device.id ? "Copied ✅" : "Click to copy"}

              </div>

            </div>
          </div>

          {/* 🔥 Coordinates */}
          <div className="bg-gray-50 rounded-xl p-3 text-sm flex flex-col gap-2">

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