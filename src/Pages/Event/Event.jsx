import React from 'react'
import EventDetails from '../../Component/Event/EventDetails'
import './event.scss'

export default function Event() {
  return (
    <div className='event_main_container'>
        <div className='event_sub_container'>
            <EventDetails />
            <img className='event_birthday' src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221003%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221003T134032Z&X-Amz-Expires=86400&X-Amz-Signature=47cb1c07c353de38ad2ed093e9955c6325cb2929aaeccaf5c7fadfaeb5f88225&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject" alt="brith day" srcset="" />
        </div>
    </div>
  )
}
