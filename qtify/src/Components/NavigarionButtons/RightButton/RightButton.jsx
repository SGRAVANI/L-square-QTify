import React, { useEffect, useState } from 'react'
import styles from "./RightButton.module.css";
import {ReactComponent as RightIcon} from "../../../assets/Right.svg" 
import { useSwiper } from 'swiper/react';
export default function RightButton() {
  let swiper=useSwiper()
  let [isEnd,setIsEnd]=useState(swiper.isEnd);
  useEffect(()=>{
   swiper.on("slideChange",function(){
    setIsEnd(swiper.isEnd)
   })
  },[])
  return (
    <div className={styles.right} >
       {!isEnd &&<RightIcon onClick={()=>swiper.slideNext()}/>}
    </div>
  )
}
