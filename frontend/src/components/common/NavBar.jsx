import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineUser, HiOutlineShoppingCart, HiBars3, HiBars3BottomRight} from "react-icons/hi2";


const NavBar = () => {
  return (
    <>
    <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        {/*Logo - top left*/}
        <div>
            <Link to="/" className="text-2xl font-medium">
                Dc Drip
            </ Link>
        </div>
        {/*Search bar - top center*/}
                <div className="hidden md:flex space-x-6">
                <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                    Men
                </Link>
                <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                    Women
                </Link>
                <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                    Top wear
                </Link>
                <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                    Bottom wear
                </Link>
            </div>
        {/*Icons - top right*/}
        <div className='flex items-center space-x-4'>
            <Link to="/profile" className="hover:text-black">
                <HiOutlineUser className="h-6 w-6 text-gray-700"></HiOutlineUser>
            </Link>
            <Link to="#" className="text-gray-700 hover:text-black">
                <HiOutlineUser className="h-6 w-6 text-gray-700"></HiOutlineUser>
            </Link>
            <button className='relative hover:text-black '>
                <HiOutlineShoppingCart className="h-6 w-6 text-gray-700"></HiOutlineShoppingCart>
                <span className='absolute -top-2 -right-2 bg-district-blue text-white text-xs w-4 h-4 flex items-center justify-center rounded-full'>0</span>
            </button>
            <Link to="#" className="text-gray-700 hover:text-black">
                <HiBars3 className="h-6 w-6 text-gray-700"></HiBars3>
            </Link>

            {/* search */}
            <div className='hidden md:block'>
                <input type="text" placeholder="Search" className="border border-gray-300 rounded-md py-2 px-4" />
                <button>
                    <HiBars3BottomRight className="h-6 w-6 text-gray-700"></HiBars3BottomRight>
                </button>
            </div>
        </div>
        </nav>
    </>
  )
}

export default NavBar