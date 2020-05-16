import React, { Component } from 'react'
import {Link} from "react-router-dom"; 
import AppBar from '@material-ui/core/AppBar';
import './footer.css'
function scrollToTop() {
    console.log("top");
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
class Footer extends Component {
  
   
 render(){
  return (
      <div style={{marginBottom:"0%"}}>
       <AppBar position="static" style={{ backgroundColor:"black",width:"100%", align:"left" , float: "down",marginBotton:"0%"}} >
           <div style={{marginTop:"2%"}}></div>
            <div class="container">
           <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">
            We are a bootstrap startup with a vision to impact education and economics solving complex problems with simple solutions. Edunomics combines tech expertise and business intelligence to catalyze change and deliver results. We are employing top talent to provide a uniquely matching solution for your unique problem.
             <Link to ="/"> Edunomics</Link>
            </p>
          </div>
          <div class="col-xs-6 col-md-3">
          </div>
          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><Link to ="/" onClick={scrollToTop}>Home</Link></li>
              <li><Link to ="/" onClick={scrollToTop}>Home</Link></li>
            </ul>
          </div>  
          </div>
          <hr/>
          </div>
          <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-6 col-xs-12">
            <p class="copyright-text" style={{float: "left"}}>Copyright &copy;  All Rights Reserved by 
         <Link to="/"> Edunomics</Link>.
            </p>
           
          </div>
        </div>
      </div>
        </AppBar>
        </div>
  );}
}

export default Footer;