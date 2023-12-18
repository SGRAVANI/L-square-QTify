import React from 'react'
import styles from "./Navbar.module.css"
import BannerLogo from '../BannerLogo/BannerLogo'
import Search from '../Search/Search'
import Button from '../Button/Button'
export default function Navbar() {
  return (
    <div className={styles.wrapper}>
        <BannerLogo/>
        <Search placeholder="Search an album of your choice"/>
        <Button text="Give Feedback"/>
    </div>
  )
}
