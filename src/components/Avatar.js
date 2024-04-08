import React, { useState } from 'react';
import img1 from '../assets/dribbble-pink.png';
import Selectpage from "./Selectpage";
const Avatar = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [randomInput, setRandomInput] = useState('');

  const [showComponent1, setShowComponent1] = useState(false);

  const toggleComponent = () => {
    setShowComponent1(!showComponent1);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRandomInputChange = (e) => {
    setRandomInput(e.target.value);
  };

  
  
  return (
    <>
   
    {showComponent1 ? <Selectpage /> : 
    <div className=" container flex flex-col items-center justify-start  h-screen">

      <div className='mt-24'>
        <a className=' absolute left-8 top-10' href="#">
          <img class="w-auto h-5 sm:h-7" src={img1} alt="" />
        </a>
        <div>
          <h1 className="text-3xl mt-2 font-bold mb-4">Welcome! Lets create your profile</h1>
          <p class="mt-4 mb-10 text-sm text-gray-500 ">
            Let others get to know you better! You can do these later
          </p>
          <p class="mt-6 font-bold text-gray-900 ">
            Add an avatar
          </p>

          <div className='flex  mt-5  mb-4 '>
            <div className="flex  relative items-center    col-start-1 justify-center w-36 h-36 border-dotted border-4 border-gray-400 rounded-full overflow-hidden">
              {selectedImg && (
                <img
                  src={selectedImg}
                  alt="Selected Avatar"
                  className="w-36 h-36 rounded-full  object-cover   "
                />
              )}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16"> <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" fill="#d0d0cd"></path> <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" fill="#d0d0cd"></path> </svg>
            </div>

            <div className=''>
              <label className="flex flex-col  col-span-1 items-center justify-center w-1/2  mx-10 text-sm py-2  bg-white text-gray-700 rounded border-2 border-gray-300 cursor-pointer hover:bg-gray-200">

                <span className='font-semibold'>Choose image</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
              <p class="mt-3 mx-10 text-gray-500 ">
                or choose one of our defaults
              </p>
            </div>
          </div>
          <div>

            <p class="mt-12 relative font-bold  mb-6 text-gray-800 ">
              Add your location
            </p>
          </div>
          <input
            type="text"
            value={randomInput}
            onChange={handleRandomInputChange}
            placeholder="Enter a Location"
            className="border-b border-gray-500 focus:outline-none relative w-full mb-12 py-1"
          />
          <div className='relative  w-64'>

            <button
              onClick={toggleComponent}
              className="bg-pink-500 text-white px-4 py-2  w-full  rounded hover:bg-pink-600"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>}
    </>
  );
}

export default Avatar;
