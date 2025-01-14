import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import AboutUs from './components/About-us/About-us'
import ProductsAndServices from './components/Products/Products'
import NewsAndEvents from './components/News/News'
import Career from './components/Careers/Careers'
import ContactUs from './components/Contact-form/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <ProductsAndServices/>
      <NewsAndEvents/>
      <Career/>
      <ContactUs/>
    </div>
  )
}

export default App
