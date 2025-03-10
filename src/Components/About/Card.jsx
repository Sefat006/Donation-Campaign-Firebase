import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import foodGiving from '../../assets/about-images/food-giving.jpg'
import donate from '../../assets/about-images/donate.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards } from 'swiper/modules';

const Card = () => {
    return (
        <div className='p-8'>
            <Swiper
        effect={'cards'}
        loop={true}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={foodGiving} alt="" className='rounded-2xl'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={donate} alt="" className='rounded-2xl'/>
        </SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Card;