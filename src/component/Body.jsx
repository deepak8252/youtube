import React from 'react'
import Sidebar from './Sidebar'

import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex -z-40  flex-row mx-auto'>
<Sidebar/>
<Outlet/>

    </div>
  )
}

export default Body