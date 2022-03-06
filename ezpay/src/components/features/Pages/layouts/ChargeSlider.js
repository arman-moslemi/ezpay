import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Logo from "../../assets/img/logo.png";
export default () => {
  return (
    <Swiper
      className='chargeSlider'
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={30}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
       <SwiperSlide>
      <div className='chargeSliderBox'>
        <p className='boxTitle activeTitle'>
            بسته اینترنت اعتباری
        </p>
        <p className='boxTitle activeTitle'>
            هفتگی 5 گیگابایت
        </p>
        <p className='boxTitle activeTitle'>
            از 2 تا 7 صبح
        </p>
        <p className='boxPrice activeTitle'>
            2.500 تومان
        </p>
       </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='chargeSliderBox'>
        <p className='boxTitle'>
            بسته اینترنت اعتباری
        </p>
        <p className='boxTitle'>
            هفتگی 5 گیگابایت
        </p>
        <p className='boxTitle'>
            از 2 تا 7 صبح
        </p>
        <p className='boxPrice'>
            2.500 تومان
        </p>
       </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='chargeSliderBox'>
        <p className='boxTitle'>
            بسته اینترنت اعتباری
        </p>
        <p className='boxTitle'>
            هفتگی 5 گیگابایت
        </p>
        <p className='boxTitle'>
            از 2 تا 7 صبح
        </p>
        <p className='boxPrice'>
            2.500 تومان
        </p>
       </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='chargeSliderBox'>
        <p className='boxTitle activeTitle'>
            بسته اینترنت اعتباری
        </p>
        <p className='boxTitle activeTitle'>
            هفتگی 5 گیگابایت
        </p>
        <p className='boxTitle activeTitle'>
            از 2 تا 7 صبح
        </p>
        <p className='boxPrice activeTitle'>
            2.500 تومان
        </p>
       </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='chargeSliderBox'>
        <p className='boxTitle'>
            بسته اینترنت اعتباری
        </p>
        <p className='boxTitle'>
            هفتگی 5 گیگابایت
        </p>
        <p className='boxTitle'>
            از 2 تا 7 صبح
        </p>
        <p className='boxPrice'>
            2.500 تومان
        </p>
       </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='chargeSliderBox'>
        <p className='boxTitle'>
            بسته اینترنت اعتباری
        </p>
        <p className='boxTitle'>
            هفتگی 5 گیگابایت
        </p>
        <p className='boxTitle'>
            از 2 تا 7 صبح
        </p>
        <p className='boxPrice'>
            2.500 تومان
        </p>
       </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='chargeSliderBox'>
        <p className='boxTitle'>
            بسته اینترنت اعتباری
        </p>
        <p className='boxTitle'>
            هفتگی 5 گیگابایت
        </p>
        <p className='boxTitle'>
            از 2 تا 7 صبح
        </p>
        <p className='boxPrice'>
            2.500 تومان
        </p>
       </div>
      </SwiperSlide>
    </Swiper>
  );
};