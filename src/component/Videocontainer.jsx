import React, { useEffect, useState } from 'react'
import {youtubeapi} from "../util/constant"
import Videocard from './Videocard';
const Videocontainer = () => {
  const  [video,setvideo]=useState([])
  useEffect(()=>{
 fetchdata();
  },[]);
  const fetchdata=async()=>{
 const data=await fetch(youtubeapi);
 const result= await data.json();
//  console.log(result);
 setvideo(result.items);
  }
  return (
    <div>
      <Videocard data={video[0]}/>
    </div>
  )
}

export default Videocontainer