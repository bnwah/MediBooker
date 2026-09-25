import express from 'express'
import { addDoctor, allDoctors, loginAdmin } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js'

const adminRouter = express.Router()

// Whenever this endpoint is called, the form data has to send the image
// The middleware will process the image and form data 
adminRouter.post('/add-doctor', authAdmin, upload.single('image'), addDoctor)

// This endpoint is for Admin login
adminRouter.post('/login', loginAdmin)

// This endpoint is for getting all doctors using authAdmin as the middleware that authenticates the admin to access this API endpoint
adminRouter.post('/all-doctors', authAdmin, allDoctors)

export default adminRouter