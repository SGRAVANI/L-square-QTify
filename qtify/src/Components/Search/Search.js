import styles from "./Search.module.css"
import React from 'react'
import {ReactComponent as SearchIcon} from "../../assets/Search-icon.svg"
export default function Search(props) {
 function handleSubmit(e)
 {
    e.preventDefault();
 }
    return (
    <div>
        <form onSubmit={handleSubmit} className={styles.wrapper}>
                   
                 <input type="text" placeholder={props.placeholder} required  className={styles.search}/>
               <button type="submit" className={styles["search-btn"]}><SearchIcon/></button>
          

        </form>
    </div>
  )
}
