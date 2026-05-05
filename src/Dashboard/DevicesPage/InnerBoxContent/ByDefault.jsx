import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireFlameCurved } from '@fortawesome/free-solid-svg-icons'

const ByDefault = () => {
  return (
    <div className="w-full flex justify-center items-center mt-10 px-4">

      <div className="flex flex-col items-center text-center 
                      bg-white border border-gray-200 
                      rounded-2xl p-8 shadow-sm 
                      hover:shadow-md transition duration-300 
                      max-w-sm w-full">

        {/* 🔥 Icon */}
        <div className="w-16 h-16 rounded-full 
                        bg-gradient-to-br from-orange-100 to-red-100 
                        flex justify-center items-center 
                        shadow-inner mb-4">

          <FontAwesomeIcon
            icon={faFireFlameCurved}
            className="text-orange-400 text-2xl animate-pulse"
          />
        </div>

        {/* 🔥 Title */}
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
          No Devices Detected
        </h3>

        {/* 🔥 Subtitle */}
        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
          Get started by registering your first device 🚀
        </p>

        {/* 🔥 CTA Button (optional but powerful) */}
        {/* <button className="mt-5 px-5 py-2 rounded-xl 
                           bg-gradient-to-r from-orange-500 to-red-500 
                           text-white text-sm font-medium 
                           hover:scale-105 active:scale-95 
                           transition duration-200 shadow-md">

          + Add Device
        </button> */}

      </div>

    </div>
  )
}

export default ByDefault