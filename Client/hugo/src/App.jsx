import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import AboutUs from './components/About-us/About-us'
import ProductsAndServices from './components/Products/Products'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <ProductsAndServices/>
      
    </div>
  )
}

export default App
