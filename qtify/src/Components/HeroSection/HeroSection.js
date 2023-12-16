import React from 'react'
import styles from "./HeroSection.module.css";
import {ReactComponent as VibratingHeadphones} from "../../assets/vibrating-headphone.svg"
export default function HeroSection() {
  return (
    <div className={styles.wrapper}>
   
        <p className={styles.heading}>100 Thousand Songs, add-free Over Thousand podcast episodes</p>
        <VibratingHeadphones/>

    </div>
  )
}
