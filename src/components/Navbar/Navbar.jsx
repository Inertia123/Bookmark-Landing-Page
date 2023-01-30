import React from 'react'
import "./Navbar.scss"
export const Navbar = () => {
  return (
    <div className='nav'>
        <div className='logo'>
            <img src="./images/logo-bookmark.svg" alt="logo" />
        </div>
        <div className='links'>
            <ul>
                <li>
                    <a href="#">Features</a>
                </li>
                <li>
                    <a href="#">Pricing</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
                <li>
                    <a href="#">Login</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar