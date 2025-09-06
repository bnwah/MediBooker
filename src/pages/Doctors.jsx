import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {

// You can use the speciality parameter to filter or display doctors based on their specialty
// For example, you might fetch doctors from an API based on this speciality
const { speciality } = useParams();

// Access the entire list of doctors from the AppContext
const { doctors } = useContext(AppContext)   

// Filter doctors based on the speciality parameter
const [ filterDoc, setFilterDoc ] = useState([])


const navigate = useNavigate()
    
// If speciality is provided, filter the doctors list
const applyFilter = () => {
    if (speciality) {
        setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
        setFilterDoc(doctors)
    }
}

// Call the applyFilter function when the component mounts or speciality changes
// This ensures that the filter is applied whenever the speciality parameter changes
// Used for updates whenever 'doctors' or 'speciality' changes
useEffect(() => {
    applyFilter()
}, [doctors, speciality])



    
return (
    <div>
      <p className='text-gray-600'>Browse through the doctor specialists</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        
        {/* FILTER MENU DIV*/}
        {/* onClick checks if speciality matches the clicked item and if so that means it's already selected so navigate to all doctors pg
        Otherwise, navigate to the specific speciality page */}
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
            <p onClick={() => speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "General physician" ? "bg-indigo-100 text-black" : ""}`}>General physician</p>
            <p onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""}`}>Gynecologist</p>
            <p onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""}`}>Dermatologist</p>
            <p onClick={() => speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pediatricians" ? "bg-indigo-100 text-black" : ""}`}>Pediatricians</p>
            <p onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""}`}>Neurologist</p>
            <p onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist" ? "bg-indigo-100 text-black" : ""}`}>Gastroenterologist</p>
        </div>

        {/* DOCTOR CARDS DIV */}
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
            {/* Creating the doctor cards dynamically based on the speciality */}
            {
                filterDoc.map((item, index) => (
                <div onClick={ () => navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                    <img className='bg-blue-50' src={item.image} alt="" />

                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p> {/* green dot and "Available" text */}
                        </div>
                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className='text-gray-600 text-sm'>{item.speciality}</p>
                    </div>
                </div>
            ))
            }
        </div>
        
      </div>
    </div>
  )
}

export default Doctors