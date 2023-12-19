import React from 'react'
import{services} from '../data/dummydata'
const Services = () => {
  return (
    <section className='services'>
        <div className='container grid3'>
            {services.map((item)=>
            
               <div className='box'> 
                     <i className='icon'>{item.icon}</i>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
               </div>
            
            )}

        </div>
      
    </section>
  )
}

export default Services
