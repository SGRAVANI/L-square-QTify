
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import {  Navigation } from "swiper";
import Card from "../Card/Card";
import styles from "./Carousel.module.css";
import LeftButton from "../NavigarionButtons/LeftButton/LeftButton";
import RightButton from "../NavigarionButtons/RightButton/RightButton";
const Controls=({data})=>
{
  const swiper=useSwiper();
  useEffect(()=>{
    swiper.slideTo(0)
  },[data])
  return <></>
}
// export default function Carousel({data,type}) {

//     const [swiperRef, setSwiperRef] = useState(null);
//     let nextRef=useRef(null);
//     let prevRef=useRef(null);
//   return (
//     <div className={styles['carousel-wrapper']} >
//       <Swiper
//         onSwiper={setSwiperRef}
//         // slidesPerView={7}
//         // centeredSlides={true}
//         spaceBetween={30}
//         // pagination={{
//         //   type: "fraction",
//         // }}
//         // navigation={true}
//         navigation={{
//             prevEl: prevRef.current ? prevRef.current : undefined,
//             nextEl: nextRef.current ? nextRef.current : undefined,
//           }}
//           onInit={swiper => {
//             // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//             // @ts-ignore
//             // eslint-disable-next-line no-param-reassign
//             swiper.params.navigation.prevEl = prevRef.current
//             // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//             // @ts-ignore
//             // eslint-disable-next-line no-param-reassign
//             swiper.params.navigation.nextEl = nextRef.current
//             swiper.navigation.update()
//           }}
//         breakpoints={{
//             0: {
//               slidesPerView: 1,
//             },
//             400:{
//               slidesPerView:2,
//             },
//             576: {
//               slidesPerView: 3,
//             },
//             768:{
//               slidesPerView:4
//             },
//             1091:{
//               slidesPerView:5
//             },
//             1200:{
//               slidesPerView:6
//             },
//             1400:{
//               slidesPerView:7
//             }
//           }}
//         modules={[Pagination, Navigation]}
//         className="mySwiper"
//       >
//         {/* <SwiperSlide><div style={{width:"400px",height:"200px",color:"white"}}>Slide 1</div></SwiperSlide>
//         <SwiperSlide><div style={{width:"400px",height:"200px",color:"white"}}>Slide 2</div></SwiperSlide>
//         <SwiperSlide><div style={{width:"400px",height:"200px",color:"white"}}>Slide 3 </div></SwiperSlide>
//         <SwiperSlide><div style={{width:"400px",height:"200px",color:"white"}}>Slide 4</div></SwiperSlide> */}
//         {data.map((ele)=>{return (<SwiperSlide><Card key={ele.id} data={ele} type={type}/> </SwiperSlide>)})}
       
//       </Swiper>
//       <LeftButton ref={prevRef}/>
//      <RightButton ref={nextRef}/> 
      
//     </div>
//   )
// }
export default function Carousel({data,renderComponent}) {

 
return (
  <div className={styles['carousel-wrapper']} >
    <Swiper
          // onSwiper={setSwiperRef}
      initialSlide={0}
       slidesPerView="auto"
      // centeredSlides={true}
      spaceBetween={40}
      modules={[Navigation]}
      allowTouchMove
      style={{padding:"0px 20px"}}
 
    >
      <Controls daat={data} />
      <LeftButton />
   <RightButton /> 
     {data.map((ele)=>{return (<SwiperSlide>{renderComponent(ele)}</SwiperSlide>)})}

    
 
    </Swiper>
        
  </div>
)
}
