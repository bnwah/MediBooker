import { createContext, useState } from "react";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {

    const [adminToken, setAToken] = useState('')

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const value = {
        // Define any state or functions you want to provide to the context
        adminToken, setAToken,
        backendUrl,
    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider