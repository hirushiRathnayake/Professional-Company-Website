import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt='company logo' className='logo'/>
      <ul>
           <li>Home</li>
           <li>About Us</li>
           <li>Products and Services</li>
           <li>News and Events</li>
           <li>Careers</li>
           <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
