import React, { Component } from "react";
import ImgProfile from "../../images/Person1.webp";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <div className="avatarImg">
          <img
            className="circle responsive-img"
            src={ImgProfile}
            alt="MD FAIAZ"
          />
        </div>
        <div className="card light-blue darken-4 z-depth-0 hide-on-large-only">
          <div className="card-content center social">
            <h2 className="grey-text text-lighten-3">
              <strong>MD Faiaz</strong>
            </h2>
            <h5 className="grey-text text-lighten-1">
              Full Stack Web Developer
            </h5>
            <a href="https://www.linkedin.com/in/jaaytran/" target="blank">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://github.com/JaayTran/" target="blank">
              <i className="fab fa-github-square fa-2x"></i>
            </a>
          </div>
        </div>
        <div className="card light-blue darken-4 z-depth-0">
          <div className="card-content">
            <h6 className="white-text">
              <strong>About Me</strong>
            </h6>
            <hr />
            <p className="grey-text text-lighten-3 pt">
              Hello Thank you for visiting my Website. My name is MD Faiaz. I am a Computer Engineering student from Toronto
              Metropolitan University and I have graduated from Software Engineering Technology from Centennial college and I am 
              currently entolled in Seneca college for Software Development which Bachelors of Technology. 
              
              I strive for what I want and compassionate about technology animation web development Database management and more.
              I am always learning new things every day and I am tempted by challenges and I try to lean and perfect from my experience and enjoy while doing so.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
