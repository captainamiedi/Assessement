import React from 'react'
import './button.scss'
import {FaPizzaSlice} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

export default function CreateEvent() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('create')
  }
  return (
    <button className='btn_container'onClick={handleClick}>
       <FaPizzaSlice style={{paddingRight: '4px', color: '#e1d800'}} /> Create my event
    </button>
  )
}
