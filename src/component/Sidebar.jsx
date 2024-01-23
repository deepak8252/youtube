import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import {  ChangeCircleRounded, History, MovieSharp, MusicNote, ShowerSharp, Sports, VideoCameraFront, WatchLater } from '@mui/icons-material';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { useSelector } from 'react-redux';
const Sidebar = () => {
  const ismenuopen=useSelector(store=>store.app.isMenuOpen);
  if(!ismenuopen){
    return null
  }
  return (
    <div className=' shadow-lg w-48 '>
      <ul className='flex flex-col justify-between p-3 cursor-pointer'>
        <li className='p-1 px-2'><HomeIcon className='text-gray-400 mx-2 '/> Home</li>
        <li className='p-1 px-2'> <AppShortcutIcon className='text-gray-400 mx-2'/>shorts</li>
        <li className='p-1 px-2'><SubscriptionsIcon className='text-gray-400 mx-2 '/>subscription</li>
      </ul>
      <h1 className='font-bold pt-5 text-center capitalize'>subscription</h1>
      <ul>
        <li className='p-1 px-2'><MusicNote className='text-gray-400 mx-2' /> Music</li>
        <li className='p-1 px-2'><Sports className='text-gray-400 mx-2'/> Sports</li>
        <li className='p-1 px-2'><SportsEsportsIcon className='text-gray-400 mx-2'/> Gaming</li>
        <li className='p-1 px-2'> <MovieSharp className='text-gray-400 mx-2'/>Movies</li>
      </ul>
      <h3 className='text-center capitalize font-bold my-3'>you</h3>
      <ul className=' capitalize'>
        <li className='p-1 px-2'><ChangeCircleRounded className='text-gray-400 mx-2' /> your channel</li>
        <li className='p-1 px-2'><History className='text-gray-400 mx-2'/> history</li>
        <li className='p-1 px-2'><VideoCameraFront className='text-gray-400 mx-2'/> your videos</li>
        <li className='p-1 px-2'><WatchLater className='text-gray-400 mx-2'/> watch later</li>
        <li className='p-1 px-2'><ShowerSharp className='text-gray-400 mx-2'/> show more</li>
      </ul>
    </div>
  )
}

export default Sidebar