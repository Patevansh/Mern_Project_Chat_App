import React from 'react'
import User from './User'
function Users() {
  return (
    <div style={{maxHeight:"calc(85vh)"}} className='py-2 flex-aman overflow-y-auto'>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
    </div>
  )
}

export default Users
