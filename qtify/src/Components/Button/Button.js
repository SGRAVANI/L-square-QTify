import React from 'react'
import styles from "./Button.module.css"
export default function Button(props) {
  return (
    <button className={styles.button} style={{paddingLeft:props.padding.left,paddingRight:props.padding.right,paddingTop:props.padding.top,paddingBottom:props.padding.bottom}}>{props.text}</button>
  )
}
