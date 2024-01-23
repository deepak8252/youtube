import React from 'react'
import Buttonlist from './Buttonlist'
import Videocontainer from './Videocontainer'

const Maincontainer = () => {
  return (
    <div className="grid-cols-11 w-full">
        <Buttonlist/>
        <Videocontainer/>
    </div>
  )
}

export default Maincontainer