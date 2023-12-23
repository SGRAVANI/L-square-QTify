import React, { useEffect, useState } from 'react'
import styles from "./LeftButton.module.css";
import {ReactComponent as LeftIcon} from "../../../assets/Left.svg"
import { useSwiper } from 'swiper/react';
export default function LeftButton() {
  const swiper=useSwiper();
  const [isBegining,setIsBegining]=useState(swiper.isBeginning)
  useEffect(()=>{
    swiper.on("slideChange",function(){
      setIsBegining(swiper.isBeginning)
    })
  },[])
  return (
     <div className={styles.left} >
      { !isBegining && <LeftIcon onClick={()=>swiper.slidePrev()}/>}</div>
  )
}
