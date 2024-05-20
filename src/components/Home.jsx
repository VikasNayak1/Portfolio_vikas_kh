import React from "react";
import vg1 from "../assets/IMG_20221128_174643_821 (1).png";
import GmailImage from "../assets/gmail.jpg";
import LinkedinImage from "../assets/Linkedin.png";
import GitHubImage from "../assets/github.png";
const Home = () => {
  return (
    <>
      <div className="home1">
        <div className="text">
          <h1>Hi There,</h1>
          <h1>
            I'm Vikas <g>KH</g>
          </h1>
          <h3>
            I Am Into <g>Web Dev </g>
          </h3>
          
          <button>About Me</button>
          <div className="links">
          <a href="https://www.linkedin.com/in/vikas-kh-8bb44523a/">
          <button
              style={{
                animationDelay: "0.3s",
                backgroundImage:`url(${LinkedinImage})`,
                backgroundRepeat:"no-repeat",
                backgroundSize: "50px",
                backgroundPosition:"center",
              }}
            >
              F
            </button>
          </a>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCDkpHRQVhwsbZxNbTbNgzpMvNKcblzncmQMnMxntHWcPfmmrGHLRQjhpSjGkFgbhvpWbq"><button
              style={{
                animationDelay: "0.5s",
                backgroundImage:`url(${GmailImage})`,
                backgroundRepeat:"no-repeat",
                backgroundSize: "40px",
                backgroundPosition:"center",
              }}
            >
             
            </button></a>
            

            <a href="https://github.com/VikasNayak1">
          <button
              style={{
                animationDelay: "0.7s",
                backgroundImage:`url(${GitHubImage})`,
                backgroundRepeat:"no-repeat",
                backgroundSize: "50px",
                backgroundPosition:"center",
              }}
            >
              F
            </button></a>
          </div>
        </div>
        <div className="img">
          <img src={vg1} alt="img1" />
        </div>
      </div>

      <div className="home2" id="about">
        <div id="header">
        <h1>About Me</h1>
        </div>
              <div id="text">
              <p>" Hi , I am Vikas KH Second Year Computer Science and Engineering Student at <g>Vivekananda College of Engineering and Technology, Puttur.</g>"</p>
              <p>I'm Frontend Developer Currently focused on expanding my experience designing and developing high performing websites.</p>
              </div>
      </div>
    </>
  );
};

export default Home;
