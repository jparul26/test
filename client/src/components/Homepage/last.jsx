import React from 'react';
import Slide from 'react-reveal/Slide';
import Images1 from '../Images/p1.png';
import Images2 from '../Images/p2.jpg';
class Last extends React.Component {
  render() {
    return (
      <div style={{marginTop:"10%",marginRight:"20%",marginLeft:"20%"}}>
          <div style={{marginTop:"5%"}}>
         <Slide right>
          <img src={Images1} style={{width:"40%", height:"40%"}}/>
         </Slide>
         
         
        <Slide left>
            <h5>Industry Expert As Professor</h5>
          <h6>Real World Buisness/Technical Learning, as well as there is evident gap of qualified good professors also. Get connected with them to get knowledge.</h6>
       </Slide>
       </div>
       <div style={{marginTop:"8%"}}>
       <Slide right>
          <img src={Images2} style={{width:"40%", height:"40%"}}/>
         </Slide>
         
         
        <Slide left>
            <h5>Why & What is best for me Next</h5>
          <h6>We all do have dreams, and to achieve them we needs to be very clear about what need to be done next. And sometime we even need handholding for How?

</h6>
       </Slide>
       </div>
      </div>
    );
  }
}

export default Last;