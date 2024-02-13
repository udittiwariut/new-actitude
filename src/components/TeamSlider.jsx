import React from 'react'
import { Navigation, Autoplay, Pagination, FreeMode} from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import brad from "../assets/volunteer/brad.webp";
import ben from "../assets/volunteer/ben.webp"
import selma from "../assets/volunteer/selma.webp"
import david from "../assets/volunteer/david.webp"
import heidi from "../assets/volunteer/heidi.webp"
import jacques from "../assets/volunteer/jacques.webp"
import john from "../assets/volunteer/john.webp"
import karen from "../assets/volunteer/karen.webp"

export default () => {
    return (
      <>
        <div className="container swiper-conatiner1 mt-5 mb-5 pb-5">
          <Swiper
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          
          breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          navigation={true}
          modules={[Navigation, Autoplay, Pagination, FreeMode]}
          className="mySwiper"
             
          >
            <SwiperSlide>
              <div className="teamBox">
                <img src={ben} alt="" />
                <div className="frame-12">
                          <div className="text-wrapper-16">Ben</div>
                          <span className='location'>(Indonesia)</span>
                          <hr />
                          <p className="caring-for-homeless">
                          Alleviating poverty
                          </p>
                        </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="teamBox">
                <img src={selma} alt="" />
                <div className="frame-12">
                          <div className="text-wrapper-16">Selma</div>
                          <span className='location'>(Denmark)</span>
                          <hr />
                          <p className="caring-for-homeless">
                          Passionate about helping vulnerable children in Africa
                          </p>
                        </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="teamBox">
                <img src={karen} alt="" />
                <div className="frame-12">
                          <div className="text-wrapper-16">Karen</div>
                          <span className='location'>(USA)</span>
                          <hr />
                          <p className="caring-for-homeless">
                          Refugees and peace globally
                          </p>
                        </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="teamBox">
                <img src={brad} alt="" />
                <div className="frame-12">
                          <div className="text-wrapper-16">Brad</div>
                          <span className='location'>(Denmark)</span>
                          <hr />
                          <p className="caring-for-homeless">
                          Child literacy and education globally
                          </p>
                        </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="teamBox">
                <img src={heidi} alt="" />
                <div className="frame-12">
                          <div className="text-wrapper-16">Heidi</div>
                          <span className='location'>(Denmark)</span>
                          <hr />
                          <p className="caring-for-homeless">
                          Mental well-being, especially women and children in the western world
                          </p>
                        </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="teamBox">
                <img src={john} alt="" />
                <div className="frame-12">
                          <div className="text-wrapper-16">Johan Emil</div>
                          <span className='location'>(Denmark)</span>
                          <hr />
                          <p className="caring-for-homeless">
                          Climate change
                          </p>
                        </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="teamBox">
                <img src={david} alt="" />
                <div className="frame-12">
                          <div className="text-wrapper-16">David</div>
                          <span className='location'>(The Netherlands)</span>
                          <hr />
                          <p className="caring-for-homeless">
                          Aiming to create a forest untouched by humans in The Netherlands
                          </p>
                        </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="teamBox">
                <img src={jacques} alt="" />
                <div className="frame-12">
                          <div className="text-wrapper-16">Jacques</div>
                          <span className='location'>(Canada)</span>
                          <hr />
                          <p className="caring-for-homeless">
                          Literacy & homelessness in Montreal
                          </p>
                        </div>
              </div>
            </SwiperSlide>
            
            

            
          </Swiper>
        </div>
      </>
    );
  };
