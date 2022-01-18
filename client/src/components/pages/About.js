import React from 'react';
import profilePic from '../images/profile-pic.WebP';

export default function About() {
  return (
    <div className="container">
      <div className='grid-item-1'>
      <img className="profileImage" src={profilePic} alt='Zac'/>
      </div>

      <div className='grid-item-2'>
        <section>
      <h1>Hi, I'm Zac</h1>
      <h3> CSS3 | HTML5 | JavaScript | MySQL | NoSQL | React | CSS style libraries | NPM modules | Node.js </h3>
      <br></br>
      
      <p className="aboutMeDesc">
        I'm a junior Web developer based in the Blue Mountains. Currently learning React. I'm Interested in procedural generation, dynamic created elements and learning AI/ML and AR/VR technology implementations.
      </p>
      </section>
    </div>
    </div>
  );
}
