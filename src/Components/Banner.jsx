import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import donation from '../assets/banner-images/donation.jpg';
import takeCare from '../assets/banner-images/take-care.jpg';
import helping1 from '../assets/banner-images/helping-1.jpg';
import helping2 from '../assets/banner-images/helping-2.jpg';
import helping3 from '../assets/banner-images/helping-3.jpg';
import helping4 from '../assets/banner-images/helping-4.jpg';


// import required modules
import { Navigation } from 'swiper/modules';
const Banner = () => {
    return (
        <div>
            
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
                <img src={donation} alt="" className='rounded-t-2xl rounded-b-none' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={takeCare} alt="" className='rounded-t-2xl rounded-b-none'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={helping1} alt="" className='rounded-t-2xl rounded-b-none'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={helping2} alt="" className='rounded-t-2xl rounded-b-none'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={helping3} alt="" className='rounded-t-2xl rounded-b-none'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={helping4} alt="" className='rounded-t-2xl rounded-b-none'/>
            </SwiperSlide>
            
      </Swiper>


        </div>
    );
};

export default Banner;