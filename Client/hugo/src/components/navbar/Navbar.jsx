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
           <li>Our Services</li>
           <li>Testimonials</li>
           <li>Contact Us</li>
      </ul>
    </nav>
  )
}

export default Navbar
