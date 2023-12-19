import React from 'react'
import { useContext , useState} from 'react'
import DataContext from './context/DataContext'
import api from './api/post'
import { useNavigate } from 'react-router-dom';
import {format} from 'date-fns'
const NewPost = () => {
  const{posts, setPosts, history} = useContext(DataContext)
  const [postTitle, setPostTitle]= useState('')
  const [postBody, setPostBody]= useState('')
  const handleSubmit= async(e)=>
  {
      e.preventDefault()


      const id = posts.length? posts[posts.length-1].id+1 : 1

      const datetime = format(new Date(), 'MMMM dd, yyyy pp');
      const newPost ={id , title: postTitle, body: postBody,datetime }
      try {
        const response = await api.post('posts', newPost)
        const allPost =[...posts , response.data]
        setPosts(allPost)
        setPostTitle('')
        setPostBody('')
        history('/')
      } catch (err) {
        console.log(`err ${err.message}`)
      }

    }
  return (
    <main  className='NewPost'>
      <h2>NewPost</h2>
      <form className='newPostForm' onSubmit={handleSubmit}>
        <label htmlFor='postTitle'>Title</label>
        <input 
          id='postTitle'
          type='text'
          required
          value={postTitle}
          onChange={(e)=>setPostTitle(e.target.value)}
        />

<label htmlFor='postBody'>Body</label>
        <textarea 
          id='postBody'
          type='text'
          required
          value={postBody}
          onChange={(e)=>setPostBody(e.target.value)}
        />

        <button type='submit'>submit</button>
      </form>
    </main>
  )
}

export default NewPost
