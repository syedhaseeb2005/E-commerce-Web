import React from 'react'
import './Home.css'
import Navbar from '../../Component/Navbar/Navbar'
import Announcement from '../../Component/Announcement/Announcement'
import Slider from '../../Component/Slider/Slider'
import Categories from '../../Component/Categories/Categories'
import Products from '../../Component/Products/Products'
import NewsLetter from '../../Component/NewsLetter/NewsLetter'
import Footer from '../../Component/Footer/Footer'

function Home() {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default Home
