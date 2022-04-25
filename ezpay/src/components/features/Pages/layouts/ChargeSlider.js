import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Logo from "../../assets/img/logo.png";
import { Link } from 'react-router-dom';
export default ({data,setBundle,setAmount,bundle,setAmountMain,typeTime,operator}) => {
  return (
    <Swiper
      className='chargeSlider'
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={30}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
        {
          operator!=1?
            data.filter(t=>t.type==typeTime ).map((item)=>{
                return(

                    <SwiperSlide>
                      <Link onClick={()=>{setBundle(item.id);setAmount(item.billAmount);setAmountMain(item.amount)}} to={""} className='text-link'>
                   <div  className={bundle==item.id?"chargeSliderBox tabBoxActiveMain":"chargeSliderBox"} >
                     <p className={bundle==item.id?'boxTitle activeTitle':"boxTitle"}>
                        {item.title}
                     </p>
                     {/* <p className='boxTitle activeTitle'>
                         هفتگی 5 گیگابایت
                     </p>
                     <p className='boxTitle activeTitle'>
                         از 2 تا 7 صبح
                     </p> */}
                     <p className={bundle==item.id?'boxPrice activeTitle':"boxPrice"}>
                         {item.amount} ریال
                     </p>
                    </div>
                    </Link>
                   </SwiperSlide>
                 
                )
            })
            :
            data.filter(t=>t.type==typeTime || t.type==2 ).map((item)=>{
              return(

                  <SwiperSlide>
                    <Link onClick={()=>{setBundle(item.id);setAmount(item.billAmount);setAmountMain(item.amount)}} to={""} className='text-link'>
                 <div  className={bundle==item.id?"chargeSliderBox tabBoxActiveMain":"chargeSliderBox"} >
                   <p className={bundle==item.id?'boxTitle activeTitle':"boxTitle"}>
                      {item.title}
                   </p>
                   {/* <p className='boxTitle activeTitle'>
                       هفتگی 5 گیگابایت
                   </p>
                   <p className='boxTitle activeTitle'>
                       از 2 تا 7 صبح
                   </p> */}
                   <p className={bundle==item.id?'boxPrice activeTitle':"boxPrice"}>
                       {item.amount} ریال
                   </p>
                  </div>
                  </Link>
                 </SwiperSlide>
               
              )
          })
        }

    </Swiper>
  );
};