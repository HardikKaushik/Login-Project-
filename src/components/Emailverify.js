import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Emailverify = () => {
  return (
    <>
    <Navbar/>
    <div class="container px-6 py-12 mx-auto">
      <div class="text-center mt-4 mx-auto">
        <h2 class="text-3xl mb-2 font-semibold text-gray-800 ">Please verify your email...</h2>
        <div className='flex mb-2 justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="IconChangeColor" height="80" width="80"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" id="mainIconPathAttribute" fill="gray" stroke-width="0.4" stroke="#ff0000"></path></svg>
        </div>
        <p class="max-w-lg mx-auto mt-2 text-sm text-gray-500 mb-4 ">Please verify your email address. We've sent a confirmation email to:</p>
        <p class="max-w-md mx-auto mt-2 text-md font-bold text-gray-800 mb-4 ">account@refero.design</p>
        <p class="max-w-lg mx-auto mt-2 text-sm text-gray-500 mb-4">Click the confirmation link in that email to begin using Dribbble.</p>
        <p class="max-w-xl mx-auto mt-2 text-sm text-gray-500 mb-4 ">Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If
          you still don't see it, you can <span className='text-pink-500'> resend the confirmation email.</span></p>
        <p class="max-w-lg mx-auto mt-2 text-sm text-gray-500 ">Wrong email address? <span className='text-pink-500'>Change it.</span></p>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Emailverify
