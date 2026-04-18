import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faCashRegister, 
  faBell, 
  faTriangleExclamation 
} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import SpaceLoader from '../../assets/SpaceLoader';

const Cards = ({user}) => {
const [totalDevices, setTotalDevices] = useState(0);
const [activeDevices, setActiveDevices] = useState(0);
const [loading,setLoading] = useState(false);

useEffect(() => {
  const fetchDeviceStats = async () => {
    try {
        setLoading(true);
      const [totalRes, activeRes,res] = await Promise.all([
        axios.get("http://localhost:3000/devices/total", {
          params: { userId: user.id },
          headers: { Authorization: `Bearer ${user.token}` }
        }),
        axios.get("http://localhost:3000/devices/active", {
          params: { userId: user.id },
          headers: { Authorization: `Bearer ${user.token}` }
        }),
    ]);

      setTotalDevices(totalRes.data.data);
      setActiveDevices(activeRes.data.data);
      
    } catch (err) {
        console.error("Error fetching device stats:", err);
    }
    finally{
        setLoading(false);
    }
  };

  if (user?.token) {
    fetchDeviceStats();
  }

}, [user]);

  return (

<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
    {/* {loading &&<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <SpaceLoader />
          </div>
    } */}
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
            <div className='text-2xl font-bold text-black'>{totalDevices}</div>
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
            <div className='text-2xl font-bold text-black'>{activeDevices}</div>
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