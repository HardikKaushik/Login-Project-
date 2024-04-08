import React  from 'react'

const Card = ({ isSelected, onToggleChange , title ,img}) => {
    
  return (
    <>
  
    <div className='flex'>
       <div className={`max-w-xs max-h-sm mx-auto grid place-content-center mt-10 border-2   bg-white  rounded-xl  ${isSelected  ? 'border-pink-500' : ''}`}>
      <div className="relative ">
        <img
          src={img}
          alt="Your "
          className={`w-1/2 mb-4 mx-auto ${isSelected  ? '-mt-20' : ''}`}
        />
        <div className=" bottom-0 w-full bg-white  px-4 py-2 text-center">
          <h2 className="text-lg font-semibold">{title} </h2>
        </div>
        {isSelected && (
          <div className=" bottom-0 w-full text-center bg-white bg-opacity-75 px-4 py-2">
            <p className="text-sm">Lorem ipsum dolor , commodi earum enim assumenda ratione, numquam id repudiandae molestias delectus distinctio!</p>
          </div>
        )}
      </div>
      <div className="px-4 py-2 mx-auto">
        
        <button  onClick={ onToggleChange}>
        <label
         
         className={`w-6 h-6 border border-gray-300 rounded-full flex items-center justify-center cursor-pointer ${
           isSelected ? 'bg-pink-500 border-pink-500' : ''
         }`}
       >
         <svg
           className={`w-4 h-4 text-white ${isSelected ? 'block' : 'hidden'}`}
           fill="none"
           viewBox="0 0 24 24"
           stroke="currentColor"
         >
           <path
             strokeLinecap="round"
             strokeLinejoin="round"
             strokeWidth="2"
             d="M5 13l4 4L19 7"
           />
         </svg>
       </label>
        </button>
         
       
      </div>
    </div>
       
    </div>

    

    </>
  )
}

export default Card
