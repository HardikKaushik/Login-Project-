import React, { useState } from 'react';
import vid from "../assets/sign.jpg"
import Avatar from './Avatar';
const SIgnup = () => {
    const [username, setUsername] = useState('john');
    const [isUsernameTaken, setIsUsernameTaken] = useState(true);
    const [showComponent1, setShowComponent1] = useState(false);

  const toggleComponent = () => {
    setShowComponent1(!showComponent1);
  };

    const handleChange = (event) => {
        setUsername(event.target.value);
        // Assuming we have a function to check if the username is taken
        // Replace this with find username logic
        const isTaken = event.target.value
        setIsUsernameTaken(isTaken);
    };
    return (
        <>
         {showComponent1 ? <Avatar /> : 
            <section class="bg-white ">
                <div class="flex justify-center min-h-screen   ">

                    <div class="hidden bg-cover bg-pink-200 lg:block lg:w-1/3"     >
                           
                         <img className='object-fill' src={vid} alt="" />
                    </div>

                    <p class="mt-4 absolute right-0  mx-4 p-4 text-gray-800 ">
                        Already a member?  <span className='text-blue-800'>Sign in</span>
                    </p>

                    <div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                        <div class="w-2/3 h-5/6 mx-auto">
                            <h1 class="text-2xl  font-bold tracking-wider text-gray-800  ">
                                Sign up to Dribbble
                            </h1>

                            {isUsernameTaken &&<p class="mt-4 text-sm text-red-400 ">
                               <li> Username has already been taken</li>
                            </p> }

                            <form >
                                <div class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                                    <div>
                                        <label class="block mb-2 text-sm font-bold  text-gray-600 "> Name</label>
                                        <input type="text" placeholder="John" class="block w-full px-5 mb-8 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-gray-100 border border-gray-200 rounded-lg   focus:border-pink-400  focus:ring-pink-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>

                                    <div>
                                        <label htmlFor="username" className="flex items-center mb-2 text-sm font-bold  text-gray-600">

                                            {isUsernameTaken ?
                                                <svg className='w-4 h-4 mr-2 ' width="45" height="45" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" fill="white" fill-opacity="0.01"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M24 5.00018L2 43.0002H46L24 5.00018Z" fill="red" stroke="#333" stroke-width="1" stroke-linejoin="round"></path><path d="M24 35.0002V36.0002" stroke="#333" stroke-width="1" stroke-linecap="round" fill="red"></path><path d="M24 19.0007L24.0083 29.0002" stroke="#333" stroke-width="1" stroke-linecap="round" fill="red"></path></svg> : " "}
                                            Username
                                        </label>
                                        <input
                                            type="text"
                                            id="username"
                                            value={username}
                                            onChange={handleChange}
                                            className={` ${isUsernameTaken ? 'bg-red-100' : 'bg-gray-100'} block w-full px-5 mb-8 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-gray-100 border border-gray-200 rounded-lg   focus:border-pink-400  focus:ring-pink-400 focus:outline-none focus:ring focus:ring-opacity-40`}
                                        />
                                    </div>

                                </div>

                                <div>

                                    <label class="block mb-2 text-sm text-gray-600 font-bold ">Email</label>
                                    <input type="email" placeholder="johnsnow@example.com" class="block w-full px-5 mb-8 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-gray-100 border border-gray-200 rounded-lg   focus:border-pink-400  focus:ring-pink-400 focus:outline-none focus:ring focus:ring-opacity-40" />

                                    <div>
                                        <label class="block mb-2 text-sm text-gray-600 font-bold ">Password</label>
                                        <input type="password" placeholder="6+ characters" class="block w-full px-5 py-3 mb-2 mt-2 text-gray-700 placeholder-gray-400 bg-gray-100 border border-gray-200 rounded-lg   focus:border-pink-400  focus:ring-pink-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>

                                </div>

                                <div className='flex  items-center '>
                                    <label className="  cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox h-5 w-5 border border-gray-300 rounded cursor-pointer"
                                        />
                                    </label>

                                    <p class="mx-2 mt-6 text-sm text-gray-600 ">
                                        Creating an account means you're okay with our <span className='text-blue-800'>  Terms of
                                            Service, Privacy Policy,</span> and our default <span className='text-blue-800'> Notification
                                                Settings
                                        </span>
                                    </p>
                                </div>

                                <button onClick={toggleComponent}
                                    class="flex items-center justify-center w-1/2 px-6 my-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-pink-500 rounded-lg hover:ring-pink-800 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    <span>Create Account </span>
                                </button>
                            </form>

                            <p class="  text-xs w-3/4 text-gray-500 ">
                                This site is protected by reCAPTCHA and the Google <span className='text-blue-800'>   Privacy Policy,</span>and <span className='text-blue-800'> Terms of Service </span>  apply
                            </p>

                        </div>
                    </div>
                </div>
            </section>}


        </>
    )
}

export default SIgnup

