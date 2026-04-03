import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireFlameCurved } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
     <div className='flex flex-col items-center justify-center w-full min-h-screen bg-[#fff4f0]'>

      <div className='bg-white w-[90%] max-w-md h-[65vh] flex flex-col justify-evenly items-center rounded-3xl px-6 shadow-2xl border'>

        {/* Logo */}
        <div className='w-full flex justify-center items-center'>
          <div className='w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500 flex justify-center items-center shadow-2xl shadow-orange-500/50'>
            <FontAwesomeIcon icon={faFireFlameCurved} className="text-white text-4xl" />
          </div>
        </div>

        <h4 className='text-2xl font-semibold'>Welcome Back</h4>
        <p className='text-gray-500 text-center'>
          Sign in to your Fire Detection System account
        </p>

        {/* Form */}
        <div className='flex flex-col w-full gap-3'>

          <label className='text-sm font-medium'>Email</label>
          <input className='px-4 w-full bg-gray-200 py-2 rounded-lg outline-none focus:ring-2 focus:ring-orange-400'
            type='email' placeholder='you@example.com' name='email' />

          <label className='text-sm font-medium'>Password</label>
          <input className='px-4 w-full bg-gray-200 py-2 rounded-lg outline-none focus:ring-2 focus:ring-orange-400'
            type='password' placeholder='••••••••' name='password'  />

        </div>

        {/* Button */}
        <button className='w-full py-2 text-base rounded-lg text-white 
                           bg-gradient-to-br from-orange-500 to-red-500 
                           shadow-lg shadow-orange-500/40 
                           hover:scale-105 hover:shadow-xl transition duration-300'>
          Sign In
        </button>

        <p className='text-sm'>
          Don't have an account?{" "}
          <Link className='text-orange-500 font-medium' to="/signUp">Sign Up</Link>
        </p>

      </div>
    </div>
  )
}

export default Login