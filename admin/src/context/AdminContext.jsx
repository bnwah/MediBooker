import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export const AdminContext = createContext();

const AdminContextProvider = (props) => {

    const [adminToken, setAToken] = useState(localStorage.getItem('adminToken')? localStorage.getItem('adminToken') : '')
    const [doctors, setDoctors] = useState([])

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    
    // This function gets all doctors
    const getAllDoctors = async () => {
        try {
            const { data } = await axios.post(backendUrl + '/api/admin/all-doctors', {}, {headers: {adminToken}})
            if (data.success) {
                setDoctors(data.doctors)
                console.log(data.doctors)
                
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const changeAvailability = async (docId) => {
        try {

            const { data } = await axios.post(backendUrl + '/api/admin/change-availability', {docId}, {headers: {adminToken}})
            if (data.success) {
                toast.success(data.message)
                getAllDoctors()
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    const value = {
        // Define any state or functions you want to provide to the context which will be shared across components
        // The point of the context is to provide a global store for certain values that can be accessed by any component in the app
        adminToken, setAToken,
        backendUrl, doctors, 
        getAllDoctors, changeAvailability
    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider