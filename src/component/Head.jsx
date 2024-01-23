import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import {  SearchSharp, YouTube } from '@mui/icons-material';
import Person2Icon from '@mui/icons-material/Person2';
import { useDispatch } from 'react-redux';
import { togglemenu } from '../util/appSlice';

const Head = () => {
  const dispatch=useDispatch();
  const handleclick=()=>{
    dispatch(togglemenu())
  }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg sticky top-0 z-50'>
      <div className='flex col-span-1 '>
        <MenuIcon onClick={handleclick} className=' cursor-pointer' />
        <YouTube className=' text-red-700 cursor-pointer mx-2'/><span className=' font-bold'>YOUTUBE</span>
      </div>
      <div className=' col-span-10 flex items-center justify-center'>
       <input type="text"  className=' w-1/2 border border-gray-400 p-2 rounded-l-full'/>
       <button className='border border-gray-400 p-2 rounded-r-full px-4  bg-gray-100'><SearchSharp className=' text-gray-400'/></button>
      </div>
      <div>
      <Person2Icon/>
      </div>
    </div>
  )
}

export default Head