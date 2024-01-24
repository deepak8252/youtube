import React from 'react'


const Button = ({name}) => {
  
  return (
    <div className='flex flex-row'>
       
    <button className='item px-5 py-2 m-3 rounded-lg   bg-gray-200'>{name}</button>
    </div>
   
  )
}

export default Button