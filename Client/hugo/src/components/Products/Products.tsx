import React from 'react';
import { FaCode, FaCloud, FaShieldAlt, FaTools, FaLightbulb } from 'react-icons/fa'; // Import icons
import './Products.css';

const ProductsAndServices = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Custom Software Development",
      description: "Build scalable and efficient software solutions tailored to your specific business requirements."
    },
    {
      icon: <FaLightbulb />,
      title: "IT Consulting",
      description: "Leverage our expertise to create IT strategies that drive your business forward."
    },
    {
      icon: <FaCloud />,
      title: "Cloud Solutions",
      description: "Seamlessly migrate and manage your business operations on the cloud."
    },
    {
      icon: <FaTools />,
      title: "Support and Maintenance",
      description: "Ensure the smooth operation of your IT infrastructure with our ongoing support and maintenance."
    },
    {
      icon: <FaShieldAlt />,
      title: "Cybersecurity Services",
      description: "Protect your business with top-notch cybersecurity solutions."
    },
  ];

  return (
    <div className="products-services">
      <h2>Our Products and Services</h2>
      <p>
        Explore our range of products and services designed to meet your business needs:
      </p>
      <div className="services-carousel">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsAndServices;
