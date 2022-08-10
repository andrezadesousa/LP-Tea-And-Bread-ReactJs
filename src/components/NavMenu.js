/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'


const NavMenu = () => {
  return (
    <div className='nav__menu' id='nav-menu'>
        <ul className='nav__list'>
            <li className='nav__item'>
                <a href='#home' className='nav__link active-link'>Home</a>
            </li>
            <li className='nav__item'>
                <a href='#products' className='nav__link'>Products</a>
            </li>
            <li className='nav__item'>
                <a href='#premium' className='nav__link'>Premium</a>
            </li>
            <li className='nav__item'>
                <a href='#about' className='nav__link'>About Us</a>
            </li>
        </ul>

        <div className='nav__close' id='nav-close'>
            <i><AiOutlineClose></AiOutlineClose></i>
        </div>
    </div>
  )
}

export default NavMenu