import React from 'react';
import {Link} from 'react-scroll';
import logo from '../images/logo1.png';


function Navbar() {
    
  return (
    <nav className= "nav active">
       <Link to='main' className='logo'>
         <img src={logo} alt=""/>
       </Link>
       <input className='menu-btn' type="checkbox" id="menu-btn"/>
       <label className='menu-icon' for='menu-btn'>
        <span className='nav-icon'> </span>
       </label>
       <ul className='menu'>
          <li><Link to='main'>Home</Link></li>
          <li><Link to='main'>Vegetarianos</Link></li>
          <li><Link to='products'>Platos principales</Link></li>
          <li><Link to='about'>Tortas</Link></li>
          <li><Link to='contact'>Comida Rapida</Link></li>
          <li><Link to='contact'>Menu Niños</Link></li>
          <li><Link to='contact'>Sopas</Link></li>
       </ul>
    </nav>
  )
}

export default Navbar