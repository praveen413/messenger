import React from 'react';
import './Side.css'
import prof from '../images/burger.jpg'
import {Avatar, IconButton} from '@mui/material'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat  from './SidebarChat';

const SideNav = () => {
  return (
      <div className='left-side'>
      <div className='left-head'>
        {/* <img src={prof} alt='profile' className='profile-image' /> */}
        <Avatar src={prof}/>
        <div className='left-head-r'>
        <IconButton>
            <DonutLargeIcon/>
        </IconButton>
        <IconButton>
            <ChatIcon/>
        </IconButton>
        <IconButton>
            <MoreVertIcon/>
        </IconButton>
          
        </div>
      </div>
      <div className='left-search'>
        <div className='left-search-container'>
          <SearchIcon/>
          <input placeholder='type new chat' type='text' />
        </div>
      </div>
      <div className='chat-rooms'>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
      </div>
  </div>
  )
};

export default SideNav;
