import React from 'react'
import Header from './Component/Header'
import Middle from './Component/Middle'
import MiddleTwo from './Component/MiddleTwo'
import Footer from './Component/Footer'

const App = () => {
  return (
    <div className='w-full min-h-screen bg-amber-50 flex flex-col'>

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