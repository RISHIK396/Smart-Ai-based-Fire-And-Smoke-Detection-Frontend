import React from 'react'
import Header from './Header'
import Navbar from './Navbar'

const Dashboard = () => {
  return (
    <div className='flex flex-col bg-[#fff4f0] w-full min-h-screen gap-5'>
        <Header/>
        <div className=''>
        <Navbar/>
        </div>
    </div>
  )
}

export default Dashboard