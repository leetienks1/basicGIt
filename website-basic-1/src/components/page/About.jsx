import React from 'react'
import { about } from '../data/dummydata'
import Heading from '../conmon/Heading'
const About = () => {
  return (
    <section className='about'>
     <div className="container flex">
     {about.map((val,i)=>
      (
        <>
            <div className='left'>
                <img src={val.cover} alt=''/>
            </div>
            <div className='right'>
                <Heading title='about me'/>

                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                <button className='primaryBtn'>Download my CV</button>
                <button className='primarybtn'>Download my CV</button>
            </div>

        </>
      )
      )}
     </div>
    </section >
  )
}

export default About
