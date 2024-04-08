import React, { useState } from 'react'
import Card from './Card';
import img1 from '../assets/dribbble-pink.png';
import Emailverify from './Emailverify';

const Selectpage = () => {
  const [isSelected1, setIsSelected1] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);
  const [isSelected3, setIsSelected3] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [showComponent1, setShowComponent1] = useState(false);

  const toggleComponent = () => {
    setShowComponent1(!showComponent1);
  };

  const handleToggleChange1 = () => {
    setIsSelected1(!isSelected1);
    setButtonDisabled(false);
  };

  const handleToggleChange2 = () => {
    setIsSelected2(!isSelected2);
    setButtonDisabled(false);
  };

  const handleToggleChange3 = () => {
    setIsSelected3(!isSelected3);
    setButtonDisabled(false);
  };

  const content = {
    Title1: "I am designer looking to share my work",
    img1: "https://media.istockphoto.com/id/1458328747/vector/man-with-stress.jpg?s=612x612&w=0&k=20&c=x69NMZswWXOK6sR3TDi4iAxlb-BoMYEOxi_DiKcG76s=",
    Title2: "I am  looking to hire a designer",
    img2: "https://media.istockphoto.com/id/1778070523/vector/gesture-recognition-abstract-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=59tNU2H04D09h6RZ6yhQgsZIb4hY6atcs-gYEBcpirc=",
    Title3: "I am  looking for design inspiration",
    img3: "https://media.istockphoto.com/id/1250837747/vector/young-woman-with-bulb-avatar-character.jpg?s=612x612&w=0&k=20&c=P9pFTrRcHSNnIwnbR8cg0lvCtNxSWwpWGI5UgZe8S6Y="
  }

  return (
    <>
    {showComponent1 ? <Emailverify /> : 
    <div className=" container flex flex-col items-center justify-start  h-screen">
       <a className=' absolute left-8 top-10' href="#">
          <img class="w-auto h-5 sm:h-7" src={img1} alt="" />
        </a>
        <div className='mt-20'>
      <div className="  flex flex-col items-center ">


        <h1 className="text-3xl mt-2 font-bold mb-4">What brings you to Dribbble? </h1>
        <div>
          <p class="mt-1 text-center text-gray-500 ">
            select the options that best describe you. Don't worry, you can explore the other options later.
          </p>
        </div>
      </div>
      <div className="flex justify-between w-full mx-6  mt-10">
        <Card isSelected={isSelected1} onToggleChange={handleToggleChange1} title={content.Title1} img={content.img1} />
        <Card isSelected={isSelected2} onToggleChange={handleToggleChange2} title={content.Title2} img={content.img2} />
        <Card isSelected={isSelected3} onToggleChange={handleToggleChange3} title={content.Title3} img={content.img3} />
      </div>
      <div className=' mt-16'>
        {(isSelected1 || isSelected2 || isSelected3)&& (
         
            <p class=" text-center text-gray-800 font-semibold ">
              Anything else?You can select multiple
            </p>
        
        )}

        <div className='w-64 mt-2 mx-auto'>
          <button onClick={toggleComponent}
          disabled={isButtonDisabled}
            className={` text-white px-4 py-2  w-full  rounded-lg  ${isSelected1 || isSelected2 || isSelected3 ? 'bg-pink-500 cursor-pointer ' : 'bg-pink-300 cursor-default'}`}
          >
            Finish
          </button>
        </div>
        {
          (isSelected1 || isSelected2 || isSelected3)&&(
            <p class="mt-1 text-center text-gray-500 ">
              or press RETURN
          </p>
          )
        }
      </div>
      </div>
    </div>}
    </>
  )
}

export default Selectpage
