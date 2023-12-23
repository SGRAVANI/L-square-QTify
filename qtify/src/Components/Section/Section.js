import React,{useState,useEffect} from 'react'
import styles from "./Section.module.css";
// import Button from '../Button/Button';
// import axios from "axios";
import Card from '../Card/Card';
import { CircularProgress } from '@mui/material';
import Carousel from '../Carousel/Carousel';
import LeftButton from '../NavigarionButtons/LeftButton/LeftButton';
import RightButton from '../NavigarionButtons/RightButton/RightButton';



export default function Section({title,data,type,key}) {
  //  console.log(data,"from section page")
const [carouselToggle,setCarouselToggle]=useState(false)
function handleToggle()
{
    setCarouselToggle((prev)=>!prev);
}
    return (<div className={styles['section-wrapper']}>
        <div className={styles['section-padding']}>
     <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>{!carouselToggle?"Collapse All":"Show All"}</h4>
     </div>
     {data.length===0?<CircularProgress/>:
     <div className={styles.cardWrapper}>
        {!carouselToggle?(
            <div className={styles.wrappers}>
               { data.map((ele) =>  <Card key={ele.id} data={ele} type={type}  />)}
            </div>
        ):
        ( <Carousel data={data} renderComponent={(element)=><Card data={element} type={type} /> } /> )
        //here in renderComponnet call back is passed which value will be supplied from Carousel
        }
       
     </div>
     
     }
     </div>
    </div>)





    //    let [topAlbum,setTopAlbum]=useState([])
//    let topAlbumUrl="https://qtify-backend-labs.crio.do/albums/top"
//    let newAlbumUrl="https://qtify-backend-labs.crio.do/albums/new"
//    let songsUrl="https://qtify-backend-labs.crio.do/songs"
//    async function onLoad()
//    {
//     try{
//    let response=await axios.get(url)
//    let data=await response.data;
//    setTopAlbum (data);
//    let l=data.map((ele)=>{return (<Card key={ele.id} data={ele}/>)})

//     }
//     catch(e)
//     {
//         console.log(e)
//     }
//    }
//    useEffect( ()=>{
//    onLoad();
   
//    },[])
//    useEffect(()=>{
//    console.log(topAlbum)
//    },[topAlbum])
//    function handleClick()
//    {
    
//    }
//     return (
//     <div className='wrapper'>
//     <div className={styles.sectionContainer}>
//         <div className={styles.titleSection}>
//             <p className={styles.title}>{title} </p>
//             <Button text="collapse" padding={{left:0,right:0,top:0,bottom:0}} onClick={handleClick}/>
//         </div>
//         <div className={`${styles.gridContainer} ${styles.cardGrid}` }>
//          {topAlbum.length>0?topAlbum.map((ele)=>{return (<Card key={ele.id} data={ele} type={cat}/>) })
//          : ""}
//         </div>
//     </div>


//     </div>
//   )
}
