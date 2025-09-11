import React from 'react'
import TopSection from './TopSection'
import Nav from './Nav'
import BottomSection from './BottomSection'

const Header = () => {
  return (
    <div className='bg-[#111111]  w-[100vw] flex flex-col  text-white'>
      <TopSection/>
      <Nav/>
      <BottomSection/>
    </div>
  )
}

export default Header
