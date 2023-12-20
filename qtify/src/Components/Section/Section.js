import React,{useState,useEffect} from 'react'
import styles from "./Section.module.css";
import Button from '../Button/Button';
import axios from "axios";
import Card from '../Card/Card';
export default function Section({title}) {
   let [topAlbum,setTopAlbum]=useState([])
   let topAlbumUrl="https://qtify-backend-labs.crio.do/albums/top"
   let newAlbumUrl="https://qtify-backend-labs.crio.do/albums/new"
   let songsUrl="https://qtify-backend-labs.crio.do/songs"
   async function onLoad()
   {
    try{
   let response=await axios.get(topAlbumUrl)
   let data=await response.data;
   setTopAlbum (data);
   let l=data.map((ele)=>{return (<Card key={ele.id} data={ele}/>)})

    }
    catch(e)
    {
        console.log(e)
    }
   }
   useEffect( ()=>{
   onLoad();
   
   },[])
   useEffect(()=>{
   console.log(topAlbum)
   },[topAlbum])
    return (
    <div className='wrapper'>
    <div className={styles.sectionContainer}>
        <div className={styles.titleSection}>
            <p className={styles.title}>{title} </p>
            <Button text="collapse" padding={{left:0,right:0,top:0,bottom:0}}/>
        </div>
        <div className={`${styles.gridContainer} ${styles.cardGrid}`}>
         {topAlbum.length>0?topAlbum.map((ele)=>{return (<Card key={ele.id} data={ele} type="album"/>) })
         : ""}
        </div>
    </div>


    </div>
  )
}
