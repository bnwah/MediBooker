import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
    speciality: { type: String, required: true },
    degree: { type: String, required: true },
    experience: { type: String, required: true },
    about: { type: String, required: true },
    available: { type: Boolean, required: true },
    fee: { type: Number, required: true },
    address: { type: Object, required: true },
    date: { type: Number, required: true },
    slots_booked: { type: Object, default: {} }
}, { minimize: false })                               // minimize false means that we don't want to minimize the data. We want to store all the data in the database. This allows slots_booked empty object to be stored in the database.

// When project is started, this statement gets executed
const doctorModel = mongoose.models.doctor || mongoose.model('doctor', doctorSchema)

export default doctorModel