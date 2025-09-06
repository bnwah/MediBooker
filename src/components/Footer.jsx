import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            
              { /* ----- Left Section ----- */}
              <div>
                  <img className='mb-5 w-40' src={assets.logo} alt="" />
                  <p className='w-full md:w-2/3 text-gray-600 leading-6'>MediBooker is a healthcare appointment booking platform where patients can easily find and book appointments with doctors. We also provide telemedicine services for remote consultations for patients in rural areas who may have difficulty accessing healthcare. Never has accessing healthcare been so easy.</p>
              </div>

              { /* ----- Middle Section ----- */}
              <div>
                  <p className='text-xl font-medium mb-5'>COMPANY</p>
                  <ul className='flex flex-col gap-2 text-gray-600'>
                      <li>Home</li>
                      <li>About Us</li>
                      <li>Contact Us</li>
                      <li>Privacy Policy</li>
                  </ul>
              </div>

              { /* ----- Right Section ----- */}
              <div>
                  <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                  <ul className='flex flex-col gap-2 text-gray-600'>
                      <li>+1 (555) 123-4567</li>
                      <li>info@medibooker.com</li>
                      <li>123 MediBooker St, Health City, NC 12345</li>
                      <li>Follow us on social media</li>
                  </ul>
              </div>
        </div>
        

        { /* ----- Copyright Section ----- */ }
        <div>
            <p className='py-5 text-sm text-center'>© 2025 MediBooker. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer