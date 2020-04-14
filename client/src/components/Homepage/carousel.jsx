import React, { Component } from "react";

import Images1 from '../Images/c1.jpg';
import Images2 from '../Images/c2.jpg';
import Images3 from '../Images/c3.jpg';


export default class carousel extends Component {
  render() {
    return (
      <div class= "mt-4 col-lg-8 mx-auto ">
         <div className = "col-lg-2 position-relative " style={{ position : "relative"}}>
                       
                       </div>
      <div class = " mt-1 text-center position-relative" style={{ position : "relative"}} >
          <div  class="slide center " data-ride="carousel">
  <div class="carousel-inner center">
    <div class="carousel-item active center" data-interval="2000">
    <img src={Images1} class="d-block display-flex w-100" alt="..." />
     <div class="carousel-caption"  style={{ color: "black"}}>
        <h3>Mentorship</h3>
      </div>
    </div>
    <div class="carousel-item" data-interval="2000">
    <img src={Images2} class="d-block  display-flex w-100" alt="..." />
    <div class="carousel-caption"  style={{ color: "black"}}>
        <h3>Mentorship</h3>
      </div>
    </div>
    <div class="carousel-item" data-interval="2000">
    <img src={Images3} class="d-block display-flex w-100" alt="..." />
    <div class="carousel-caption" style={{ color: "black"}}>
        <h3>Mentorship</h3>
      </div>
    </div>
  </div>

</div>
      </div>
      </div>
    )
  }
}