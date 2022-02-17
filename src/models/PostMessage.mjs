import mongoose from 'mongoose'

const MessageSchema = new mongoose.Schema({
    message:{
        type:String,
        required:true
    },
    time:{
        type:Date,
        default:Date.now()
    },
    received:{
        type:Boolean
    }
})

const MessageS = mongoose.model('messageschema',MessageSchema)

export default MessageS