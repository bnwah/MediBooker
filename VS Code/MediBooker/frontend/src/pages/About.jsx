import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
    return (
        <div>
            <div className='text-center text-2xl pt-10 text-gray-500'>
                <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
            </div>

            {/* About Section */}
            <div className='my-10 flex flex-col md:flex-row gap-12'>
                
                {/* About Image Section (Left Side of Page) */}
                <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
                
                {/* About Information Section (Right Side of Page) */}
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
                    <p>Welcome To MediBooker, Your Trusted Partner In Managing Your Healthcare Needs Conveniently And Efficiently.
                        At MediBooker, We Understand The Challenges Individuals Face When It Comes To Scheduling Doctor
                        Appointments And Managing Their Health Records.</p>
                    <p>MediBooker Is Committed To Excellence In Healthcare Technology. We Continuously Strive To Enhance Our
                        Platform, Integrating The Latest Advancements To Improve User Experience And Deliver Superior Service.
                        Whether You're Booking Your First Appointment Or Managing Ongoing Care, MediBooker Is Here To Support You
                        Every Step Of The Way.</p>
                    <b className='text-gray-800'>Our Vision</b>
                    <p>Our Vision At MediBooker Is To Create A Seamless Healthcare Experience For Every User. We Aim To Bridge The
                        Gap Between Patients And Healthcare Providers, Making It Easier For You To Access The Care You Need, When
                        You Need It.</p>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className='text-xl my-4'>
                <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span> </p>
            </div>

            {  /* Why Choose Us Section Proper */}
            <div className='flex flex-col md:flex-row mb-20'>
                <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
                    <b>Efficiency:</b>
                    <p>Streamlined appointment scheduling and management, saving you time and reducing hassle.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
                    <b>Convenience:</b>
                    <p>We offer a streamlined booking process, allowing you to schedule appointments with ease and access your health records anytime, anywhere.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
                    <b>Accessibility:</b>
                    <p>We prioritize accessibility, ensuring that our platform is user-friendly and inclusive for all patients,
                        regardless of their technical expertise.</p>
                </div>
            </div>
        </div>
    )
}

export default About