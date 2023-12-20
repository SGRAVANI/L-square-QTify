import React, { useState } from "react";

import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
import Card from "./Components/Card/Card";
import Section from "./Components/Section/Section";
function App() {
  let data={
    id: "7849cc7a-dec5-4d4f-92a9-d69e8c850773",
    title: "Blind Bike",
    description: "Nemo eligendi fugiat labore alias.\nUllam ratione commodi expedita praesentium.\nPorro repudiandae ipsam.\nPorro temporibus itaque harum est odit vero quia.",
    follows: 2202,
    image: "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    slug: "blind-bike",
    songs: [
        {
            id: "68c9becc-fd2f-45f9-9e0b-299844270d65",
            title: "All Along the Watchtower",
            artists: [
                "Melvin Breitenberg"
            ],
            genre: {
                key: "blues",
                label: "Blues"
            },
            likes: 45050,
            image: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            durationInMs: 54684
  }] }
    
let songData= {
  id: "a3ffd61d-afb9-439d-bcea-f76340b6878c",
  title: "Eight Days a Week",
  artists: [
      "Alexandra Rodriguez"
  ],
  genre: {
      key: "pop",
      label: "Pop"
  },
  likes: 17337,
  image: "https://images.pexels.com/photos/3331094/pexels-photo-3331094.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  durationInMs: 41833
};
console.log(songData)


  let [searchData,useSearchData]=useState()
  return (
    <>
    {/* <Button text="Give Feedback"/>
    <Search placeholder="Search an album of your choice"/>
    <BannerLogo/> */}
    <Navbar searchData={searchData}/>
    <HeroSection/>
    <Section title="Top Albums"/>
    {/* <Card data={data} type="album"/>
    <Card data={songData} type="song"/> */}
    </>
  );
}

export default App;
