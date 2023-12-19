import React from 'react'
import lineItem from './lineItem'
const UserList = ({user, switchPage}) => {
    if (!Array.isArray(user)) {
        // Xử lý trường hợp khi user không phải là mảng
        return <p>Dữ liệu không hợp lệ</p>;
      }
  return (
    <ul>
        {
            (user.map((user)=>
            <li className='user' key={user.id}>
                {JSON.stringify(user)}
                
            </li>
                
               
            
            
            ))}

           
    <div>{'"'} {switchPage}{'"'}</div>
    
    </ul>
    
  )
}

export default UserList