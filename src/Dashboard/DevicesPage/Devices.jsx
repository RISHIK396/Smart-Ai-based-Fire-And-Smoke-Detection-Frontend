import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import RegisterModal from './RegisterModal'
import RegisterOnDeviceBar from './RegisterOnDeviceBar'

const Devices = ({ user,devices ,setDevices}) => {
    const [modal, setModal] = useState(false);

    return (
        <div className="m-4">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

                {/* Left Side */}
                <div>
                    <h3 className="text-2xl font-bold text-gray-800">
                        Your Devices
                    </h3>
                    <p className="text-gray-500 text-sm">
                        Manage and monitor your fire detection devices
                    </p>
                </div>

                {/* Right Side */}
                <button
                    onClick={() => setModal(true)}
                    className="px-5 py-2 rounded-lg 
                    bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 
                    text-white text-sm font-medium 
                    hover:scale-105 active:scale-95 
                    transition duration-300 flex items-center gap-2 shadow-md"
                >
                    <FontAwesomeIcon icon={faPlus} />
                    Register Device
                </button>
            </div>

            {/* Device Bar */}
            <RegisterOnDeviceBar user={user} devices={devices} setDevices={setDevices} />

            {/* Modal (outside button for clean structure) */}
            {modal && (
                <RegisterModal user={user} setModal={setModal} setDevices={setDevices} />
            )}

        </div>
    )
}

export default Devices