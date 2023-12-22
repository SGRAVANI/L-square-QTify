import { useOutletContext } from "react-router-dom";
import styles from "./HomePage.module.css";
import React from 'react'
import HeroSection from "../Components/HeroSection/HeroSection";
import Section from "../Components/Section/Section";
export default function HomePage() {
  let {data}=useOutletContext()
  let {topAlbums,newAlbums,songs}=data;
  //console.log(topAlbums,newAlbums)

  return (
    <>
    <HeroSection/>
    <div className={styles.wrapper}>
      <Section title="Top Albums" data={topAlbums} type="album"/>
      <Section title="New Albums" data={newAlbums} type="album"/>
      {/* <Section title="Songs" data={songs} type="songs"/> */}

    </div>
    </>
  )
}
