import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import RegisterDevice from '../Component/RegisterDevice'
import RegisterModal from './RegisterModal'
import RegisterOnDeviceBar from './RegisterOnDeviceBar'
const Devices = ({ user }) => {
    const [modal, setModal] = useState(false);
    return (
        <div className='m-2'>
            <div className='flex justify-between items-center mt-5 mb-8'>
                <div className='flex flex-col'>
                    <h3 className='text-black text-2xl font-bold'>Your Devices</h3>
                    <p className='text-gray-500'>Manage And Monitor your fire detection devices</p>
                </div>
                <div>
                    <button className='mt-6 px-6 py-2 rounded-md 
                           bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500 
                           text-white text-sm font-medium 
                           hover:scale-105 transition duration-300 flex items-center gap-2' onClick={() => { setModal(true) }}>

                        <FontAwesomeIcon icon={faPlus} />

                        Register Device
                    </button>
                    {modal && (
                        <RegisterModal user={user} setModal={setModal} />
                    )}
                </div>
            </div>
            <RegisterOnDeviceBar user={user} />
        </div>
    )
}

export default Devices