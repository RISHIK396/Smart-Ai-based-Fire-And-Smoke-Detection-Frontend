import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faBell ,faShield,faHospital,faTriangleExclamation  } from '@fortawesome/free-solid-svg-icons'

const Callid = () => {
    return (

<div className='w-full mb-20 bg-white rounded-xl border border-gray-200 shadow-md p-6 flex flex-col gap-6'>

    {/* 🔝 Header */}
    <div className='flex items-center gap-3'>
        <FontAwesomeIcon
            icon={faPhone}
            className="text-red-500 text-lg"
        />

        <div>
            <h4 className='text-black font-semibold'>
                Emergency Contacts
            </h4>
            <p className='text-gray-400 text-sm'>
                Quick access to emergency services
            </p>
        </div>
    </div>

    {/* 🔽 Cards */}
    <div className='flex flex-wrap gap-4'>

        {/* 🔹 Fire Department */}
        <div className='w-full sm:w-64 p-5 border border-gray-200 rounded-xl flex flex-col gap-4'>

            <div className='flex items-center gap-3'>

                <div className='w-10 h-10 rounded-full bg-red-100 flex items-center justify-center'>
                    <FontAwesomeIcon 
                        icon={faBell } 
                        className="text-red-500"
                    />
                </div>

                <div>
                    <h3 className='text-black font-medium'>
                        Fire Department
                    </h3>
                    <p className='text-gray-400 text-sm'>
                        Fire emergency response
                    </p>
                </div>
            </div>

            <button className='flex items-center justify-center gap-2 
                               bg-red-500 text-white py-2 rounded-full 
                               hover:bg-red-600 transition duration-300'>

                <FontAwesomeIcon icon={faPhone} />

                Call 101
            </button>

        </div>
        <div className='w-full sm:w-64 p-5 border border-gray-200 rounded-xl flex flex-col gap-4'>

            <div className='flex items-center gap-3'>

                <div className='w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center'>
                    <FontAwesomeIcon 
                        icon={faShield} 
                        style={{ color: "rgb(43, 54, 255)" }} 
                        />
                </div>

                <div>
                    <h3 className='text-black font-medium'>
                        Police
                    </h3>
                    <p className='text-gray-400 text-sm'>
                        Law Enforcement
                    </p>
                </div>
            </div>

            <button className='flex items-center justify-center gap-2 
                               bg-blue-500 text-white py-2 rounded-full 
                               hover:bg-blue-600 transition duration-300'>

                <FontAwesomeIcon icon={faPhone} />

                Call 100
            </button>

        </div>
        <div className='w-full sm:w-64 p-5 border border-gray-200 rounded-xl flex flex-col gap-4'>

            <div className='flex items-center gap-3'>

                <div className='w-10 h-10 rounded-full bg-green-100 flex items-center justify-center'>
                    <FontAwesomeIcon icon={faHospital} style={{color: "rgb(19, 172, 63)",}} />
                </div>

                <div>
                    <h3 className='text-black font-medium'>
                        Fire Department
                    </h3>
                    <p className='text-gray-400 text-sm'>
                        Fire emergency response
                    </p>
                </div>
            </div>

            <button className='flex items-center justify-center gap-2 
                               bg-green-500 text-white py-2 rounded-full 
                               hover:bg-green-600 transition duration-300'>

                <FontAwesomeIcon icon={faPhone} />

                Call 102
            </button>

        </div>
        <div className='w-full sm:w-64 p-5 border border-gray-200 rounded-xl flex flex-col gap-4'>

            <div className='flex items-center gap-3'>

                <div className='w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center'>
                    <FontAwesomeIcon icon={faTriangleExclamation} style={{color: "rgb(231, 140, 15)",}} />
                </div>

                <div>
                    <h3 className='text-black font-medium'>
                        Fire Department
                    </h3>
                    <p className='text-gray-400 text-sm'>
                        Fire emergency response
                    </p>
                </div>
            </div>

            <button className='flex items-center justify-center gap-2 
                               bg-orange-500 text-white py-2 rounded-full 
                               hover:bg-orange-600 transition duration-300'>

                <FontAwesomeIcon icon={faPhone} />

                Call 112
            </button>

        </div>

    </div>

</div>
    )
}

export default Callid