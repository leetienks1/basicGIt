import React from 'react'
import {useState} from 'react'
import api from './api/items'
import { useNavigate } from 'react-router-dom'
const NewItem = ({posts, setPosts}) => {
    const history= useNavigate()
    const [titleItem, setTitleItem] = useState('')
    const [bodyItem, setBodyItem] = useState('')
    const [priceItem, setPriceItem] = useState('')

    const hanleSubmit = async(e)=>
    {
        e.preventDefault()
        const id = posts.length ? posts[posts.length-1].id +1 : 1;
        const newItem = {id , title: titleItem, body: bodyItem, price: priceItem}
        try {
            const response = await api.post('/items', newItem)
            const allPost = [...posts, response.data]

            setPosts(allPost)
            setTitleItem('')
            setBodyItem('')
            setPriceItem('')
            history('/')
        } catch (error) {
            console.log(error.message)
        }

    }

  return (
    <article className='newItem'>
      <form className='addForm' onSubmit={hanleSubmit}>
        <h2>ADD ITEM</h2>
        <input className='titleInput' type='text' placeholder='Enter title' value={titleItem} onChange={(e)=>setTitleItem(e.target.value)}/>
        <textarea className='titleBody' type='text' placeholder='Enter body' value={bodyItem} onChange={(e)=>setBodyItem(e.target.value)}/>
        <input className='titlePrice' type='text' placeholder='Enter Price'value={priceItem} onChange={(e)=>setPriceItem(e.target.value)}/>

        <button type='submit' >Add Item</button>
      </form>
    </article>
  )
}

export default NewItem
