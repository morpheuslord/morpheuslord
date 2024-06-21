import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: AVT2,
        name: 'Matthias Luft - Mentor during internship',
        review: 'Chiranjeevi showed a lot of talent, focus, and determination in the area of penetration testing and hacking. I greatly enjoyed working with him and hope to do so again in the future!',
    },
    {
        avatar: AVT1,
        name: 'Saumay Srivastava - Colleague',
        review: 'I have known Chiranjeevi, from more than 3 years and his dedication to actively learn and evolve in the whole domain is commendable. Chiranjeevi is proficient in Recon, Linux based exploitation and Red team domains. I would highly recommend him for opportunities ahead!',
    },

]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Reviews</h5>
            <h2>Testimonials and Recommendations</h2>

            <Swiper className="container testimonials__container"
                //Install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials
