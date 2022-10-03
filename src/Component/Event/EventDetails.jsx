import React from 'react'
import './eventDetails.scss'
import Calendar from '../../asset/Icon.png'
import Location from '../../asset/Location.png'
import { IoIosArrowForward} from 'react-icons/io'
import { useLocation } from 'react-router-dom'


export default function EventDetails() {

  const location = useLocation()

  console.log(location, 'statt');
  return (
    <div className='event_details_container'>
        <div>
            <h4 className='event_birthday_text'>
            Birthday Bash
            </h4>
            <p>Hosted by Elysia</p>

        </div>
        <div className='event_details_list_1'>
            <div className='event_calendar'>
            <div className='location_item'>
                <img src={Calendar} alt="Calendar" srcset="" width='46px' />
              <div >
                <p className='event_text'>18 August 6:00PM</p>
                <p className='event_text_1'>to 19 August 1:00PM UTC +10</p>
              </div>
            </div>
            </div>
            <div className='event_forward'>
                <IoIosArrowForward />
            </div>
        </div>
        <div className='event_details_list_2'>
            <div className='event_calendar'>
            <div className='location_item'>
              <img src={Location} alt="Calendar" srcset="" width='46px' />
              <div >
                <p className='event_text'>Street name</p>
                <p className='event_text_1'>Suburb, State, Postcode</p>
              </div>
            </div>
            </div>
            <div className='event_forward'>
                <IoIosArrowForward />
            </div>
        </div>
    </div>
  )
}
