import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import AboutUs from './components/About-us/About-us'
import ProductsAndServices from './components/Products/Products'
import NewsAndEvents from './components/News/News'
import Career from './components/Careers/Careers'
import ContactUs from './components/Contact-form/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <Hero/> */}
      {/* <AboutUs/> */}
      {/* <ProductsAndServices/> */}
      {/* <NewsAndEvents/> */}
      {/* <Career/> */}
      {/* <ContactUs/> */}
     
      <div id="home">
  <Hero />
</div>
<div id="about">
  <AboutUs />
</div>
<div id="products-services">
  <ProductsAndServices />
</div>
<div id="news-events">
  <NewsAndEvents />
</div>
<div id="careers">
  <Career />
</div>
<div id="contact">
  <ContactUs />
</div>
<Footer/>
    </div>
  )
}

export default App
