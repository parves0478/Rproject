import React from 'react'
import './About.css'
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';
const About = ({setPlayState}) => {
  return (
    <div className='about'>
<div className="about-left">
<img src={about_img} className='about-img' alt=''/>
<img src={play_icon} className='play-icon' onClick={()=>{setPlayState(true)}} alt=''/>

</div>
<div className="about-right">
    <h3>ABOUT UNIVERSITY</h3>
    <h2>Lorem ipsum dolor sit.</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam, veniam architecto debitis atque eius nemo aliquid optio consectetur perferendis enim deserunt assumenda quae laboriosam nihil iste asperiores quaerat numquam?</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore soluta voluptatum velit repudiandae amet reiciendis temporibus rem exercitationem cum. Totam, alias ipsam!</p>
</div>












    </div>
  )
}

export default About