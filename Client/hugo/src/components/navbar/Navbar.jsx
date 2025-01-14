import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="container">
      <img src={logo} alt="company logo" className="logo" />
      <ul>
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="products-services" smooth={true} duration={500}>
            Products and Services
          </Link>
        </li>
        <li>
          <Link to="news-events" smooth={true} duration={500}>
            News and Events
          </Link>
        </li>
        <li>
          <Link to="careers" smooth={true} duration={500}>
            Careers
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            <button className="btn">Contact Us</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
