import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedDoctors from '../components/RelatedDoctors'

const Appointment = () => {

    const { docId } = useParams()

    const { doctors, currencySymbol } = useContext(AppContext)

    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

    const [docInfo, setDocInfo] = useState(null)

    const [docSlot, setDocSlots] = useState([])
    const [slotIndex, setSlotIndex] = useState(0)
    const [slotTime, setSlotTime] = useState('')

    const fetchDocInfo = async () => {
        const docInfo = doctors.find(doc => doc._id === docId)
        setDocInfo(docInfo)
    }

    // Function to fetch available slots for the doctor
    // When doc info gets changed, this fn is executed
    const getAvailableSlots = async () => {
        setDocSlots([])

        // Getting current date
        let today = new Date()

        for (let i = 0; i < 7; i++) {
            // Getting date with index
            let currentDate = new Date(today)
            currentDate.setDate(today.getDate() + i)

            // Setting end time of the date with index
            let endTime = new Date()
            endTime.setDate(today.getDate() + i)
            endTime.setHours(21, 0, 0, 0) // 9 PM

            // Setting hours and minutes for the current date
            if (today.getDate() === currentDate.getDate()) {
                // Today
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10) // If today, set to 11 AM, else set to 10 AM
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0) // If today, set to 30 minutes, else set to 0 minutes
            } else { // If not today, set to 10 AM
                currentDate.setHours(10)
                currentDate.setMinutes(0)
            }

            // Generating time slots for the current date
            // Each slot is 30 minutes apart
            let timeSlots = []

            while (currentDate < endTime) {
                // Format the time to HH:MM AM/PM Ex. 10:30 AM
                let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'})

                // Add slot to timeSlots array
                timeSlots.push({
                    datetime: new Date(currentDate),
                    time: formattedTime
                })

                // Increment current time by 30 minutes
                currentDate.setMinutes(currentDate.getMinutes() + 30)

            }

            // Add the time slots for the current date to the docSlot state
            // Each date will have its own array of time slots
            setDocSlots(prev => ([...prev, timeSlots]))
        }
    }

    // Fetch doctor info when the component mounts or when docId changes
    // Anytime doctors or docId changes, this will be run
    useEffect(() => {
        fetchDocInfo()
    }, [doctors, docId])


    useEffect(() => {
        getAvailableSlots()
    }, [docInfo])

    useEffect(() => {
        console.log(docSlot)
    }, [docSlot])

    // If docInfo is present, show the doctor's details which is the div below
    return docInfo && (
        <div>
            {/*------------ Doctor Details ------------  */}
            <div className='flex flex-col sm:flex-row gap-4'>
                <div>
                    <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
                </div>

                <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
                    {/* --------- Doctor's name, degree, experience --------- */}
                    <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
                        {docInfo.name}
                        <img className='w-5' src={assets.verified_icon} alt="" />
                    </p>

                    <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
                        <p>{docInfo.degree} - {docInfo.speciality}</p>
                        <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
                    </div>

                    {/* --------- Doctor's About --------- */}
                    <div>
                        <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
                            About <img src={assets.info_icon} alt="" /></p>
                        <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
                    </div>

                    <p className='text-gray-500 font-medium mt-4'>
                        Appointment fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span></p>

                </div>
            </div>
            {/*------------ Doctor's Available Slots ------------  */}
            <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
                <p>Booking Slots</p>
                <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
                    {
                        docSlot.length && docSlot.map((item, index) => (
                            <div onClick={() => setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`} key={index}>
                                {/* Displaying the weekday name and day of the week */}
                                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                                <p>{item[0] && item[0].datetime.getDate()}</p>
                            </div>
                        ))
                    }
                </div>

                {/* Displaying the time slots for the selected day */}
                <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
                    {docSlot.length && docSlot[slotIndex].map((item, index) => (
                        <p onClick={() => setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`} key = {index}>
                            {item.time.toLowerCase()}
                        </p>
                    ))}
                </div>

                <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book an appointment</button>

            </div>

            {/*------------ Listing Related Doctors ------------  */}
            <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
        </div>
    )
}

export default Appointment