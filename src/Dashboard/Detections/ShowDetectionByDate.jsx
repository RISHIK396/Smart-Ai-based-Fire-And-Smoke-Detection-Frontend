import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";

const ShowDetectionByDate = ({ month, date, year, totalDetections, onClick }) => {
    
  return (
    <div 
      onClick={onClick}
      className='w-full flex justify-between items-center rounded-2xl p-4 border border-gray-300 hover:bg-gray-100 cursor-pointer transition mb-3'
    >
      
      {/* Left Section */}
      <div className='flex items-center gap-4'>
        
        {/* Folder Icon */}
        <div className='bg-gradient-to-r from-red-500 to-orange-400 p-3 rounded-2xl'>
          <FontAwesomeIcon icon={faFolder} className='text-white text-lg' />
        </div>

        {/* Text */}
        <div>
          <h3 className='font-semibold text-gray-800'>
            {month} {date}, {year}
          </h3>
          <p className='text-sm text-gray-500'>
            {totalDetections} detections recorded
          </p>
        </div>

      </div>

      {/* Right Section */}
      <div>
        <p className='bg-red-100 text-red-700 px-3 py-1 rounded-lg text-sm'>
          View Details →
        </p>
      </div>

    </div>
  );
};

export default ShowDetectionByDate;