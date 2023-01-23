import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './mongodb/connect.js'
import postRoute from './routes/postRoutes.js'
import pexelRoute from './routes/pexelRoutes.js'
import lexiaRoute from './routes/lexiaRoute.js'



dotenv.config();
const PORT = process.env.PORT || 8080;


const app = express();
app.use(cors())
app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json({limit : '50mb'}));

app.use('/api/v1/post', postRoute);
app.use('/api/v1/pexel', pexelRoute);
app.use('/api/v1/lexia', lexiaRoute);

app.get('/', async(req,res)=>{
    res.send("Hello From Pexel AI")
})


const startServer = async()=>{
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(PORT, ()=>{
            console.log(`Running Up The Hill At ${PORT}km/hr`)
        })
    } catch (error) {
        console.log(`Connection failed with ${error}`)
    }
    
}
startServer()
