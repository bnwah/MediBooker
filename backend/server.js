import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'

/* 
This file is the entry point of the backend server.
It's responsible for: 1. Starting an Express app, 2. Listening for HTTP requests, 3. Sending responses, 4. Linking the frontend to the backend

*/


// App config
const app = express()           // Create an Express app instance
const port = process.env.PORT || 4000       // Uses an available port or 4000 if none is available
connectDB()
connectCloudinary()

// Middlewares
app.use(express.json())     // Allows app to receive JSON
app.use(cors())         // Allows frontend to connect to backend

// API endpoints
app.use('/api/admin', adminRouter)

// Health check to test if the server is up and running
app.get('/', (req, res)=>{
    res.send('API WORKING')
})

app.listen(port, ()=> console.log("Server Started", port))