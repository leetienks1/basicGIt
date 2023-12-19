import React from 'react';
import {  NavLink,Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({openMenu,setOpenMenu}) => {
  return (
    <nav>
        <Link className='title' to ='/' >Wedsite</Link>
        <div onClick={()=>setOpenMenu(!openMenu)} className='menu'>
                <span></span>
                <span></span>
                <span></span>

            </div>
        <ul className={openMenu?'open':'close'}>
            
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/services">services</NavLink>
            </li>
            <li>
                <NavLink to="/contact">contact</NavLink>
            </li>

        </ul>
    </nav>
  )
}

export default Navbar