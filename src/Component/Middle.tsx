import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell'
import { faShield } from '@fortawesome/free-solid-svg-icons/faShield'
import { faFire } from '@fortawesome/free-solid-svg-icons/faFire'

const Middle = () => {
  return (
    <div className='w-full bg-amber-50 px-4 py-16 flex flex-col items-center'>

      {/* 🔥 Heading */}
      <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center'>
        Why Choose Our System?
      </h2>

      <p className='text-gray-700 text-center mt-3 max-w-xl'>
        Advanced technology meets reliable protection for complete peace of mind
      </p>

      {/* 🔥 Feature Cards */}
      <div className='mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full max-w-6xl'>

        {/* Card 1 */}
        <div className='bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center'>
          
          <div className='w-14 h-14 mx-auto rounded-full bg-orange-100 flex items-center justify-center'>
            <FontAwesomeIcon icon={faBolt} className="text-orange-500 text-xl" />
          </div>

          <h4 className='mt-4 text-lg font-semibold'>
            Real-Time Detection
          </h4>

          <p className='text-gray-600 mt-2 text-sm'>
            AI-powered sensors detect smoke and fire instantly with 99.9% accuracy
          </p>
        </div>

        {/* You can duplicate this card 👇 */}

        <div className='bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center'>
          <div className='w-14 h-14 mx-auto rounded-full bg-red-100 flex items-center justify-center'>
            <FontAwesomeIcon 
            icon={faBell} 
            className="text-red-500 text-xl" 
            />
          </div>
          <h4 className='mt-4 text-lg font-semibold'>Instant Alerts</h4>
          <p className='text-gray-600 mt-2 text-sm'>
            Get notified immediately via multiple channels when danger is detected
          </p>
        </div>

        <div className='bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center'>
          <div className='w-14 h-14 mx-auto rounded-full bg-blue-100 flex items-center justify-center'>
            <FontAwesomeIcon 
            icon={faShield}
            className="text-blue-500 text-2xl"
            />
          </div>
          <h4 className='mt-4 text-lg font-semibold'>24/7 Monitoring</h4>
          <p className='text-gray-600 mt-2 text-sm'>
            Continuous surveillance of your devices with cloud-based management
          </p>
        </div>

         <div className='bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center'>
          <div className='w-14 h-14 mx-auto rounded-full bg-green-100 flex items-center justify-center'>
            <FontAwesomeIcon icon={faFire} className='text-green-600 text-2xl' />
          </div>
          <h4 className='mt-4 text-lg font-semibold'>Smart Response</h4>
          <p className='text-gray-600 mt-2 text-sm'>
            Automated emergency protocols and direct integration with fire services
          </p>
        </div>
      </div>

    </div>
  )
}

export default Middle