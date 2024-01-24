import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { ViewAgendaOutlined } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
const Videocard = ({data}) => {
    console.log(data);
    const {snippet,}=data || {};
    const {title}=snippet  || {};
  return (
    <div className='flex flex-wrap  '>   
       {
     data && data.map((item)=>(
      <NavLink to={"/watchpage?v="+item.id}>
         <div key={item.id} className='shadow-lg m-2 w-48 p-3'>
         <img src={item?.snippet?.thumbnails?.medium?.url} alt={title} className=' rounded-lg' />
             <ul>
            <li className='font-bold p-2'>{item?.snippet?.channelTitle}</li>
            <li className='p-2 font-semibold'>{item?.snippet?.title}</li>
            <li><ViewAgendaOutlined/>Views{item?.statistics?.viewCount}</li>
            <li><ThumbUpIcon/>{item?.statistics?.likeCount}</li>
        </ul>
       </div>
      </NavLink>
        ))
       } 
    </div>
  )
}

export default Videocard