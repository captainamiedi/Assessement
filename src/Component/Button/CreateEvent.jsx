import React from 'react'
import './button.scss'
import {FaPizzaSlice} from 'react-icons/fa'
import { useHistory } from 'react-router-dom'

export default function CreateEvent() {
  let history = useHistory();
  const handleClick = () => {
    history.push('/create')
  }
  return (
    <button className='btn_container'onClick={handleClick}>
       <FaPizzaSlice style={{paddingRight: '4px', color: '#e1d800'}} /> Create my event
    </button>
  )
}
