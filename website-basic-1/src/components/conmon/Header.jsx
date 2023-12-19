import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { navlink } from '../data/dummydata'
import logo from '../data/logo/logo.png'
import{Menu} from '@mui/icons-material'
const Header = () => {
    const[responsive, setResponsive]=useState(false)
  return (
    
    <>
    
      <header>
        <div className="container flexsb">
            <div className='logo'>
                <img src={logo} alt=''/>
            </div>
            <div className={responsive ? 'hideMenu': 'nav'}>
                {navlink.map((nav,i)=>
                
                    <Link to = {nav.url} key={i}>
                        {nav.text}
                    </Link>
                )}

            </div>
            <button className='toggle' onClick={()=>setResponsive(!responsive)}> <Menu className='icon'/></button>
        </div>
      </header>
    </>
  )
}

export default Header
