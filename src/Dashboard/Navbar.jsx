import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBoxesStacked,
    faMobileScreenButton,
    faPhone,
    faClockRotateLeft
} from '@fortawesome/free-solid-svg-icons'
import Cards from './Component/Cards'
import RegisterDevice from './Component/RegisterDevice'
import Callid from './Component/Callid'
import Devices from './DevicesPage/Devices'
import Emergency from './EmergencyPage/Emergency'

const Navbar = () => {
    const [activeTab, setActiveTab] = useState("overview")

    return (
        <div className='mt-25'>
            <div className='w-full max-w-3xl mx-auto 
                bg-gray-200 rounded-xl p-2 
                flex justify-between items-center flex-wrap sm:flex-nowrap gap-2'>

                {/* 🔹 Overview */}
                <button
                    onClick={() => setActiveTab("overview")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition duration-300
        ${activeTab === "overview"
                            ? "bg-white shadow-sm text-orange-500"
                            : "text-gray-700 hover:bg-white"
                        }`}>

                    <FontAwesomeIcon
                        icon={faBoxesStacked}
                        className={activeTab === "overview" ? "text-orange-500" : "text-gray-700"}
                    />
                    <span className='text-sm font-medium'>Overview</span>
                </button>

                {/* 🔹 Devices */}
                <button
                    onClick={() => setActiveTab("devices")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition duration-300
        ${activeTab === "devices"
                            ? "bg-white shadow-sm text-orange-500"
                            : "text-gray-700 hover:bg-white"
                        }`}>

                    <FontAwesomeIcon
                        icon={faMobileScreenButton}
                        className={activeTab === "devices" ? "text-orange-500" : "text-gray-700"}
                    />
                    <span className='text-sm font-medium'>Devices</span>
                </button>

                {/* 🔹 Emergency */}
                <button
                    onClick={() => setActiveTab("emergency")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition duration-300
        ${activeTab === "emergency"
                            ? "bg-white shadow-sm text-orange-500"
                            : "text-gray-700 hover:bg-white"
                        }`}>

                    <FontAwesomeIcon
                        icon={faPhone}
                        className={activeTab === "emergency" ? "text-orange-500" : "text-gray-700"}
                    />
                    <span className='text-sm font-medium'>Emergency</span>
                </button>

                {/* 🔹 Detections */}
                <button
                    onClick={() => setActiveTab("detections")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition duration-300
        ${activeTab === "detections"
                            ? "bg-white shadow-sm text-orange-500"
                            : "text-gray-700 hover:bg-white"
                        }`}>

                    <FontAwesomeIcon
                        icon={faClockRotateLeft}
                        className={activeTab === "detections" ? "text-orange-500" : "text-gray-700"}
                    />
                    <span className='text-sm font-medium'>Detections</span>
                </button>
            </div>
            <div className="mt-6 w-full max-w-6xl mx-auto">

                {activeTab === "overview" && <div className='flex flex-col gap-8'>
                    <Cards/>
                    <RegisterDevice/>
                    <Callid/>
                    </div>}
                {activeTab === "devices" && <div>
                    <Devices/></div>}
                {activeTab === "emergency" && <div>
                    <Emergency/>
                    </div>}
                {activeTab === "detections" && <div>🔥 Detections Content</div>}

            </div>
        </div>
    )   
}

export default Navbar