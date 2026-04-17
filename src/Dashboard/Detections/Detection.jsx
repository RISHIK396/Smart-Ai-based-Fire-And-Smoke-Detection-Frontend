import React from 'react'

const Detection = () => {
  return (
    <div className="w-full flex flex-col gap-1 p-4">
      
      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-800">
        Detection History
      </h1>

      {/* Subtitle */}
      <p className="text-sm font-medium text-gray-500">
        View all fire and smoke detections organized by date
      </p>

      {/* Divider */}
      <div className="mt-3 border-t"></div>

    </div>
  )
}

export default Detection