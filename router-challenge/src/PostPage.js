import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useContext } from 'react'
import DataContext from './context/DataContext'
import api from './api/post'
const PostPage = () => {
  const{posts, setPosts, history} = useContext(DataContext)
  const handleDelete=(id)=>{
    try {
        api.delete(`/posts/${id}`)
        const listPosts = posts.filter(post=>post.id !== id)
    setPosts(listPosts)
    history('/')
    } catch (err) {
      console.log(`err ${err.message}`)
    }
}
  // useParams sẽ trả về 1 đối tượng và ở đây ta đang trích xuất 
  //id từ đối tượng đó ví dụ như có /somePath/123(là id) thì có sẽ gán vào biến id là 123 
  const {id} = useParams()
  const post = posts.find(post=>post.id.toString() == id)
  return (
    <main className='PostPage'> 
      <article className='post'>
        {post && 
        
        <>
          <h1>{post.title}</h1>
          <p className='postDate'>{post.datetime}</p>
          <p className='postBody'> {post.body}</p>
          <button onClick={()=>handleDelete(post.id)}>deletePost</button>
          <Link to ={`/edit/${post.id}`} ><button className='editPost'>edit post</button></Link>
        </>
        }
        {!post &&
                    <>
                        <h2>Post Not Found</h2>
                        <p>Well, that's disappointing.</p>
                        <p>
                            <Link to='/'>Visit Our Homepage</Link>
                        </p>
                    </>
                }
      </article>
    </main>
  )
}

export default PostPage
