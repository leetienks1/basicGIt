import React from 'react'
import Post from './Post'
const Feed = ({items, handleBuy}) => {
  return (

    <>
        {items.map(item => (
            <Post key={item.id} item={item} handleBuy={handleBuy}/>)
        )
        }
    </>
   
  )
  
}

export default Feed
