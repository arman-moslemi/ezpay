
import { useEffect, useState ,useRef} from "react";
import { apiUrl } from "../../../../commons/inFormTypes";
import { Link } from "react-router-dom";
// Import Swiper styles

export default ({setTime,time}) => {
  return (
      <div>
    <Link onClick={()=>setTime(0)}  to={""}className='text-link'>

    <div  className={time==0?"tabBox w97 margin2 tabBoxActiveMain":"tabBox w97 margin2"}>
    <p className={time==0?"tabBoxActive":"tabBoxText"}>
      روزانه
      </p>
    </div>
    </Link>

    <div  onClick={()=>setTime(1)}  className={time==1?"tabBox w97 margin2 tabBoxActiveMain hoverCursor":"tabBox w97 margin2 hoverCursor"}>
    <p className={time==1?"tabBoxActive":"tabBoxText"}>
     هفتگی
      </p>
    </div>
    <Link onClick={()=>setTime(2)}  to={""}className='text-link'>

    <div   className={time==2?"tabBox w97 margin2 tabBoxActiveMain":"tabBox w97 margin2"}>
    <p className={time==2?"tabBoxActive":"tabBoxText"}>
      ماهانه
      </p>
    </div>
    </Link>
    <Link onClick={()=>setTime(3)}  to={""}className='text-link'>

    <div  className={time==3?"tabBox w97 margin2 tabBoxActiveMain":"tabBox w97 margin2"}>
    <p className={time==3?"tabBoxActive":"tabBoxText"}>
      بلند مدت
      </p>
    </div>
    </Link>
    </div>
  );
};