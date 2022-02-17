import MessageS from '../models/PostMessage.mjs'
import Pusher from 'pusher'
import mongoose from 'mongoose'

const pusher = new Pusher({
    appId: "1348973",
    key: "057ef46644a8f7de9497",
    secret: "68fb430892de4e84d57c",
    cluster: "ap2",
    useTLS: true
  });

  const Db = mongoose.connection

  Db.once('open',()=>{
      console.log('connection established');
      const mongocol = Db.collection('messageschemas')
      const mongoStream = mongocol.watch()

      mongoStream.on("change",(change)=>{
          
          if(change.operationType == "insert"){
              const messageDetails = change.fullDocument
              pusher.trigger("message","inserted",{
                  message:messageDetails.message,
                  time:messageDetails.time,
                  received:messageDetails.received
              })
          }
          else{
              console.log('error ');
          }
      })
  })

export const Sample=(req,res)=>{
    res.status(200).send('hello sample')
}

export const PostMsg = async(req,res) =>{
    const msg = req.body

    await MessageS.create(msg,(err,post)=>{
        if (err) throw err
        console.log('message posted');
        res.status(201).json(post)
    })

}

export const ShowPost = async(req,res)=>{
    await MessageS.find({}).then((found)=>{
        res.status(200).json(found)
    }).catch(err=>{
        console.log('something went wrong ',err.message);
    })
}