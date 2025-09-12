import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero-Section/Hero'
import ShopBySport from '../../components/ShopBySportPage/ShopBySport'

const Home = () => {
  return (
    <div className='text-black overflow-x-hidden '>
        <Header/>
        <Hero/>
        <ShopBySport/>
      
    </div>
  )
}

export default Home
