import React from 'react'
import styles from "./HeroSection.module.css";
import {ReactComponent as VibratingHeadphones} from "../../assets/vibrating-headphone.svg"
export default function HeroSection() {
  return (
    <div className={styles.wrapper}>
   
        <div>
          <h1 className={styles.heading}>100 Thousand Songs, add-free</h1>
          <h1 className={styles.heading}>Over Thousand podcast episodes</h1>
        </div>
       
        {/* <VibratingHeadphones/> */}
        <div className={styles['image-holder']}>
        <img src={require("../../assets/vibrating-headphone.png")} 
        className={styles['img-style']}/>
        </div>
    </div>
  )
}
