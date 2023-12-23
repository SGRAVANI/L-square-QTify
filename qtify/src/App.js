import React, { useEffect, useState } from "react";

import Navbar from "./Components/Navbar/Navbar";
// import HeroSection from "./Components/HeroSection/HeroSection";
// import Card from "./Components/Card/Card";
// import Section from "./Components/Section/Section";
import { Outlet } from "react-router-dom";
import { fetchTopAlbums,fetchSongs,fetchNewAlbums,fetchFilters } from "./Components/api/api";

function App() {
let [data,setData]=useState({})
let [searchData,useSearchData]=useState() 
function generateData(key,source)
{
   source()
   .then((d)=>{
  //   if(data && data.length>0)
    // console.log(d)
  // {
    setData((prev)=>{
       let l={...prev,[key]:d}
      // console.log(l)
      return l;
    });
  // }
   });
  
}  
 
useEffect(()=>{
generateData("topAlbums",fetchTopAlbums);
generateData("newAlbums",fetchNewAlbums)
generateData("songs",fetchSongs)
},[])

  const{topAlbums=[],newAlbums=[],songs=[]}=data;
  return (
    <>
    {/* <Button text="Give Feedback"/>
    <Search placeholder="Search an album of your choice"/>
    <BannerLogo/> */}
    <div>
    {/* <Navbar searchData={[...topAlbums,...newAlbums]}/> */}
    <Navbar searchData={searchData}/>
    <Outlet context={{data:{topAlbums,newAlbums,songs}}}/>
    </div>
   
    {/* <HeroSection/>
    <Section title="Top Albums" url="https://qtify-backend-labs.crio.do/albums/top" cat="album"/>
    <Section title="New Albums" url="https://qtify-backend-labs.crio.do/albums/new" cat="album"/> */}
    {/* <Card data={data} type="album"/>
    <Card data={songData} type="song"/> */}
    </>
  );
}

export default App;
