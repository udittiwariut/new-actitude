
import { Navigation, Pagination,  Autoplay, FreeMode} from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import imgF1 from "../assets/causes/01Elephant.svg";
import imgF2 from "../assets/causes/02AnimalFootstep.svg";
import imgF3 from "../assets/causes/03Cleanenergy.svg";
import imgF4 from "../assets/causes/04Temperature.svg";
import imgF5 from "../assets/causes/05Coins.svg";
import imgF6 from "../assets/causes/06Helmet.svg";
import imgF7 from "../assets/causes/07equity.svg";
import imgF8 from "../assets/causes/08Greentriangle.svg";
import imgF9 from "../assets/causes/09Lawhammer.svg";
import imgF10 from "../assets/causes/10Shieldx.svg";
import imgF11 from "../assets/causes/11NoNeedles.svg";
import imgF12 from "../assets/causes/12HappyPerson.svg";
import imgF13 from "../assets/causes/13Elderlyperson.svg";
import imgF14 from "../assets/causes/14Heartrhythm.svg";
import imgF15 from "../assets/causes/15Swingalone.svg";
import imgF16 from "../assets/causes/16Pills1.svg";
import imgF17 from "../assets/causes/17Watertap.svg";
import imgF18 from "../assets/causes/18Food.svg";
import imgF19 from "../assets/causes/19Toilet1.svg";
import imgF20 from "../assets/causes/20Handsholding.svg";
import imgF21 from "../assets/causes/21Gun.svg";
import imgF22 from "../assets/causes/22Peacedove.svg";
import imgF23 from "../assets/causes/23Book.svg";
import imgF24 from "../assets/causes/24Path.svg";
import imgF25 from "../assets/causes/25Girl.svg";
import imgF26 from "../assets/causes/26Disability.svg";
import imgF27 from "../assets/causes/27House.svg";
import imgF28 from "../assets/causes/28WomansShoe.svg";
import imgF29 from "../assets/causes/29Hands.svg";
import imgF30 from "../assets/causes/30Vulcanoerupting.svg";
import imgF31 from "../assets/causes/31Chemicalreaction.svg";
import imgF32 from "../assets/causes/32LawScale.svg";



// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';




export default () => {
  
  return (
    <>
      <div className="container swiper-conatiner mt-5 mb-5 desktop-slider">
        <Swiper
        pagination={{
          clickable: true,
        }}
        freeMode={true}
        slidesPerGroupSkip={8}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          480: {
            slidesPerView: 0,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
        }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        modules={[Navigation, Pagination, Autoplay, FreeMode]}
        className="mySwiper"
           
        >
          <SwiperSlide>
            <div className="slidergroup">
            <div className="slidebox">
              <img src={imgF1} alt="" />
              <h1>Animal Care</h1>
              <p>
              Support the well-being, protection, and preservation of animals around the world. End animal abuse.
              </p>
            </div>
            <div className="slidebox">
              <img src={imgF2} alt="" />
              <h1>Wildlife Trade</h1>
              <p>
              Work against the illegal trade and trafficking of animals (and products derived from animals).
              </p>
            </div>
            <div className="slidebox">
              <img src={imgF3} alt="" />
              <h1>Clean Energy Production</h1>
              <p>
              Help people get access to renewable, sustainable energy that is affordable and accessible.
              </p>
            </div>
            <div className="slidebox">
              <img src={imgF4} alt="" />
              <h1>Climate Change</h1>
              <p>
              Take action to drive long-lasting improvement of the earth's climate and stop global warming.
              </p>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slidergroup">
            <div className="slidebox">
              <img src={imgF5} alt="" />
              <h1>Poverty & Economic Inequality</h1>
              <p>
              Combat extreme poverty (affecting more than 10% of the world's population) and general economic inequality.
              </p>
            </div>
            <div className="slidebox">
              <img src={imgF6} alt="" />
              <h1>Unemployment</h1>
              <p>
              Help reduce unemployment, which can lead to poverty, homelessness, and isolation.
              </p>
            </div>
            <div className="slidebox">
              <img src={imgF7} alt="" />
              <h1>Discrimination</h1>
              <p>
              Work to eliminate discrimination based on race, gender, sexual orientation, age, etc.
              </p>
            </div>
            <div className="slidebox">
              <img src={imgF8} alt="" />
              <h1>Ecosystems & Biodiversity</h1>
              <p>
              Protect ecosystems and preserve the variety of plant and animal life in the world.
              </p>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slidergroup">
            <div className="slidebox">
              <img src={imgF9} alt="" />
              <h1>Human Rights</h1>
              <p>
              Secure human rights for people around the world (free speech, free movement, freedom from torture, etc.)
              </p>
            </div>
            <div className="slidebox">
              <img src={imgF10} alt="" />
              <h1>Abuse, Violence & Exploitation</h1>
              <p>
              Support protection from all forms of physical and psychological abuse, exploitation, and violence.
              </p>
            </div>
            <div className="slidebox">
              <img src={imgF11} alt="" />
              <h1>Addiction & Substance Abuse</h1>
              <p>
              End addiction and substance abuse through strengthened prevention and treatment.
              </p>
            </div>
            <div className="slidebox">
              <img src={imgF12} alt="" />
              <h1>Good Health & Well-being</h1>
              <p>
              Strengthen physical and mental health by combatting smoking, unhealthy food, stress, bullying, SoMe addiction, etc.
              </p>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slidergroup">
            <div className="slidebox">
              <img src={imgF13} alt="" />
              <h1>Elders & Eldercare</h1>
              <p>
              Help improve or serve the special needs and requirements unique to senior citizens.
              </p>
            </div>
            <div className="slidebox">
              <img src={imgF14} alt="" />
              <h1>Basic Health Care</h1>
              <p>
              Champion access to basic health care to reduce causes of death and increase life expectancy and quality.
              </p>
            </div>
            <div className="slidebox">
              <img src={imgF15} alt="" />
              <h1>Loneliness</h1>
              <p>
              Support people of all generations by helping alleviate their experience of loneliness and isolation.
              </p>
            </div>
            <div className="slidebox">
              <img src={imgF16} alt="" />
              <h1>Epidemics & Diseases</h1>
              <p>
              Help prevent epidemics and curable diseases from killing people around the world.
              </p>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slidergroup">
            <div className="slidebox">
              <img src={imgF17} alt="" />
              <h1>Clean Drinking Water</h1>
              <p>
              Help provide access to clean drinking water (a challenge for 40% of the world's population).
              </p>
            </div>
            <div className="slidebox">
              <img src={imgF18} alt="" />
              <h1>End Hunger & Malnutrition</h1>
              <p>
              Champion the right for people around the world to meet basic nutritional needs.
              </p>
            </div>
            <div className="slidebox">
              <img src={imgF19} alt="" />
              <h1>Sanitation & Hygiene</h1>
              <p>
              Provide access to toilets and hand washing to prevent the spread of diseases.
              </p>
            </div>
            <div className="slidebox">
              <img src={imgF20} alt="" />
              <h1>Terminally Ill & Dying People</h1>
              <p>
              Provide medical and psychological care for terminally ill and dying people.
              </p>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slidergroup">
            <div className="slidebox">
              <img src={imgF21} alt="" />
              <h1>Weapons Control</h1>
              <p>
              Reduce or eliminate the manufacturing, sale, and possession of arms and weapons.
              </p>
            </div>
            <div className="slidebox">
              <img src={imgF22} alt="" />
              <h1>Peace</h1>
              <p>
              End armed conflicts, terrorism, and wars causing death, displacement, and suffering. Work to achieve peace.
              </p>
            </div>
            <div className="slidebox">
              <img src={imgF23} alt="" />
              <h1>Education</h1>
              <p>
              Champion access to quality education as one of the strongest levers towards better lives.
              </p>
            </div>
            <div className="slidebox">
              <img src={imgF24} alt="" />
              <h1>Refugees, Migrants & Asylum Seekers</h1>
              <p>
              Ensure that everyone has safe refuge in other countries and can eventually return home safely.
              </p>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slidergroup">
            <div className="slidebox">
              <img src={imgF25} alt="" />
              <h1>Children</h1>
              <p>
              Help millions of children worldwide living on the streets, in orphanages, or forced into child labor.
              </p>
            </div>
            <div className="slidebox">
              <img src={imgF26} alt="" />
              <h1>Disabilities, Handicap & Impairment </h1>
              <p>
              Secure equal opportunities and equal rights for people living with disability, handicap, and impairment. 
              </p>
            </div>
            <div className="slidebox">
              <img src={imgF27} alt="" />
              <h1>Homeless People</h1>
              <p>
              Make a difference for people that are homeless, living on the streets, in temporary shelter etc.
              </p>
            </div>
            <div className="slidebox">
              <img src={imgF28} alt="" />
              <h1>Prostitution</h1>
              <p>
              Act now to help and support the more than 40 million prostitutes in the world.
              </p>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slidergroup">
            <div className="slidebox">
              <img src={imgF29} alt="" />
              <h1>Democracy & Strong Institutions</h1>
              <p>
              Strengthen political systems built on political freedom, fair elections, and strong institutions.
              </p>
            </div>
            <div className="slidebox">
              <img src={imgF30} alt="" />
              <h1>Natural Disasters</h1>
              <p>
              Work with disaster prevention and preparedness. Help people suffering the consequences of natural disasters. 
              </p>
            </div>
            <div className="slidebox">
              <img src={imgF31} alt="" />
              <h1>Biosafety</h1>
              <p>
              Ensure protection from the unintentional release of infectious agents or biological hazards. 
              </p>
            </div>
            <div className="slidebox">
              <img src={imgF32} alt="" />
              <h1>Justice & Corruption</h1>
              <p>
              Strengthen the rule of law and help ensure equal access to justice for people all over the world.
              </p>
            </div>
            </div>
          </SwiperSlide>
          
        </Swiper>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
{/* for mobile slider here */}

<div className="container swiper-conatiner mt-3 mb-1 mobile-slider">
        <Swiper
        pagination={{
          clickable: true,
        }}
        // freeMode={true}
        slidesPerView={1}
        spaceBetween={15}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        modules={[Navigation, Pagination, Autoplay, FreeMode]}
        className="mySwiper"
           
        >
         <SwiperSlide>
    
    <div className="slidebox">
      <img src={imgF1} alt="" />
      <h1>Animal Care</h1>
      <p>
      Support the well-being, protection, and preservation of animals around the world. End animal abuse.
      </p>
    </div>
    
    
  </SwiperSlide>
  <SwiperSlide>
    <div className="slidebox">
        <img src={imgF2} alt="" />
        <h1>Wildlife Trade</h1>
        <p>
        Work against the illegal trade and trafficking of animals (and products derived from animals).
        </p>
      </div>
      
  </SwiperSlide>
  <SwiperSlide>
    <div className="slidebox">
        <img src={imgF3} alt="" />
        <h1>Clean Energy Production</h1>
        <p>
        Help people get access to renewable, sustainable energy that is affordable and accessible.
        </p>
      </div>
      
  </SwiperSlide>
  <SwiperSlide>
    <div className="slidebox">
        <img src={imgF4} alt="" />
        <h1>Climate Change</h1>
        <p>
        Take action to drive long-lasting improvement of the earth's climate and stop global warming.
        </p>
      </div>
  </SwiperSlide>
  <SwiperSlide>
   
    <div className="slidebox">
      <img src={imgF5} alt="" />
      <h1>Poverty & Economic Inequality</h1>
      <p>
      Combat extreme poverty (affecting more than 10% of the world's population) and general economic inequality.
      </p>
    </div>
    
    
  </SwiperSlide>
  <SwiperSlide>
    <div className="slidebox">
    <img src={imgF6} alt="" />
    <h1>Unemployment</h1>
    <p>
    Help reduce unemployment, which can lead to poverty, homelessness, and isolation.
    </p>
  </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="slidebox">
        <img src={imgF7} alt="" />
        <h1>Discrimination</h1>
        <p>
        Work to eliminate discrimination based on race, gender, sexual orientation, age, etc.
        </p>
      </div>
      
  </SwiperSlide>
  <SwiperSlide>
    <div className="slidebox">
        <img src={imgF8} alt="" />
        <h1>Ecosystems & Biodiversity</h1>
        <p>
        Protect ecosystems and preserve the variety of plant and animal life in the world.
        </p>
      </div>
  </SwiperSlide>
 
  
  <SwiperSlide>
    
    <div className="slidebox">
      <img src={imgF9} alt="" />
      <h1>Human Rights</h1>
      <p>
      Secure human rights for people around the world (free speech, free movement, freedom from torture, etc.)
      </p>
    </div>
    
    
  </SwiperSlide>
  <SwiperSlide>
    <div className="slidebox">
        <img src={imgF10} alt="" />
        <h1>Abuse, Violence & Exploitation</h1>
        <p>
        Support protection from all forms of physical and psychological abuse, exploitation, and violence.
        </p>
      </div>
      
  </SwiperSlide>
  <SwiperSlide>
    <div className="slidebox">
        <img src={imgF11} alt="" />
        <h1>Addiction & Substance Abuse</h1>
        <p>
        End addiction and substance abuse through strengthened prevention and treatment.
        </p>
      </div>
      
  </SwiperSlide>
  <SwiperSlide>
    <div className="slidebox">
        <img src={imgF12} alt="" />
        <h1>Good Health & Well-being</h1>
        <p>
        Strengthen physical and mental health by combatting smoking, unhealthy food, stress, bullying, SoMe addiction, etc.
        </p>
      </div>
  </SwiperSlide>


  <SwiperSlide>
    <div className="slidebox">
      <img src={imgF13} alt="" />
      <h1>Elders & Eldercare</h1>
      <p>
      Help improve or serve the special needs and requirements unique to senior citizens.
      </p>
    </div>
    
    
  </SwiperSlide>

  <SwiperSlide>
    <div className="slidebox">
        <img src={imgF14} alt="" />
        <h1>Basic Health Care</h1>
        <p>
        Champion access to basic health care to reduce causes of death and increase life expectancy and quality.
        </p>
      </div>
      
  </SwiperSlide>
  <SwiperSlide>
    <div className="slidebox">
        <img src={imgF15} alt="" />
        <h1>Loneliness</h1>
        <p>
        Support people of all generations by helping alleviate their experience of loneliness and isolation.
        </p>
      </div>
      
  </SwiperSlide>
  <SwiperSlide>
    <div className="slidebox">
        <img src={imgF16} alt="" />
        <h1>Epidemics & Diseases</h1>
        <p>
        Help prevent epidemics and curable diseases from killing people around the world.
        </p>
      </div>
  </SwiperSlide>
  

  <SwiperSlide>
    <div className="slidebox">
      <img src={imgF17} alt="" />
      <h1>Clean Drinking Water</h1>
      <p>
      Help provide access to clean drinking water (a challenge for 40% of the world's population).
      </p>
    </div>
    
    
  </SwiperSlide>

  <SwiperSlide>
    <div className="slidebox">
        <img src={imgF18} alt="" />
        <h1>End Hunger & Malnutrition</h1>
        <p>
        Champion the right for people around the world to meet basic nutritional needs.
        </p>
      </div>
     
  </SwiperSlide>
  <SwiperSlide>
    <div className="slidebox">
        <img src={imgF19} alt="" />
        <h1>Sanitation & Hygiene</h1>
        <p>
        Provide access to toilets and hand washing to prevent the spread of diseases.
        </p>
      </div>
      
  </SwiperSlide>
  <SwiperSlide>
    <div className="slidebox">
        <img src={imgF20} alt="" />
        <h1>Terminally Ill & Dying People</h1>
        <p>
        Provide medical and psychological care for terminally ill and dying people.
        </p>
      </div>
  </SwiperSlide>
 
  <SwiperSlide>
    <div className="slidebox">
      <img src={imgF21} alt="" />
      <h1>Weapons Control</h1>
      <p>
      Reduce or eliminate the manufacturing, sale, and possession of arms and weapons.
      </p>
    </div>
    
    
  </SwiperSlide>
  <SwiperSlide>
    <div className="slidebox">
        <img src={imgF22} alt="" />
        <h1>Peace</h1>
        <p>
        End armed conflicts, terrorism, and wars causing death, displacement, and suffering. Work to achieve peace.
        </p>
      </div>
      
  </SwiperSlide>
  <SwiperSlide>
    <div className="slidebox">
        <img src={imgF23} alt="" />
        <h1>Education</h1>
        <p>
        Champion access to quality education as one of the strongest levers towards better lives.
        </p>
      </div>
      
  </SwiperSlide>
  <SwiperSlide>
    <div className="slidebox">
        <img src={imgF24} alt="" />
        <h1>Refugees, Migrants & Asylum Seekers</h1>
        <p>
        Ensure that everyone has safe refuge in other countries and can eventually return home safely.
        </p>
      </div>
  </SwiperSlide>
  


  <SwiperSlide>
    
    <div className="slidebox">
      <img src={imgF25} alt="" />
      <h1>Children</h1>
      <p>
      Help millions of children worldwide living on the streets, in orphanages, or forced into child labor.
      </p>
    </div>
    
    
  </SwiperSlide>

  <SwiperSlide>
    <div className="slidebox">
        <img src={imgF26} alt="" />
        <h1>Disabilities, Handicap & Impairment </h1>
        <p>
        Secure equal opportunities and equal rights for people living with disability, handicap, and impairment. 
        </p>
      </div>
      
  </SwiperSlide>
  <SwiperSlide>
    <div className="slidebox">
        <img src={imgF27} alt="" />
        <h1>Homeless People</h1>
        <p>
        Make a difference for people that are homeless, living on the streets, in temporary shelter etc.
        </p>
      </div>
      
  </SwiperSlide>
  <SwiperSlide>
    <div className="slidebox">
        <img src={imgF28} alt="" />
        <h1>Prostitution</h1>
        <p>
        Act now to help and support the more than 40 million prostitutes in the world.
        </p>
      </div>
  </SwiperSlide>
  




  <SwiperSlide>
    <div className="slidebox">
      <img src={imgF29} alt="" />
      <h1>Democracy & Strong Institutions</h1>
      <p>
      Strengthen political systems built on political freedom, fair elections, and strong institutions.
      </p>
    </div>
    
    
  </SwiperSlide>

  <SwiperSlide><div className="slidebox">
    <img src={imgF30} alt="" />
    <h1>Natural Disasters</h1>
    <p>
    Work with disaster prevention and preparedness. Help people suffering the consequences of natural disasters. 
    </p>
  </div>
 
  </SwiperSlide>
  <SwiperSlide>
    <div className="slidebox">
        <img src={imgF31} alt="" />
        <h1>Biosafety</h1>
        <p>
        Ensure protection from the unintentional release of infectious agents or biological hazards. 
        </p>
      </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="slidebox">
        <img src={imgF32} alt="" />
        <h1>Justice & Corruption</h1>
        <p>
        Strengthen the rule of law and help ensure equal access to justice for people all over the world.
        </p>
      </div>
  </SwiperSlide>
          
        </Swiper>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>

    </>
  );
};
