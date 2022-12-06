import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import instruct1 from "../../images/india/instruct1.png"
import instruct2 from "../../images/india/instruct2.png"
import instruct3 from "../../images/india/instruct3.png"
import instruct4 from "../../images/india/instruct4.png"


export default function apkdownloadTurtorial() {
    return (
              <div className="row mt-5">
                <div className="col-sm-12">
                    <h4 className="text-center font-w-extrabold">
                    How to install Cash Clash
                  </h4>
                  <Carousel showThumbs={false} showStatus={false}>
                    <div>
                      <img src={instruct1} />
                      
                    </div> 
                     <div>
                      <img src={instruct2} />
                      
                    </div> 
                     <div>
                      <img src={instruct3} />
                      
                    </div> 
                     <div>
                      <img src={instruct4} />
                      
                    </div> 
                  </Carousel>
                </div>
              </div>
    )
}
