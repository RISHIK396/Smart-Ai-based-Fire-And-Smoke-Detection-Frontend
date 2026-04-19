import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { toast } from 'react-toastify'

const RegisterModal = ({ setModal, user, setDevices}) => {

    const handleSubmit = async (e) => {
        e.preventDefault(); // ❗ prevent reload
        // console.log("Device Registered");
        const payload = {
            name: deviceName,
            location: location,
            longitude,
            latitude,
            userId: user.id
        }

        const res = await axios.post("http://localhost:3000/devices", payload, {
            headers: {
                Authorization: `Bearer ${user.token}` // 🔥 key line
            }
        });
        const newDevice = res.data.data;
        if (res.status === 201) {
            toast.success("Sucessfully Registered Device", {
                pauseOnHover: true,
                position: "top-right",
                hideProgressBar: false,
                autoClose: 3000,
                closeOnClick: true
            });
            setDevices(prev=>[...prev,newDevice]);
            setModal(false); // close modal after submit
        }

        else {
            toast.error("Some Thing Went Wrong", {
                pauseOnHover: true,
                position: "top-right",
                hideProgressBar: false,
                autoClose: 3000,
                closeOnClick: true
            });
        }
    }

    const [deviceName, setDeviceName] = useState("");
    const [location, setLocation] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    // const[status,setStatus] = useState("");



    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">

            {console.log("new device", user)}
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
                            name='deviceName' onChange={(e) => { setDeviceName(e.target.value) }} value={deviceName} />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Location
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. Kitchen - North Wall"
                            className="w-full mt-1 border border-gray-300 rounded-md p-2 
          focus:outline-none focus:ring-2 focus:ring-orange-400" name='location' onChange={(e) => { setLocation(e.target.value) }} value={location}
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Longitude
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. Kitchen - North Wall"
                            className="w-full mt-1 border border-gray-300 rounded-md p-2 
          focus:outline-none focus:ring-2 focus:ring-orange-400" name='longitude' onChange={(e) => { setLongitude(e.target.value) }} value={longitude}
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Latitude
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. Kitchen - North Wall"
                            className="w-full mt-1 border border-gray-300 rounded-md p-2 
          focus:outline-none focus:ring-2 focus:ring-orange-400" name='latitude' value={latitude} onChange={(e) => { setLatitude(e.target.value) }}
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