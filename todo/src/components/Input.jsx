import React from 'react'
import{AiOutlinePlus} from "react-icons/ai";
import {useRef} from 'react'
export default function Input (props) {
      const inputBox = useRef();
  return (
    <div className='p-3 flex justify-around ' >
      
      <input type="text" placeholder='enter data here' className='p-3 focus:outline-none
       border w-[90%] border-slate-400' ref={inputBox} /> 

      <div className='cursor-pointer w-[50px] h-[50px] bg-red-500 text-3xl text-white 
      rounded-[50%] flex justify-center items-center '
      onClick={()=>props.handler(inputBox.current.value)}>

 <AiOutlinePlus />
      </div>
    </div>
  )
  }
        

       
 
