import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faCashRegister, 
  faBell, 
  faTriangleExclamation 
} from '@fortawesome/free-solid-svg-icons'

const Cards = () => {
  return (

<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>

    {/* 🔹 Card 1 */}
    <div className='w-full flex flex-col p-6 
                    bg-white border border-gray-200 rounded-xl 
                    shadow-md hover:shadow-lg transition duration-300'>

        <div className='flex justify-between items-center'>
            <h4 className='text-black font-medium'>
                Total Devices
            </h4>

            <div className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center'>
                <FontAwesomeIcon icon={faCashRegister} className="text-gray-600" />
            </div>
        </div>

        <div className='mt-6'>
            <div className='text-2xl font-bold text-black'>0</div>
            <div className='text-sm text-gray-500'>Registered devices</div>
        </div>

    </div>

    {/* 🔹 Card 2 */}
    <div className='w-full flex flex-col p-6 
                    bg-white border border-gray-200 rounded-xl 
                    shadow-md hover:shadow-lg transition duration-300'>

        <div className='flex justify-between items-center'>
            <h4 className='text-black font-medium'>
                Active Devices
            </h4>

            <div className='w-10 h-10 rounded-full bg-green-100 flex items-center justify-center'>
                <FontAwesomeIcon icon={faBell} className="text-green-600" />
            </div>
        </div>

        <div className='mt-6'>
            <div className='text-2xl font-bold text-black'>0</div>
            <div className='text-sm text-gray-500'>Currently Monitoring</div>
        </div>

    </div>

    {/* 🔹 Card 3 */}
    <div className='w-full flex flex-col p-6 
                    bg-white border border-gray-200 rounded-xl 
                    shadow-md hover:shadow-lg transition duration-300'>

        <div className='flex justify-between items-center'>
            <h4 className='text-black font-medium'>
                Alerts
            </h4>

            <div className='w-10 h-10 rounded-full bg-red-100 flex items-center justify-center'>
                <FontAwesomeIcon icon={faTriangleExclamation} className="text-red-500" />
            </div>
        </div>

        <div className='mt-6'>
            <div className='text-2xl font-bold text-black'>0</div>
            <div className='text-sm text-gray-500'>Required Actions</div>
        </div>

    </div>

</div>
  )
}

export default Cards