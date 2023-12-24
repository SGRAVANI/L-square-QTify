import React from 'react'
import styles from "./Navbar.module.css"
import BannerLogo from '../BannerLogo/BannerLogo'
import Search from '../Search/Search'
import Button from '../Button/Button'
import {Link} from "react-router-dom"
export default function Navbar({searchData}) {
  return (
    <div className={styles.wrapper}>
        <Link to="/" style={{cursor:'pointer'}}><BannerLogo/></Link>
        <Search placeholder="Search an album of your choice" searchData={searchData}/>
       
        <Button text="Give Feedback" padding={{top:"10px",bottom:"10px",left:"16px",right:"16px"}}/>
    </div>
  )
}
