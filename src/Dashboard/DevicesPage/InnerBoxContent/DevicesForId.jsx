import React from 'react'

const DevicesForId = ({ data }) => {
  return (
    <div className="flex gap-4 flex-wrap">
      {data.map((device, index) => (
        <div
          key={device.id || index}
          className="rounded-xl border border-gray-300 p-4 w-[220px] shadow-sm hover:shadow-md transition"
        >
          <div className="flex flex-col gap-1 text-sm">
            
            <div className="font-semibold text-gray-800">
              {device.name}
            </div>

            <div className="text-gray-500">
              📍 {device.location}
            </div>

            <div className="text-gray-400 text-xs">
              Long: {device.longitude}
            </div>

            <div className="text-gray-400 text-xs">
              Lat: {device.latitude}
            </div>

          </div>
        </div>
      ))}
    </div>
  )
}

export default DevicesForId