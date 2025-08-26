import React from 'react'
import { Topbar } from '../Layout/Topbar'
import { Navbar } from './NavBar'


const Header = () => {
  return (
    <header>
        {/*Topbar*/}
        <Topbar />
        {/*navbar*/}
        <Navbar />
        {/*Cart Drawer*/}
    </header>
  )
}

export default Header