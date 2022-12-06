import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Screen1 from "../../images/india/6.5_01.jpg"
import Screen2 from "../../images/india/6.5_02.jpg"
import Screen3 from "../../images/india/6.5_03.jpg"
import Screen4 from "../../images/india/6.5_04.jpg"
import Screen5 from "../../images/india/6.5_05.jpg"
import Screen6 from "../../images/india/6.5_06.jpg"
import Screen7 from "../../images/india/6.5_07.jpg"
import Screen8 from "../../images/india/6.5_08.jpg"
import Screen9 from "../../images/india/6.5_09.jpg"
import Screen10 from "../../images/india/6.5_10.jpg"
import Screen11 from "../../images/india/6.5_11.jpg"


export default function appscreenShots() {
  
    var settings = {
    speed: 500,
    slidesToShow: 1,
    centerMode:1,
    initialSlide:0,
  };
  return (
      <div style={{padding:"40px 12px"}}>
           <h4 className="font-w-extrabold">Preview</h4>
    <Slider {...settings}>
      <div>
        <img src={Screen1} style={{borderRadius:"1rem"}} width="90%"/>
      </div>
       <div>
        <img src={Screen2} style={{borderRadius:"1rem"}} width="90%"/>
      </div>
        <div>
        <img src={Screen3} style={{borderRadius:"1rem"}} width="90%"/>
      </div>
        <div>
        <img src={Screen4} style={{borderRadius:"1rem"}} width="90%"/>
      </div>
        <div>
        <img src={Screen5} style={{borderRadius:"1rem"}} width="90%"/>
      </div>
        <div>
        <img src={Screen6} style={{borderRadius:"1rem"}} width="90%"/>
      </div>
        <div>
        <img src={Screen7} style={{borderRadius:"1rem"}} width="90%"/>
      </div>
        <div>
        <img src={Screen8} style={{borderRadius:"1rem"}} width="90%"/>
      </div>
      <div>
        <img src={Screen9} style={{borderRadius:"1rem"}} width="90%"/>
      </div> 
      <div>
        <img src={Screen10} style={{borderRadius:"1rem"}} width="90%"/>
      </div>  
      <div>
        <img src={Screen11} style={{borderRadius:"1rem"}} width="90%"/>
      </div> 
    </Slider>
    </div>
  );
  
}
    

