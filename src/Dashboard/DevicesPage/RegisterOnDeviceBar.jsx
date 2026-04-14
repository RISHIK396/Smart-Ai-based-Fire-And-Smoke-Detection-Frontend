import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import RegisterModal from '../DevicesPage/RegisterModal';
import axios from 'axios';
import ByDefault from './InnerBoxContent/ByDefault';
import DevicesForId from './InnerBoxContent/DevicesForId';

const RegisterOnDeviceBar = ({ user }) => {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/devices",
          {
            params:{
                userId:user.id
            },
            headers: {
              Authorization: `Bearer ${user.token}`
            }
          }
        );


        setData(res.data.data.devices);

      } catch (error) {
        console.error(error);
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

        {data.length > 0 ? (
          <DevicesForId data={data.devices} />
        ) : (
          <ByDefault />
        )}

        <button className="border border-gray-300 rounded-full px-4 py-1 hover:bg-gray-100 transition duration-300">
          <span className='text-sm text-gray-700'>View All</span>
        </button>

      </div>

      {/* Bottom Section */}
      <div className='flex flex-col items-center justify-center text-center py-10'>

        {modal && <RegisterModal user={user} setModal={setModal} />}

        <button
          className='mt-6 px-6 py-2 rounded-md 
          bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500 
          text-white text-sm font-medium 
          hover:scale-105 transition duration-300 flex items-center gap-2'
          onClick={() => setModal(true)}
        >
          <FontAwesomeIcon icon={faPlus} />
          Register Device
        </button>

      </div>
    </div>
  );
};

export default RegisterOnDeviceBar