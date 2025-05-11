/**
 * Navbar Component
 * A responsive navigation bar that includes:
 * - Logo
 * - Main navigation links (Home, Collection, About, Contact)
 * - Search functionality
 * - User profile with dropdown menu
 * - Shopping cart with item count
 * - Mobile menu for small screens
 */

import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    // State to control mobile menu visibility
    const [visible, setVisible] = useState(false);

    // Context values for shop functionality
    const {setShowSearch, getCartCount, navigate, token, setToken, setCartItems} = useContext(ShopContext);

    /**
     * Handles user logout by:
     * - Redirecting to login page
     * - Removing token from localStorage
     * - Clearing token state
     * - Resetting cart items
     */
    const logout = () => {
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
    }

  return (
    // Main navbar container with flex layout
    <div className='flex items-center justify-between py-5 font-medium'>
      
      {/* Logo section - Links to home page */}


      {/* Desktop Navigation Links */}
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        {/* Each NavLink includes a hidden underline that appears on hover */}
        <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>WET WIPES</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
            <p>KITCHEN TOWELS</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
            <p>TOILET ISSUE ROLLS</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
            <p>FACIAL TISSUES</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      {/* Right side icons section */}


        {/* Mobile Sidebar Menu */}


    </div>
  )
}

export default Navbar
