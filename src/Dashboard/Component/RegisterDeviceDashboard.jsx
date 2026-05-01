import { faFire, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const RegisterDeviceDashboard = ({ data = [] }) => {
  return (
    <div className="flex flex-col w-full gap-4">

      {data.map((device, index) => (
        <div
          key={device.id || index}
          className="flex justify-between items-center w-full p-4 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition"
        >

          {/* LEFT SECTION */}
          <div className="flex items-center gap-4">

            {/* Icon */}
            <div className="bg-orange-100 p-3 rounded-xl">
              <FontAwesomeIcon icon={faFire} className="text-orange-500" />
            </div>

            {/* Text */}
            <div className="flex flex-col">
              <h3 className="font-semibold text-gray-800">
                {device.name || "Device"}
              </h3>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <FontAwesomeIcon icon={faLocationDot} />
                <span>{device.location || "Unknown"}</span>
              </div>
            </div>

          </div>

          {/* RIGHT SECTION */}
          <div>
            <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600 font-medium">
              Active
            </span>
          </div>

        </div>
      ))}

    </div>
  )
}

export default RegisterDeviceDashboard