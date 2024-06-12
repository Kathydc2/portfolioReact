import React from 'react'
import Photo from "../../images/Photo.JPG";
import "./Home.css"


export default function Home() {
  return (
    <div className='home'>
      
      <div className='selfContainer'>
      <img className="self" src={Photo} alt="Self" />
      </div>
    </div>
  )
}


