import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireFlameCurved,faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
  return (

<div className='w-full bg-white shadow-md px-6 py-3 flex items-center justify-between fixed'>

    {/* 🔥 Left: Logo + Name */}
    <div className='flex items-center gap-4'>

        <div className="w-12 h-12 rounded-xl 
                        bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500 
                        flex justify-center items-center shadow-md">

            <FontAwesomeIcon
                icon={faFireFlameCurved}
                className="text-white text-xl"
            />
        </div>

        <div className='flex flex-col'>
            <h1 className='text-black text-lg font-semibold'>
                Fire Detection System
            </h1>
            <p className='text-gray-400 text-sm'>
                AI-Based Emergency Response
            </p>
        </div>
    </div>

    {/* 👤 Right: User + Logout */}
    <div className='flex items-center gap-4'>

        <div className='flex flex-col text-right'>
            <h1 className='text-black text-sm font-medium'>
                User Name
            </h1>
            <p className='text-gray-400 text-xs'>
                email of the user
            </p>
        </div>

        <button className='flex items-center gap-2 border border-gray-400 rounded-xl px-4 py-2 
                           hover:bg-gray-100 transition duration-300'>

            <FontAwesomeIcon 
                icon={faRightFromBracket} 
                className="text-black text-sm"
            />

            <span className='text-sm'>Logout</span>
        </button>

    </div>

</div>
  )
}

export default Header