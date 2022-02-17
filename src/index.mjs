import express from 'express'
import cors from 'cors'
import router from './routes/sample.mjs'
import { DbConnection } from './config/dbconnection.mjs'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/messenger/',router)

const PORT = process.env.PORT || 5000

function start(){
    try{
        DbConnection()
        app.listen(PORT,()=>{
            console.log(`backend is listening on port ${PORT}`)
        })
    }catch{
        console.log('something went wrong');
    }
}

start()