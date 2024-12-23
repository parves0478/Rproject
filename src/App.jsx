import React, { useState } from 'react'
import Navbar from './comp/Navbar/Navbar'
import Hero from './comp/Hero/Hero'
import Title from './comp/Title/Title'
import Programs from './comp/programs/Programs'
import Testimonials from './comp/Testimonials/Testimonials'
import About from './comp/about/About'
import Campus from './comp/campus/Campus'
import Footer from './comp/footer/Footer'
import Video from './comp/video/Video'
import Contact from './comp/Conatact/Contact'
const App = () => {

  const [playState,setPlayState]=useState(false);



  return (
    <div>
<Navbar/>
<Hero/>
<div className="container">
  <Title subTitle='Our Program' title='what we offer'/>
  <Programs/>
  <About setPlayState={setPlayState}/>
  <Title subTitle='Gallery' title='campus photos'/>
  <Campus/>
  <Title subTitle='TESTIMONIALS' title='what we offer'/>
 <Testimonials/>
 <Title subTitle='Contact us' title='Greate Coder'/>
<Contact/>
 <Footer/>



</div>
<Video playStore={playState} setPlayState={setPlayState}/>




    </div>
  )
}

export default App