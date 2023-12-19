import React from 'react'
import {BrowserRouter , Routes, Route , Link} from 'react-router-dom'
import Home from '../home/Home'
import Header from '../conmon/Header'
import About from './About'
import Services from './Services'
const Page = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/service' element={<Services/>}/>
          </Routes>

      </BrowserRouter>
    </>
  )
}

export default Page
