import React from 'react'
import Data from './Data'
import img1 from './Image/photo1.jpg'
import img2 from './Image/photo2.jpg'
import img3 from './Image/photo3.jpg'
import img4 from './Image/photo4.jpg'
import img5 from './Image/photo5.jpg'
import img6 from './Image/photo6.jpg'
import img7 from './Image/photo7.jpg'
import img8 from './Image/photo8.jpg'
import img9 from './Image/photo9.jpg'
import img10 from './Image/photo10.jpg'
import './home.css'
const Home = () => {
  return (
    <div className='homes'>
      <div className='containter'>
        <img className='image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='amazon-logo' />
        <div className='photos'>
          <Data content='The digital Photography' price={599} image={img1} reviews={5} />
          <Data content='le Grand Hotel' price={690} image={img2} reviews={5} />
          <Data content='Digital SLR Camera with EF S18-55 is II Lens' price='36,499' image={img3} reviews={3} />
        </div>
        <div className='photos'>
          <Data content='Redmi Watch 2 Lite' price='4,999' image={img4} reviews={6} />
          <Data content='Book' price={390} image={img5} reviews={4} />
        </div>
        <div className='photos'>
          <Data content='Think and Grow Rich by Nepolian Hill.This is very motivational book which is regarding how to start a bussinesss and some motivational part.' price={390} image={img6} reviews={6} />
          <Data content='boAt Airdopes 121v2 True Wireless Earbuds with Upto 14 Hours Playback, Lightweight Earbuds, 8MM Drivers, LED Indicators and Multifunction Controls(Midnight Blue)' price='12,99' image={img7} reviews={2} />
          <Data content='Soulion C20 Webcam with Microphone,Full HD 1080p Webcam Camera with Slide Privacy Cover for Streaming/Calling/Gaming/Conferencing.' price={9000} image={img8} reviews={8} />
        </div>
        <div className='photos'>
          <Data content='Kotart Modern Art Wall Decor Framed Paintings for Bedroom Room Living Room ' price={390} image={img9} reviews={4} />
          <Data content='The Queen: 70 Glorious' price={390} image={img10} reviews={3} />
        </div>
      </div>
    </div>
  )
}

export default Home
