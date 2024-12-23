import React from 'react'
import {Link} from 'react-scroll'
import './Navbar.css'
import logo from '../../assets/logo.png'
const Navbar = () => {





  return (
    <div>
<nav className={`container`}>
<img src={logo} className='logo' alt=''/>
<ul className=''>
<li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>


</ul>
{/* <img src={menu_icon} alt='' className='menu-icon' onClick={toggleMenu} /> */}


</nav>







    </div>
  )
}

export default Navbar