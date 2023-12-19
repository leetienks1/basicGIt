import { useState, useEffect } from "react";
import Content from "./Content";


function App() {
  const[switchPage, setSwitchPage]= useState('https://jsonplaceholder.typicode.com/users')
  const [user, setUsers] = useState([])
  const API_URL = switchPage
  
  const handleSwitch = (url='') => () => {
    setSwitchPage('');
    setSwitchPage(url);
  };
  useEffect (()=>
  {
    const fetchItems =async()=>
    {
      try {
        const response = await fetch(API_URL)
        if(!response.ok) throw Error('did not load expected resourse')
        const myListUsers = await response.json();
        console.log('start')
        setUsers(myListUsers)
      } catch (err) {
        throw err.message
      }
    }
    (async()=> await fetchItems())()
  },[switchPage])
  return (
    <main>
      <Content
      user={user}
      handleSwitch={handleSwitch}
      switchPage={switchPage}
      />

    </main>
  );
}

export default App;
