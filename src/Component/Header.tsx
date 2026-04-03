import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireFlameCurved } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full flex flex-col justify-center items-center bg-[#fff4f0] px-4'>

            {/* 🔥 Flame */}
            <div className='w-full flex justify-center items-center'>
                <div className='w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 
                        rounded-full bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500 
                        flex justify-center items-center shadow-2xl shadow-orange-500/50'>

                    <FontAwesomeIcon
                        icon={faFireFlameCurved}
                        className="text-white text-4xl sm:text-5xl md:text-5xl"
                    />
                </div>
            </div>

            {/* 🔥 Heading */}
            <h1 className='text-2xl sm:text-3xl md:text-5xl lg:text-6xl 
                   font-bold text-center mt-6 leading-tight'>
                AI-Based Fire Detection &

                <span className='block text-transparent bg-clip-text 
                         bg-gradient-to-r from-orange-500 to-red-500'>
                    Emergency Response System
                </span>
            </h1>

            {/* 🔥 Paragraph */}
            <p className='mt-4 text-gray-600 text-sm sm:text-base md:text-lg 
                  text-center max-w-md sm:max-w-xl md:max-w-2xl'>
                Protect your spaces with cutting-edge artificial intelligence.
                Real-time monitoring, instant alerts, and automated emergency
                response when it matters most.
            </p>

            {/* 🔥 Buttons */}
            <div className='w-full mt-8 flex flex-col sm:flex-row gap-6 justify-center items-center'>

                <button className='w-full sm:w-auto px-8 py-2 text-sm sm:text-base md:text-lg 
                           rounded-[10px] text-white 
                           bg-gradient-to-br from-orange-500 to-red-500 
                           shadow-lg shadow-orange-500/40 
                           hover:scale-105 hover:shadow-xl 
                           transition duration-300' onClick={()=>{navigate("/signUp")}}>
                    Get Started →
                </button>

                <button className='w-full sm:w-auto px-6 py-2 text-sm sm:text-base md:text-lg 
                           rounded-[10px] border border-gray-400 
                           text-gray-800 bg-white 
                           hover:bg-gray-100 hover:scale-105 
                           transition duration-300' onClick={()=>{navigate("/login")}}>
                    Sign In
                </button>

            </div>

        </div>
    )
}

export default Header