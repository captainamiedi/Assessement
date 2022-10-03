import React from 'react'
import { useHistory } from 'react-router-dom'
import './createEvent.scss'

export default function CreateEvent() {

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target);
        let inputData = {}
        console.log(data.entries(), 'data.entries()');
        for (let [key, value] of data.entries()) {
            inputData[key] = value
          }
          history.push({
            pathname: 'event',
            state: inputData
          })
          console.log(inputData, 'input');
    }
  return (
    <div className='create_event_container'>
        <form action="" onSubmit={handleSubmit}>
        <h4>Create Event</h4>
            <div className='py-4'>
            <input name='eventName' placeholder='Event Name'  />

            </div>
            <div className='py-4'>
            <input name='hostName' placeholder='Host Name' />

            </div>
            <div className='py-4'>
            <input name='location' placeholder='Location' />

            </div>
            <div className='py-4'>
            <input name='startDate' placeholder='Start Time'  type='date' />

            </div>
            <div className='py-4'>
            <input name='endDate' placeholder='End Time' type='date' />

            </div>
            <button className='btn_container' type='submit'>
                Submit
    </button>
        </form>
    </div>
  )
}
