import React from 'react'
import Feed from './Feed'
const Home = ({items,handleBuy}) => {
  return (
    <main className='home'>
      
      {
        items.length ? <Feed items={items} handleBuy={handleBuy}/> : 'have no items'
      }
        

           
        

      
    </main>
  )
}

export default Home
