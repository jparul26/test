import React from 'react';

import Images1 from '../Images/d1.jpg';

import "./more.css"
class More extends React.Component {
  render() {
    return (
     <div>
         <div>
             <h2 style={{textAlign:"center",color:"Blue"}}> Current Initiatives</h2>
         </div>
         <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5" style={{marginLeft:"10%",marginRight:"10%",marginTop:"3rem"}}>
         <div class="container">
         <div class="flip-card">
       <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={Images1} alt="Avatar" style={{height:"500px",width:"700px"}}/>
     </div>
    <div class="flip-card-back">
       
      <h6>Scouting 50 of the aspiring minds, willing to achieve excellence.An initiative to provide world-class training to 50 talented students with serious aspirations to achieve their goal of success to work in challenging environment and grow fast</h6> 
      <button type="button" class="btn btn-primary btn-lg" style={{marginTop:"2rem"}}>Know More?</button>
      <button type="button" class="btn btn-secondary btn-lg" style={{marginTop:"2rem", marginLeft:"1rem"}}>Apply Now</button>
      <h6 style={{marginTop:"5rem"}}>Get help on improving your business scenario right from purchase to Marketing.</h6>
      <button type="button" class="btn btn-primary btn-lg" style={{marginTop:"2rem"}}>Wenestor</button>

    </div>
  </div>
         </div>
        
         
         </div>
         </div>
     </div>
    );
  }
}
export default More;