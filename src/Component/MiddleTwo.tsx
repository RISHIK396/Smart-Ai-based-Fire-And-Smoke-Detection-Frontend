import React from 'react'
import { useNavigate } from 'react-router-dom'

const MiddleTwo = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full max-w-6xl mx-auto 
                rounded-2xl 
                flex flex-col items-center justify-center 
                bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500
                px-6 py-12 text-center'>

            <h2 className='text-xl sm:text-2xl md:text-3xl font-semibold text-white'>
                Ready To Protect Your Space?
            </h2>

            <p className='mt-3 text-sm sm:text-base md:text-lg text-white/90 max-w-2xl'>
                Join thousands of users who trust our AI-powered fire detection system
            </p>

            <button className='mt-6 px-6 py-2 rounded-full bg-white text-orange-600 font-medium 
                       hover:bg-gray-300 hover:scale-104 transition duration-300' onClick={()=>{navigate('/singUp')}}>
                Get Started
            </button>

        </div>
    )
}

export default MiddleTwo