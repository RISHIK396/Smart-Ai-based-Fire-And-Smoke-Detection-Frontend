import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireFlameCurved, faPlus } from '@fortawesome/free-solid-svg-icons'
import RegisterModal from '../DevicesPage/RegisterModal';
import axios from 'axios';
import SpaceLoader from '../../assets/SpaceLoader';
import DevicesForId from '../DevicesPage/InnerBoxContent/DevicesForId';

const RegisterDevice = ({setActiveTab,user}) => {
    const [modal, setModal] = useState(false);
    const [data, setData] = useState([]);
    const[loading,setLoading] = useState(false);
      useEffect(() => {
    const fetchDevices = async () => {
      try {
        setLoading(true);

        const res = await axios.get(
          "http://localhost:3000/devices",
          {
            params: {
              userId: user.id
            },
            headers: {
              Authorization: `Bearer ${user.token}`
            }
          }
        );

        setData(res.data.data.devices || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (user?.token) {
      fetchDevices();
    }

  }, [user]);
    return (

        <div className='w-full bg-white rounded-xl border border-gray-200 shadow-md p-6 flex flex-col gap-6'>

            {/* 🔝 Header */}
            <div className='flex justify-between items-center'>

                <div>
                    <h4 className='text-black font-semibold'>
                        Recent Devices
                    </h4>
                    <p className='text-gray-400 text-sm'>
                        Your latest registered devices
                    </p>
                </div>

                <button className="border border-gray-300 rounded-full px-4 py-1 hover:bg-gray-100 transition duration-300">
                    <span className='text-sm text-gray-700'>View All</span>
                </button>

            </div>

            {/* 🔽 Empty State */}
            <div className='flex flex-col items-center justify-center'>
           {loading ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <SpaceLoader />
          </div>
        ) : data.length > 0 ? (
          <DevicesForId data={data} />
        ) : (
            <div className='flex flex-col items-center justify-center text-center py-10'>

                <div className="w-14 h-14 rounded-full bg-gray-100 flex justify-center items-center shadow-sm">
                    <FontAwesomeIcon
                        icon={faFireFlameCurved}
                        className="text-gray-400 text-xl"
                    />
                </div>

                <h3 className='mt-4 text-lg font-semibold text-gray-800'>
                    No Devices Detected
                </h3>

                <p className='text-sm text-gray-500 mt-1'>
                    Get started by registering your first device
                </p>
                </div>)}
                {modal && <RegisterModal setModal={setModal}/>}
                <button id='register-btn' className='mt-6 px-6 py-2 rounded-md 
                           bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500 
                           text-white text-sm font-medium 
                           hover:scale-105 transition duration-300 flex items-center gap-2' onClick={() => { 
                            console.log("Hello World")
                           setActiveTab("devices")}}>

                    <FontAwesomeIcon icon={faPlus} />

                    Register Device
                </button>

            </div>

        </div>
    )
}

export default RegisterDevice