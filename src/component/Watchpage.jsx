import React from 'react'
import { useDispatch } from 'react-redux'
import { closemenu } from '../util/appSlice';
import { useSearchParams } from 'react-router-dom';

const Watchpage = () => {
  const dispatch=useDispatch();
  dispatch(closemenu());
 const [search]=useSearchParams()
 console.log(search.get("v"))
  return (
    <div className='p-3 w-9/12 h-72'>
      <iframe className=' w-11/12 h-72' src={"https://www.youtube.com/embed/"+search.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default Watchpage