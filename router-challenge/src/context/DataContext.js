// import { useState, useEffect , createContext, Children } from "react";
// 
// import {format} from 'date-fns'
// import api from '../api/post';
// const DataContext = createContext({});

// export const DataProvider = ({Children}) => 
// {

//     const [posts, setPosts] = useState([])

//   const [search, setSearch] = useState('')
//   const [searchResults, setSearchResults]=useState([])

//   useEffect(  () =>
//   { 
//     const fetchPosts =async ()=>
//     {
//       try {
//         const response = await api.get('/posts');
//         setPosts(response.data)
//       } catch (err) {
//         if(err.response)
//         {
//           // response not in 200 range
//           console.log(err.response.data)
//           console.log(err.response.body)
//           console.log(err.response.headers)
//         }else
//         {
//           console.log('error'+ err.message)
//         }
//       }  
//     }
//     fetchPosts();
//   },[])
  
  
//   useEffect(()=>
//   {
//     const filterResults = posts.filter((post) =>
//     ((post.body).toLowerCase()).includes(search.toLowerCase())
//     || (( post.title).toLowerCase()).includes(search.toLowerCase()
//     ))
//     setSearchResults(filterResults)
//   }
//     ,[posts, search])

//     useEffect(() => {
//       const filteredResults = posts.filter((post) =>
//         ((post.body).toLowerCase()).includes(search.toLowerCase())
//         || ((post.title).toLowerCase()).includes(search.toLowerCase()));
  
//       setSearchResults(filteredResults);
//     }, [posts, search])
//   const history = useNavigate();


//   const [postTitle, setPostTitle]= useState('')
//   const [postBody, setPostBody]= useState('')

//   const [editTitle, setEditTitle]= useState('')
//   const [editBody, setEditBody]= useState('')
  

//   const handleEdit = async (id) => {
//     const datetime = format(new Date(), 'MMMM dd, yyyy pp');
//     const updatedPost ={id , title: editTitle, body: editBody };
//     try {
//         const response = await api.put(`posts/${id}`, updatedPost)
//         setPosts(posts.map(post => post.id ===id ? {...response.data}: post))
//         setEditTitle('')
//         setEditBody('')
//         history('/')
//     } catch (err) {
//       console.log(`err ${err.message}`)
//     }
//   }


//   const handleDelete=(id)=>{
//       try {
//           api.delete(`/posts/${id}`)
//           const listPosts = posts.filter(post=>post.id !== id)
//       setPosts(listPosts)
//       history('/')
//       } catch (err) {
//         console.log(`err ${err.message}`)
//       }
//   }

//   const handleSubmit= async(e)=>
//   {
//       e.preventDefault()


//       const id = posts.length? posts[posts.length-1].id+1 : 1

//       const datetime = format(new Date(), 'MMMM dd, yyyy pp');
//       const newPost ={id , title: postTitle, body: postBody }
//       try {
//         const response = await api.post('posts', newPost)
//         const allPost =[...posts , response.data]
//         setPosts(allPost)
//         setPostTitle('')
//         setPostBody('')
//         history('/')
//       } catch (err) {
//         console.log(`err ${err.message}`)
//       }

//     }
//     return(
//         <DataContext.Provider value={{
//             search, setSearch, searchResults, handleSubmit,postTitle,setPostTitle,postBody,setPostBody,posts,
//             handleEdit,
//             editTitle,
//             setEditTitle,
//             editBody,
//             setEditBody,
//             handleDelete
//         }}>
//             {Children}
//             </DataContext.Provider> 
//     )
// }
// export default DataContext;
import { useState, useEffect , createContext } from "react";
import { useNavigate } from 'react-router-dom';
import {format} from 'date-fns'
import api from '../api/post';
const DataContext = createContext({});
export const DataProvider = ({ children }) => {
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    

  useEffect(  () =>
  { 
    const fetchPosts =async ()=>
    {
      try {
        const response = await api.get('/posts');
        setPosts(response.data)
      } catch (err) {
        if(err.response)
        {
          // response not in 200 range
          console.log(err.response.data)
          console.log(err.response.body)
          console.log(err.response.headers)
        }else
        {
          console.log('error'+ err.message)
        }
      }  
    }
    fetchPosts();
  },[])
  
  
  useEffect(()=>
  {
    const filterResults = posts.filter((post) =>
    ((post.body).toLowerCase()).includes(search.toLowerCase())
    || (( post.title).toLowerCase()).includes(search.toLowerCase()
    ))
    setSearchResults(filterResults)
  }
    ,[posts, search])

    useEffect(() => {
      const filteredResults = posts.filter((post) =>
        ((post.body).toLowerCase()).includes(search.toLowerCase())
        || ((post.title).toLowerCase()).includes(search.toLowerCase()));
  
      setSearchResults(filteredResults);
    }, [posts, search])
  const history = useNavigate();


  

  


  

  
   

    return (
        <DataContext.Provider value={{
            search, setSearch,
            searchResults, 
            posts, setPosts,history
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;