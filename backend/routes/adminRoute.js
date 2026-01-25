import express from 'express'
import { addDoctor } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'

const adminRouter = express.Router()

// Whenever this endpoint is called, the form data has to send the image
// The middleware will process the image and form data 
adminRouter.post('/add-doctor', upload.single('image'), addDoctor)

export default adminRouter