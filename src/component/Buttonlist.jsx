import React from 'react'
import Button from './Button'
const Buttonlist = () => {
  return (
    <div className='flex '>
      <Button name="All"/>
      <Button name ="Gaming"/>
      <Button name="Live"/>
      <Button name="Music"/>
      <Button name="web development"/>
      <Button name="Crowds"/>
      <Button name="Movies"/>
      <Button name="news"/>
      <Button name="Cooking"/>
    </div>
  )
}

export default Buttonlist