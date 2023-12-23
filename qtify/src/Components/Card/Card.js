import React from 'react'
import styles from "./Card.module.css";
import { Tooltip } from '@mui/material';
import {Chip} from "@mui/material"
export default function Card({data,type}) {
//  console.log(data,type)
    function getCard(type)
    {
    if(type==="album")
    {
        const{image,title,follows,slug,songs}=data;

    return(
      
    <a href={`/album/${slug}`} style={{display:"inline-block"}}>
         <Tooltip title={`${songs.length} songs`} placement='top' arrow>
    <div className={styles['card-container']}>
    <div className={styles['card-body']}>
        <img src={image} alt="card-image" loading='lazy' style={{width:"100%",height:"85%",objectFit:"fill"}}/>
        <div className={styles['banner']}>
            {/* <div className={styles.pill}>
                <p>{likes}</p>
            </div> */}
            <Chip  label={`${follows} Follows`} size='small' className={styles.chip}/>
        </div>
    </div>
    <div className={styles['title-wrapper']}><p>{title}</p></div>
</div>
</Tooltip>

</a>

)
    }
    else if(type==="song")
    {
        const {likes,image,title}=data;
     return (<div className={styles['card-container']}>
     <div className={styles['card-body']}>
         <img src={image} alt="card-image" loading='lazy' style={{width:"100%",height:"85%",objectFit:"fill"}}/>
         
         <div className={styles['banner']}>
            {/* <div className={styles.pill}>
                <p>{likes}</p>
            </div> */}
            <Chip  label={`${likes} Likes`} size='small' className={styles.chip}/>
        </div>
         
         {/* <div className={styles['banner']}>
             <div className={styles.pill}>
                 <p>{`${likes} Likes`} </p>
             </div>
         </div> */}
     </div>
     <div className={styles['title-wrapper']}><p>{title}</p></div>
 </div>)
    }
    else{
        return (<></>)
    }
}

return getCard(type);

}
