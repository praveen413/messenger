import './App.css';
import SideNav from './components/Sidenav';
import Chat from './components/Chat';
import axios from 'axios'
import Pusher from 'pusher-js'
import { useEffect, useState } from 'react';


const url = "http://localhost:10000/messenger/show"

function App() {

  const [msgs,setMsgs] = useState([])

  useEffect(()=>{
     axios.get(url).then((pro)=>{
      console.log(pro.data);
      setMsgs(pro.data)
    })
  },[])

    useEffect(()=>{
    
      var pusher = new Pusher('057ef46644a8f7de9497', {
        cluster: 'ap2'
      });

      var channel = pusher.subscribe('message');
      channel.bind('inserted', function(data) {
          setMsgs([...msgs,data])
        });

        return ()=>{
          channel.unbind_all()
          channel.unsubscribe()
        }

    },[msgs])

    console.log(msgs)
    
  return (
    <div className="app">
      <div className='app-body'>
        <SideNav/>
        <Chat messages={msgs}/>
      </div>  
    </div>
  );
}

export default App;
