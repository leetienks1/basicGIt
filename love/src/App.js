import { useState , useEffect} from "react";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import Page from "./Page";
import {Routes ,Route} from 'react-router-dom'
import api from './api/items'
import Buy from "./Buy";
import NewItem from "./NewItem";

function App() {
  const [search, setSearch] = useState('')
  const [items, setItems]= useState([])
  const [searchResults, setSearchResults]= useState([])
  const [buy , setBuy] = useState([])
  useEffect(()=>
  {
    const fetchItems =async()=>
    {
        try {
          const response = await api.get('/items')
          setItems(response.data)
        } catch (err) {
          if (err.response) {
            // Not in the 200 response range 
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
          } else {
            console.log(`Error: ${err.message}`);
          }
        }
        
    }
    fetchItems()
  },[])

  useEffect(()=>
  {
      const filteredResults = items.filter((post) =>
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()));
      setSearchResults(filteredResults)
  },[items, search ])


  const handleBuy=(id)=>
  {
    const boughtItems = items.filter(item => item.id === id);

    if (boughtItems.length > 0) {
      // Assuming you want to add all matching items to the buy state
      const newItems = boughtItems.map(boughtItem => ({
        id: boughtItem.id,
        title: boughtItem.title,
        body: boughtItem.body,
        price: boughtItem.price
      }));
    
      const newList = [...buy, ...newItems];
      setBuy(newList);
      console.log('success');
      console.log(id);
    } else {
      console.log('No item found with the given id');
    }
  }
  const handleBuy1 = async (id) => {
    const URL = 'http://localhost:3600/items'
    const boughtItems = items.filter((item) => item.id === id);
  
    if (boughtItems.length > 0) {
      // Assuming you want to add all matching items to the buy state
      const newItems = boughtItems.map((boughtItem) => ({
        id: boughtItem.id,
        title: boughtItem.title,
        body: boughtItem.body,
        price: boughtItem.price,
      }));
  
      const itemOps = {
        method: 'POST', // Fix the typo here
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newItems),
      };
  
      try {
        
        // Assuming the API call was successful, update the buy state
        const newList = [...buy, ...newItems];
        setBuy(newList);
  
        console.log('Success');
        console.log(id);
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      console.log('No item found with the given id');
    }
  };
  return (
    <div className="App">
      <Header/>
      <Nav search={search} setSearch={setSearch}/>
      <Routes>
        <Route path="/" element={<Home items ={searchResults} handleBuy={handleBuy}/>}/>
        <Route path="/page/:id" element={<Page/>}/>
        <Route path="/giohang" element={<Buy buy={buy} setBuy={setBuy}/>}/>
        <Route path="/newitem" element={<NewItem posts={items} setPosts={setItems}/>}/>
        <Route path="*" element={<Missing/>}/>
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
