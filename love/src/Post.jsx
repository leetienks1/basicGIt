import React from 'react'

const Post = ({item,handleBuy}) => {


  
  return (
    <article className='post'>
      <h2>
        
        {(item.title).length<=10 ? item.title: `${(item.title).slice(0,10)}...`}
      </h2>
      <p className='body'>
        {(item.body)}
      </p>
      <p className='price'>
        Giá : {item.price}
      </p>
      <button type='submit' onClick={()=>handleBuy(item.id)}>Buy</button>
    </article>
  )
}

export default Post
