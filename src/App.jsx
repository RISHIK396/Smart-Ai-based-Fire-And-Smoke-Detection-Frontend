import React, { useEffect } from 'react'
import Header from './Component/Header'
import Middle from './Component/Middle'
import MiddleTwo from './Component/MiddleTwo'
import Footer from './Component/Footer'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  useEffect(() => {
  toast.success("App Loaded 🎉");
}, []);
  return (
    <div className='w-full min-h-screen bg-[#fff4f0] flex flex-col'>
  <div className='w-full flex flex-col items-center gap-20 flex-grow py-20'>

    <Header />
    <Middle />
    <MiddleTwo />
  </div>
  <Footer/>
</div>
  )
}

export default App