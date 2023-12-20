import React from 'react'
import styles from "./Navbar.module.css"
import BannerLogo from '../BannerLogo/BannerLogo'
import Search from '../Search/Search'
import Button from '../Button/Button'
export default function Navbar({searchData}) {
  return (
    <div className={styles.wrapper}>
        <a href="/"><BannerLogo/></a>
        <Search placeholder="Search an album of your choice" searchData={searchData}/>
       
        <Button text="Give Feedback" padding={{top:"10px",bottom:"10px",left:"16px",right:"16px"}}/>
    </div>
  )
}
