import { AttachFile, InsertEmoticon, Mic, SearchOutlined } from '@mui/icons-material';
import MoreVert from '@mui/icons-material/MoreVert';
import { Avatar } from '@mui/material';
import React, {  useState } from 'react';
import './Chat.css'
import axios from 'axios';

const url = 'http://localhost:10000/messenger/post/'

const Chat = ({messages}) => {
 
  const [typed,setTyped] = useState('')

  async function submitChat(e){
    e.preventDefault()
    await axios.post(url,{
      message:typed,
      received:true
    })

    setTyped('')
  }
  
  return <div className='chat-section'>
      <div className='chat-header'>
        <Avatar/>
        <div className='chat-info'>
          <h3>who</h3>
          <p>last seen ... 10.30</p>
        </div>
        <div className='chat-header-option'>
          <SearchOutlined/>
          <AttachFile/>
          <MoreVert/>
        </div>
      </div>
      <div className='chat-body'>

      {messages.map((mess)=>(
        <p className={`chat-recieve ${mess.received && 'chat-send'}`} key={mess._id}>
          <span className='chat-name'></span>
          {mess.message}
          <span className='chat-time'>{mess.time}</span>
        </p>

      ))}
      </div>

      <div className='send-message'>
        <InsertEmoticon/>
        <form>
          <input value={typed} onChange={e=>setTyped(e.target.value)} placeholder='type here ...'/>
          <button type='submit' onClick={submitChat}>
            submit
          </button>
        </form>
        <Mic/>
      </div>

  </div>;
};

export default Chat;
