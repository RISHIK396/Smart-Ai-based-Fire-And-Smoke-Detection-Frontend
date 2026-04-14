import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'

const Dashboard = () => {
  const location = useLocation();
  console.log(location.state);
  const user = location.state;
  if(!user){
    return <h1>Please Login Again 😅</h1>
  }
  const userData = {
    name : user.name,
    email : user.email,
    id : user.userId,
    token:user.token
  }
  return (
    <div className='flex flex-col bg-[#fff4f0] w-full min-h-screen gap-5'>
      <Header user={userData}/>
      <div>
        <Navbar user={userData} />
      </div>
    </div>
  )
}

export default Dashboard