import React from 'react'
import Layout from '../../Components/Layout/layout'
import Filter from '../../Components/filter/Filter'
import HeroSection from '../../Components/heroSection/HeroSection'
import ProductCard from '../../Components/productCard/ProductCard'
import Testimonial from '../../Components/testimonial/Testimonial'
import Track from '../../Components/track/Track'


const Home = () => {


  return (
   <Layout>
        <HeroSection/>
        <Filter/>
        <ProductCard/>
        <Track/> 
        <Testimonial/>
         
   </Layout>
  )
}

export default Home;
