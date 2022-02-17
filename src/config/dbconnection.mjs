import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export function DbConnection(){
    mongoose.connect(process.env.DBCONN,
        {useNewUrlParser: true,
        useUnifiedTopology: true,
        }
    ).then((con)=>{
        console.log('db connected');
    }).catch(err=>{
        console.log('db connection error',err.message);
    })

    mongoose.connection.on('connected',()=>{
        console.log('mongodb connected');
    })
    mongoose.connection.on('err',(err)=>{
        console.log('error',err.message);
    })
    mongoose.connection.on('disconnected',()=>{
        console.log('mongodb disconnected');
    })
    process.on('SIGINT',()=>{
        mongoose.connection.close(()=>{
            console.log('mongoose connection closed due to app termination');
            process.exit(0)
        })
    })
}              