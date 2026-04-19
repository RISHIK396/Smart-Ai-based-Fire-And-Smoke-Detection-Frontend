import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import RegisterModal from '../DevicesPage/RegisterModal';
import axios from 'axios';
import ByDefault from './InnerBoxContent/ByDefault';
import DevicesForId from './InnerBoxContent/DevicesForId';
import SpaceLoader from '../../assets/SpaceLoader';

const RegisterOnDeviceBar = ({ user,devices,setDevices }) => {
  const [modal, setModal] = useState(false);
  // const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        console.log(devices);
        if(devices.length>0){
          console.log("inside if block");
          console.log(devices);
          // setData(devices);
          return;
        }
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

        setDevices(res.data.data.devices || []);
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

      {/* Header */}
      <div className='flex justify-between items-center'>
        <div className='flex flex-col justify-center items-center'>
        {loading ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <SpaceLoader />
          </div>
        ) : devices.length > 0 ? (
          <DevicesForId data={devices} />
        ) : (
          <ByDefault />
        )}
        </div>
        <button className="border border-gray-300 rounded-full px-4 py-1 hover:bg-gray-100 transition duration-300 text-sm text-gray-700">
          View All
        </button>

      </div>

      {/* Bottom Section */}
      <div className='flex flex-col items-center justify-center text-center py-8'>

        <button
          className='px-6 py-2 rounded-md 
          bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 
          text-white text-sm font-medium 
          hover:scale-105 active:scale-95
          transition duration-300 flex items-center gap-2 shadow-md'
          onClick={() => setModal(true)}
        >
          <FontAwesomeIcon icon={faPlus} />
          Register Device
        </button>

      </div>

      {/* Modal (moved outside for better layering) */}
      {modal && <RegisterModal user={user} setModal={setModal} setDevices={setDevices}/>}

    </div>
  );
};

export default RegisterOnDeviceBar;