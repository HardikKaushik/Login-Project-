import React from 'react'
import img1 from '../assets/dribbble-pink.png'
const Footer = () => {
  return (
    <footer class="bg-gray-100 ">
    <div class="container px-12 py-12 mx-auto">
        

        <div class="grid grid-cols-2 gap-6 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            <div>
            <a href="#">
                <img class="w-auto h-2 sm:h-7" src={img1} alt=""/>
            </a>

                <div class="flex flex-col items-start mt-4  mb-4 text-sm  space-x-4">
                  Dribbble is worlds leading community for creatives to share grow and get hired
                </div>
                <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a class="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
            </div>
            
            

            <div>
                <h3 class="text-md font-bold text-gray-800 ">For designers</h3>

                <div class="flex flex-col items-start mt-4 space-y-4">
                    <a href="#" class="text-gray-700 transition-colors duration-200  hover:underline hover:text-blue-600"> Go Pro!</a>
                    <a href="#" class="text-gray-700 transition-colors duration-200  hover:underline hover:text-blue-600">Explore design work</a>
                    <a href="#" class="text-gray-700 transition-colors duration-200  hover:underline hover:text-blue-600">Design blog</a>
                    <a href="#" class="text-gray-700 transition-colors duration-200  hover:underline hover:text-blue-600">Overtime podcast</a>
                    <a href="#" class="text-gray-700 transition-colors duration-200  hover:underline hover:text-blue-600">Playoffs</a>
                    <a href="#" class="text-gray-700 transition-colors duration-200  hover:underline hover:text-blue-600">Weekly Warm-Up</a>
                    <a href="#" class="text-gray-700 transition-colors duration-200  hover:underline hover:text-blue-600">Refer a Friend</a>
                    <a href="#" class="text-gray-700 transition-colors duration-200  hover:underline hover:text-blue-600">Code of conduct</a>
                </div>
            </div>

            <div>
                <h3 class="text-md font-bold text-gray-800 ">Hire Designers</h3>
                <div class="flex flex-col items-start mt-4 mb-8 space-y-4">
                    <a href="#" class="te hover:underline hover:text-blue-600">Post a job opening</a>
                    <a href="#" class="te hover:underline hover:text-blue-600">Post a freelance</a>
                    <a href="#" class="te hover:underline hover:text-blue-600">project</a>
                    <a href="#" class="te hover:underline hover:text-blue-600">Search for designers</a>
                    
                </div>
                <h3 class="text-md font-bold text-gray-800 ">Brands</h3>

                <div class="flex flex-col items-start mt-4 space-y-4">
                    <a href="#" class="te hover:underline hover:text-blue-600">Advertise with us</a>
                    
                   
                </div>
            </div>

            <div>
                <h3 class="text-md font-bold text-gray-800 ">Company</h3>
                <div class="flex flex-col items-start mt-4 space-y-4">
                    <a href="#" class="te hover:underline hover:text-blue-600">Media kit</a>
                    <a href="#" class="te hover:underline hover:text-blue-600">Testimonials</a>
                    <a href="#" class="te hover:underline hover:text-blue-600">API</a>
                    <a href="#" class="te hover:underline hover:text-blue-600">Terms of service</a>
                    <a href="#" class="te hover:underline hover:text-blue-600">Privacy policy</a>
                    <a href="#" class="te hover:underline hover:text-blue-600">Cookie policy</a>
                </div>
            </div>

            <div>
                <h3 class="text-md font-bold text-gray-800 ">Directories</h3>
                <div class="flex flex-col items-start mt-4 mb-8 space-y-4">
                    <a href="#" class="text-gray-700 transition-colors duration-200  hover:underline hover:text-blue-600">Design jobs</a>
                    <a href="#" class="text-gray-700 transition-colors duration-200  hover:underline hover:text-blue-600">Designers for hire</a>
                    <a href="#" class="text-gray-700 transition-colors duration-200  hover:underline hover:text-blue-600">Freelance designers</a>
                    <a href="#" class="text-gray-700 transition-colors duration-200  hover:underline hover:text-blue-600">for hire</a>
                    <a href="#" class="text-gray-700 transition-colors duration-200  hover:underline hover:text-blue-600">Tags</a>
                    <a href="#" class="text-gray-700 transition-colors duration-200  hover:underline hover:text-blue-600">Places</a>
                </div>
                <h3 class="text-md font-bold text-gray-800 ">Design assets</h3>
                <div class="flex flex-col items-start mt-4 space-y-4">
                    <a href="#" class="text-gray-700 transition-colors duration-200  hover:underline hover:text-blue-600">Dribbble Marketplace</a>
                    <a href="#" class="text-gray-700 transition-colors duration-200  hover:underline hover:text-blue-600">Creative Market</a>
                    <a href="#" class="text-gray-700 transition-colors duration-200  hover:underline hover:text-blue-600">Github</a>
                    <a href="#" class="text-gray-700 transition-colors duration-200  hover:underline hover:text-blue-600">Fontspring</a>
                    <a href="#" class="text-gray-700 transition-colors duration-200  hover:underline hover:text-blue-600">Font Squirrel</a>
                    
                </div>
            </div>

            <div>
                <h3 class="text-md font-bold text-gray-800 ">Design Resources</h3>
               






                <div class="flex flex-col items-start mt-4 space-y-4">
                    <a href="#" class="text-gray-700 transition-colors duration-200  hover:underline hover:text-blue-600"> Freelancing</a>
                    <a href="#" class="text-gray-700 transition-colors duration-200  hover:underline hover:text-blue-600">Design Hiring</a>
                    <a href="#" class="text-gray-700 transition-colors duration-200  hover:underline hover:text-blue-600">Design Portfolio</a>
                    <a href="#" class="text-gray-700 transition-colors duration-200  hover:underline hover:text-blue-600">Design Education</a>
                    <a href="#" class="text-gray-700 transition-colors duration-200  hover:underline hover:text-blue-600">Creative Process</a>
                    <a href="#" class="text-gray-700 transition-colors duration-200  hover:underline hover:text-blue-600">Design Industry</a>
                    <a href="#" class="text-gray-700 transition-colors duration-200  hover:underline hover:text-blue-600">Trends</a>
                </div>
            </div>
        </div>
        
        <hr class="my-6 border-gray-200 md:my-10 dark:border-gray-700"/>
        
        <div class="flex flex-col items-center justify-between sm:flex-row">
           

            <p class="mt-4 text-sm text-gray-700 sm:mt-0 0">© Copyright 2023. All Rights Reserved.</p>
            <p class="mt-4 text-sm text-gray-700 sm:mt-0 "> <span className='font-bold text-gray-800'> 20,501,853 </span>
shots dribbbled.</p>
        </div>
    </div>
</footer>
  )
}

export default Footer
