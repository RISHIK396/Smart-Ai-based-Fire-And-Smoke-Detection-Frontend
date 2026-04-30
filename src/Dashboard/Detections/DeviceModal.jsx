import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faMobile, faXmark } from "@fortawesome/free-solid-svg-icons";
import DeviceDetection from './DeviceDetection';

const DeviceModal = ({ selectedDateData, isModalOpen,setIsModalOpen, setSelectedDevice }) => {
    if (!isModalOpen) return null;

    const dateObj = new Date(selectedDateData?.[0]?.createdAt);

    const groupedByDevice = selectedDateData.reduce((acc, item) => {
        const deviceName = item.deviceName || "Unknown";

        if (!acc[deviceName]) {
            acc[deviceName] = [];
        }

        acc[deviceName].push(item);
        return acc;
    }, {});

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

            {/* Modal Box */}
            <div className='w-[600px] bg-white p-6 rounded-2xl flex flex-col gap-4 shadow-xl'>

                {/* 🔥 Header */}
                <div className='flex justify-between items-center'>

                    <div className='flex gap-3 items-center'>
                        <FontAwesomeIcon icon={faFolder} className='text-red-400 text-lg' />

                        <p className='text-xl font-semibold'>
                            {dateObj.toLocaleString("default", { month: "long" })}{" "}
                            {dateObj.getDate()}, {dateObj.getFullYear()}
                        </p>
                    </div>

                    {/* ❌ Close Button */}
                    <button
                        onClick={()=>setIsModalOpen(false)}
                        className="p-2 rounded-full hover:bg-red-100 transition"
                    >
                        <FontAwesomeIcon icon={faXmark} className="text-gray-600 hover:text-red-500" />
                    </button>

                </div>

                <p className='text-gray-500 text-sm'>
                    Select a device to view its detections
                </p>

                {/* 🔥 Device List */}
                <div className='flex flex-col gap-3'>

                    {Object.entries(groupedByDevice).map(([deviceName, items], i) => (

                        <div
                            key={i}
                            onClick={() => setSelectedDevice(items)}
                            className='group rounded-xl flex justify-between items-center border border-amber-100 p-3 cursor-pointer transition-all duration-200 hover:shadow-md hover:border-orange-400 hover:bg-orange-50'
                        >

                            {/* Left */}
                            <div className='flex gap-3 items-center'>
                                <div className='bg-gradient-to-r from-red-500 to-orange-400 p-3 rounded-xl '>
                                    <FontAwesomeIcon icon={faMobile} className='text-white' />
                                </div>

                                <div>
                                    <h3 className='font-semibold group-hover:text-orange-600'>
                                        {deviceName}
                                    </h3>
                                    <p className='text-sm text-gray-500'>
                                        {items.length} detections
                                    </p>
                                </div>
                            </div>

                            {/* Right */}
                            <div>
                                <p className='bg-[#fabca7] px-5 py-1 rounded-full text-red-900 text-sm transition group-hover:bg-red-200'>
                                    View →
                                </p>
                            </div>

                        </div>
                    ))}
                    {/* <DeviceDetection setSelectedDevice /> */}

                </div>

            </div>
        </div>
    )
}

export default DeviceModal;