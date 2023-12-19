import React from 'react'
import { Link } from 'react-router-dom'
const Nav = ({search,setSearch}) => {
  return (
    <nav className='Nav'>
      <form className='searchForm'onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor='search'>Search</label>
        <input
        id='search'
        type='text'
        placeholder='SearchItem'
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        />
      </form>

      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/giohang'>Giỏ Hàng</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/newitem'>Add item</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
