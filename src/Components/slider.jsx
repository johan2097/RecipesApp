import React from 'react';
import sobrenosotros from "../images/about.png";

function About() {
  return (
    <div id='about'>
        <div className='about-text'>
          <h1>Con el patronicio de </h1>
        </div>
        <div className='about-image'>
          <img src={sobrenosotros} alt=""/>
        </div>
    </div>
  )
}

export default About;
