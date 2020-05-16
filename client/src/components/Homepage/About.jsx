import React from 'react';
import Slide from 'react-reveal/Slide';
import Images1 from '../Images/c1.jpg';
class About extends React.Component {
  render() {
    return (
      <div style={{marginTop:"10%",marginRight:"20%",marginLeft:"20%"}}>
           <Slide right>
          <img src={Images1} style={{width:"40%", height:"40%"}}/>

        </Slide>
        <Slide left>
          <h5>We are a bootstrap startup with a vision to impact education and economics solving complex problems with simple solutions. Edunomics combines tech expertise and business intelligence to catalyze change and deliver results. We are employing top talent to provide a uniquely matching solution for your unique problem.</h5>

        </Slide>
      </div>
    );
  }
}

export default About;