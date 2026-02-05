import validator from 'validator'
import bcrypt from 'bcrypt'
import { v2 as cloudinary } from 'cloudinary'
import doctorModel from '../models/doctorModel.js'

// API for adding doctor
const addDoctor = async (req, res) => {

    try {

        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body
        const imageFile = req.file

        console.log({name, email, password, speciality, degree, experience, about, fees, address}, imageFile)

        // Sending response back to Postman (frontend) so that it doesn't hang/wait forever to get a response back
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.json({
                success: false,
                message: 'Missing fields'
            })
        }

        // Validating email formaat
        if (!validator.isEmail(email)) {
            return res.json({
                success: false,
                message: 'Invalid email. Enter a valid email'
            })
        }

        // Validating strong password
        if (password.length < 8) {
            return res.json({
                success: false,
                message: 'Emter a strong password'
            })
        }

        // Hashing doctor password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // Upload image to Cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type: "image"})
        const imageUrl = imageUpload.secure_url         // URL of the uploaded image, Cloudinary URL

        const doctorData = {
            name,
            email,
            image: imageUrl,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address: JSON.parse(address),
            date: Date.now()
        }

        const newDoctor = new doctorModel(doctorData)   // Creating new doctor object with doctor data
        await newDoctor.save()          // Saving doctor data to database

        res.json({
            success: true,
            message: 'Doctor added successfully'
        })

    } catch (error) {
        console.log(error)

        res.json({
            success: false,
            message: error.message
        })
    }
}

export { addDoctor }