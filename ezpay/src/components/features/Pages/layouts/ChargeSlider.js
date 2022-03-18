import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Logo from "../../assets/img/logo.png";
export default ({data,setBundle,setAmount,bundle}) => {
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
            data.map((item)=>{
                return(

                    <SwiperSlide>
                   <div onClick={()=>{setBundle(item.id);setAmount(item.amount)}} className={bundle==item.id?"chargeSliderBox tabBoxActiveMain":"chargeSliderBox"} >
                     <p className='boxTitle activeTitle'>
                        {item.title}
                     </p>
                     {/* <p className='boxTitle activeTitle'>
                         هفتگی 5 گیگابایت
                     </p>
                     <p className='boxTitle activeTitle'>
                         از 2 تا 7 صبح
                     </p> */}
                     <p className='boxPrice activeTitle'>
                         {item.amount} تومان
                     </p>
                    </div>
                   </SwiperSlide>
                 
                )
            })
        }
    </Swiper>
  );
};