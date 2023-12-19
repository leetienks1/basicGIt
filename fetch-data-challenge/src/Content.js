import React from 'react'
import UserList from './UserList'
const Content = ({user, setSwitchPage,handleSwitch, switchPage}) => {
  return (
    <>
    <form onSubmit={(e)=>e.preventDefault()} >
        <button type='submit' onClick={handleSwitch('https://jsonplaceholder.typicode.com/users')}>User</button>
        <button type='submit' onClick={handleSwitch('http://localhost:3500/User')}>Post</button>
        <button type='submit' onClick={handleSwitch('https://jsonplaceholder.typicode.com/comments')}>comments</button>

    </form>
        <UserList
        user={user}
         switchPage={switchPage}   
            />
    </>
    
   
  )
}

export default Content