import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'

const RegisterModal = ({ setModal }) => {

    const handleSubmit = (e) => {
        e.preventDefault(); // ❗ prevent reload
        console.log("Device Registered");
        setModal(false); // close modal after submit
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
            onClick={() => setModal(false)}
        >

            <div
                className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl p-6"
                
            >

                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                            Register New Device
                        </h3>
                        <p className="text-sm text-gray-500">
                            Add a new fire detection device to your system
                        </p>
                    </div>

                    <button
                        onClick={() => setModal(false)}
                        className="p-1 rounded-md hover:bg-gray-100 transition"
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Device Name
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. Kitchen Sensor A1"
                            className="w-full mt-1 border border-gray-300 rounded-md p-2 
          focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Location
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. Kitchen - North Wall"
                            className="w-full mt-1 border border-gray-300 rounded-md p-2 
          focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Status
                        </label>
                        <select className="w-full mt-1 border border-gray-300 rounded-md p-2">
                            <option>Active</option>
                            <option>Inactive</option>
                            <option>Alert</option>
                        </select>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 mt-4">

                        <button
                            type="button"
                            onClick={() => setModal(false)}
                            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="px-6 py-2 rounded-md 
                            bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500 
                            text-white text-sm font-medium 
                            hover:scale-105 transition duration-300 flex items-center gap-2"
                        >
                            <FontAwesomeIcon icon={faPlus} />
                            Register Device
                        </button>

                    </div>

                </form>

            </div>
        </div>
    )
}

export default RegisterModal