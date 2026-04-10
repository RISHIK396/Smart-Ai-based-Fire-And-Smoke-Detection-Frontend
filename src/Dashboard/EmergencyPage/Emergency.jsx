import React from 'react'
import Callid from '../Component/Callid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTriangleExclamation
} from '@fortawesome/free-solid-svg-icons'
const Emergency = () => {
    return (
        <div className='w-full'>
            <div className='flex flex-col mt-2 mb-5'>
                <h3 className='text-2xl font-semibold'>Emergency Services</h3>
                <p className='text-gray-400'>Quick Access To emergency contacts and services</p>
            </div>
            <Callid />
            <div className='border border-red-300 bg-red-100 p-5 rounded-lg flex flex-col gap-4 shadow-sm mb-10'>

                {/* Header */}
                <div className='flex items-center gap-3'>
                    <FontAwesomeIcon
                        icon={faTriangleExclamation}
                        className="text-red-700 text-lg"
                    />
                    <h4 className='text-red-800 font-semibold text-lg'>
                        Emergency Procedures
                    </h4>
                </div>

                {/* List */}
                <ol className='list-decimal pl-5 flex flex-col gap-2'>
                    <li className='text-red-800 text-sm'>
                        Immediately evacuate the building when an alarm sounds
                    </li>
                    <li className='text-red-800 text-sm'>
                        Call emergency services (911) once you are in a safe location
                    </li>
                    <li className='text-red-800 text-sm'>
                        Never re-enter the building until authorities declare it safe
                    </li>
                    <li className='text-red-800 text-sm'>
                        Account for all occupants at your designated meeting point
                    </li>
                    <li className='text-red-800 text-sm'>
                        Provide emergency responders with building and device information
                    </li>
                </ol>

            </div>
        </div>
    )
}

export default Emergency