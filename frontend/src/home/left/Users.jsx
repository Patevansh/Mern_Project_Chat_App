import React from 'react'
import User from './User'
import userGetAllUsers from '../../context/userGetAllUsers';
function Users() {
  const [users] = userGetAllUsers();
    return (
    <div style={{maxHeight:"calc(85vh)"}} className='py-2 flex-aman overflow-y-auto'>
      <User></User>
      <User></User>
      <div>
        
      {
        users.map((user)=>(
          <User key={user._id} user={user}></User>
        ))
      }

      </div>
    </div>
  )
}

export default Users;
