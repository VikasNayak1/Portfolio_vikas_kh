import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import gripLine from '../assets/grip-lines-solid.svg';
import xmark from '../assets/xmark-solid.svg';

const Header = () => {
  const [listVisible, setListVisible] = useState(false);

function handleGriplineClick() {
  const list = document.getElementById("list");

  setListVisible(!listVisible);

  if (!listVisible) {
    list.style.animation = "slideInRight 0.5s forwards";
    list.style.display = "block";
  } else {
    list.style.animation = "slideInLeft 0.5s backwards";
    setTimeout(() => {
      list.style.display = "none";
    }, 500); // Hide the list after the animation completes
  }
}


  return (
    <nav >
      <h1>Vikas KH.</h1>
      <main>
        <Link to={"/"}>Home</Link>
        
        <HashLink to={"#about"}>About</HashLink>
        <HashLink to={"#skills"}>Skills</HashLink>
        <HashLink to={"#projects"}>Projects</HashLink>
        <HashLink to={"#education"}>Education</HashLink>
        <HashLink to={"#experience"}>Experience</HashLink>
        <Link to={"/contact"}>Contact</Link>
      </main>
      <div className="main2" style={{ position: 'relative' }}> 
        <img onClick={handleGriplineClick} src={listVisible ? xmark:gripLine} alt="hy"/>
        <div id="list" /*className={`list-container ${listVisible? 'active': ''}`}*/>
          <ul> 
            <li><Link to={"/"}>Home</Link></li>
            <li><HashLink to={"#about"}>About</HashLink></li>
            <li><HashLink to={"#skills"}>Skills</HashLink></li>
            <li><HashLink to={"#projects"}>Projects</HashLink></li>
            <li><HashLink to={"#education"}>Education</HashLink></li>
            <li><HashLink to={"#experience"}>Experience</HashLink></li>
            <li><Link to={"/contact"}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
