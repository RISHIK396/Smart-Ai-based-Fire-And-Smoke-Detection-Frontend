import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faFireFlameCurved } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full min-h-screen bg-amber-50'>

      <div className='bg-white w-[90%] max-w-md h-[92vh] flex flex-col justify-evenly items-center rounded-3xl px-6 shadow-2xl border'>

        {/* Logo */}
        <div className='w-full flex justify-center items-center'>
          <div className='w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500 flex justify-center items-center shadow-2xl shadow-orange-500/50'>
            <FontAwesomeIcon icon={faFireFlameCurved} className="text-white text-4xl" />
          </div>
        </div>

        <h4 className='text-2xl font-semibold'>Create An Account</h4>
        <p className='text-gray-500 text-center'>
          Get Started With Your Fire Detection System
        </p>

        {/* Form */}
        <div className='flex flex-col w-full gap-3'>

          <label className='text-sm font-medium'>Full Name</label>
          <input className='px-4 w-full bg-gray-200 py-2 rounded-lg outline-none focus:ring-2 focus:ring-orange-400'
            type='text' placeholder='John Doe' name='name' />

          <label className='text-sm font-medium'>Email</label>
          <input className='px-4 w-full bg-gray-200 py-2 rounded-lg outline-none focus:ring-2 focus:ring-orange-400'
            type='email' placeholder='you@example.com' name='email' />

          <label className='text-sm font-medium'>Password</label>
          <input className='px-4 w-full bg-gray-200 py-2 rounded-lg outline-none focus:ring-2 focus:ring-orange-400'
            type='password' placeholder='.........' name='password' />

          <label className='text-sm font-medium'>Confirm Password</label>
          <input className='px-4 w-full bg-gray-200 py-2 rounded-lg outline-none focus:ring-2 focus:ring-orange-400'
            type='password' placeholder='........' name='confirmPassword' />

          {/* Info box */}
          <div className='flex items-center gap-2 bg-blue-100 p-3 rounded-lg'>
            <FontAwesomeIcon icon={faCircleCheck} className="text-blue-600" />
            <p className='text-sm'>
              Your account will be secured and ready to manage fire detection devices.
            </p>
          </div>
        </div>

        {/* Button */}
        <button className='w-full py-2 text-base rounded-lg text-white 
                           bg-gradient-to-br from-orange-500 to-red-500 
                           shadow-lg shadow-orange-500/40 
                           hover:scale-105 hover:shadow-xl transition duration-300'>
          Create Account
        </button>

        <p className='text-sm'>
          Already have an account?{" "}
          <Link className='text-orange-500 font-medium' to="/">Sign In</Link>
        </p>

      </div>
    </div>
  )
}

export default Signup