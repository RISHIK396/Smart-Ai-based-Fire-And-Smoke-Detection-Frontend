import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireFlameCurved } from '@fortawesome/free-solid-svg-icons'
const ByDefault = () => {
  return (
    <div>
        <div className="w-14 h-14 rounded-full bg-gray-100 flex justify-center items-center shadow-sm">
                    <FontAwesomeIcon
                        icon={faFireFlameCurved}
                        className="text-gray-400 text-xl"
                    />
                </div>

                <h3 className='mt-4 text-lg font-semibold text-gray-800'>
                    No Devices Detected
                </h3>

                <p className='text-sm text-gray-500 mt-1'>
                    Get started by registering your first device
                </p>
    </div>
  )
}

export default ByDefault