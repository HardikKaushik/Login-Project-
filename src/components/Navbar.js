import React, { useState } from 'react'
import img1 from '../assets/dribbble-black.png'



const Navbar = () => {
    const[isOpen , setisopen] = useState(false)
    const handleopen = ()=>{
        setisopen(!isOpen)
    }
  return (
    <nav x-data="{ isOpen: false }" class="relative bg-white shadow ">
    <div class="container px-6 py-3 mx-auto md:flex">
        <div class="flex items-center justify-between">
            <a href="#">
                <img class="w-auto h-5 sm:h-7" src={img1} alt=""/>
            </a>

        
            <div class="flex lg:hidden">
                <button x-cloak onClick={handleopen} type="button" class="text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600 " aria-label="toggle menu">
                    <svg x-show={isOpen} xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                    </svg>
            
                    <svg x-show={isOpen} xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>

      
        <div  x-cloak class={isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'} class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between">
            <div class="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
                <a href="#" class="px-2.5 py-2 text-gray-700 transition-colors duration-300 font-Dancing-Script transform rounded-lg  hover:bg-gray-100  md:mx-2">Home</a>
                <a href="#" class="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100  md:mx-2">About</a>
                <a href="#" class="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100  md:mx-2">Contact</a>
            </div>

            <div class="relative mt-4 mx-2 md:mt-0">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </span>

                <input type="text" class="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 border rounded-lg   focus:border-pink-400  focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-pink-300" placeholder="Search"/>
            </div>
        </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi mt-1 mx-2 bi-bag-x-fill cursor-pointer" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM6.854 8.146a.5.5 0 1 0-.708.708L7.293 10l-1.147 1.146a.5.5 0 0 0 .708.708L8 10.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 10l1.147-1.146a.5.5 0 0 0-.708-.708L8 9.293 6.854 8.146z" fill="#c7c6c2"></path> </svg>
            <img class="object-cover w-8 h-8 rounded-full mt-1 mx-2 cursor-pointer" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100" alt=""/>
            <button class="px-4 py-2 font-medium mx-1 tracking-wide text-white capitalize transition-colors duration-300 transform bg-pink-500 rounded-lg hover:bg-pink-300 focus:outline-none focus:ring focus:ring-pink-300 focus:ring-opacity-80">
    Upload
</button>
    </div>
</nav>
  )
}

export default Navbar
