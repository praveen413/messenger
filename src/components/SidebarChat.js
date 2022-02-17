import { Avatar } from '@mui/material'
import React from 'react'
import './SideChat.css'
 
const SidebarChat = () => {
  return (
    <div className='chat-room-info'>
        <Avatar/>
        <div className='person-info'>
            <h2>name</h2>
            <p>last message</p>
        </div>
    </div>
  )
}

export default SidebarChat