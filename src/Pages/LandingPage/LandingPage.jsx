import React from 'react'
import CreateEvent from '../../Component/Button/CreateEvent'
import LandingPageContent from '../../Component/LandingPageContent/LandingPageContent'
import './LandingPage.scss'

export default function LandingPage() {
  return (
    <div className='main_container'>
      <div className='container'>
        <div className='sub_container'>
          <div className='btn_event'>
            <CreateEvent />
          </div>
          <img className='image_container' src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221003%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221003T115056Z&X-Amz-Expires=86400&X-Amz-Signature=727c697bdc5925a40552ec03fa631360731d1e879f21b5a8f3cfc889f6190803&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject" alt="ticket" srcset="" />
          <LandingPageContent />
        </div>

      </div>
    </div>
  )
}
