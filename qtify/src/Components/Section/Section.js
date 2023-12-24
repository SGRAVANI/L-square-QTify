import React,{useState,useEffect} from 'react'
import styles from "./Section.module.css";
// import Button from '../Button/Button';
// import axios from "axios";
import Card from '../Card/Card';
import { CircularProgress } from '@mui/material';
import Carousel from '../Carousel/Carousel';
import {Tab,Tabs} from "@mui/material"
import { fetchFilters } from '../api/api';

function TabPanel(props)
{
    if(props.val===props.index)
    {
      if(props.label==="all")
      {
        return ( props.data.length===0?<CircularProgress/>:
        <div className={styles.cardWrapper}>
          
            <Carousel data={props.data} renderComponent={(element)=><Card data={element} type={props.type} /> } /> 
          
           
          
        </div>)
        
      }
      else {
        let filteredData=props.data.filter((ele)=>ele.genre.label===props.label)
        //console.log(filteredData)
       return ( filteredData.length===0?<CircularProgress/>:
       <div className={styles.cardWrapper}>
         
           <Carousel data={filteredData} renderComponent={(element)=><Card data={element} type={props.type} /> } /> 
         
          
         
    </div>)
      }  
      }    
    // return (<div>
    //    { props.val===props.index &&<h1>{props.label}</h1>}
    // </div>)
}
export default function Section({title,data,type,key}) {
  //  console.log(data,"from section page")
const [carouselToggle,setCarouselToggle]=useState(true)
const [tabVal,setTabVal]=useState(0);
const [genereData,setGenreData]=useState([{key:"all",label:"all"}])
function comparator(a,b)
{
    if(a.id!=b.id)
    {
        return true
    }
    else{
        return false;
    }
}
useEffect(()=>{
    fetchFilters()
    .then((data)=>{
       
    setGenreData((prev)=>{
        return [...prev,...data.data]
    })
        // let ans=[];
        // ans.push(prev);
        // let flag;
        // let dataele;
        // for(let i=0;i<prev.length;i++)
        // {
        //     flag=0
        //     let ele=prev[i];
        //     for(let j=0;j<data.length;j++)
        //     {  dataele=data[j];
        //         if(ele.id===data[j].id)
        //         {
        //             flag=1;
        //             break;
        //         }

        //     }
        //     if(flag===0)
        //     {
        //         ans.push(dataele);
        //     }
        // }
        // console.log(ans)
       // return  ans})
    }

    )
    
},[])
useEffect(()=>{
    console.log(genereData)
},[genereData])
// useEffect(()=>setGenreData((prev)=>{
//   return  [...prev,{key:"all",label:"all"}]
// },[genereData]));
function handleChange(e,val){
    console.log(val)
    setTabVal(val)
}

function handleToggle()
{
    setCarouselToggle((prev)=>!prev);
}
    return type==="song"?
    (<div className={styles['section-wrapper']}>
        <div className={styles['section-padding']}>
     
     <div className={styles.header}>
        <h3>{title}</h3>
         {/* <h4 className={styles.toggleText} onClick={handleToggle}>{!carouselToggle?"Collapse All":"Show All"}</h4> */}
     </div>
     <div className={styles.tabWrapper}>
      <Tabs value={tabVal} sx={{
        "& button":{color:"white",fontSize:"16px",fontWeight:600,fontFamily:"poppins",textTransform:"capitalize"},
       "& button.Mui-selected":{ color:"white"}
    }}
       TabIndicatorProps={{
       sx:{backgroundColor:"#34C94B",height:4,borderRadius:"2px"}}}
        onChange={handleChange} >
        {/* <Tab label="All"/> */}
        {/* <Tab label="Item2"/>
        <Tab label="Item3"/> */}
        { genereData.length>1?genereData.map((ele)=>{
     
        return <Tab key={ele.key} label={ele.label}/>}) : null}
      </Tabs>
     { genereData.map((ele,index)=>{return (<TabPanel val={tabVal} index={index} key={index} label={ele.label} data={data} type={type}/>)})}
       {/* <TabPanel val={tabVal} index={0}>Item 1</TabPanel>
       <TabPanel val={tabVal} index={1}>Item 2</TabPanel>
       <TabPanel val={tabVal} index={2}>Item 3</TabPanel> */}
     </div>
     
     </div>
    </div>)

    
    :( <div className={styles['section-wrapper']}>
        <div className={styles['section-padding']}>
     
     <div className={styles.header}>
        <h3>{title}</h3>
         <h4 className={styles.toggleText} onClick={handleToggle}>{!carouselToggle?"Collapse All":"Show All"}</h4>
     </div>
     {data.length===0?<CircularProgress/>:
     <div className={styles.cardWrapper}>
        {!carouselToggle?(
            <div className={styles.wrappers}>
               { data.map((ele) =>  <Card  data={ele} type={type}  />)}
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
