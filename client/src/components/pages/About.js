import React from 'react';
import profilePic from '../images/profile-pic.WebP';

export default function About() {
  return (
    <div className="container">
      <div className='aboutImageBox'>
      <img className="profileImage" src={profilePic} alt='Zac'/>
      </div>

      <div className='aboutTextBox'>
        <section>
      <h1>Hi, I'm Zac</h1>
      <h3> CSS3 | HTML5 | JavaScript | MySQL | NoSQL | React | CSS style libraries | NPM modules | Node.js </h3>
      <br></br>
      
      <p className="aboutMeDesc">
        I'm a junior web developer based in the Blue Mountains. Currently learning React. I'm Interested in procedural generation, dynamic created elements and learning AI/ML and AR/VR technology implementation</p>
      <br></br>
        <p className="aboutMeDesc">I'm still getting used to the way things work in React, and hope to strengthen my knowledge with more React projects. You can checkout my non React portfolio running on Heroku <a href='https://zachobbawebdev.herokuapp.com/'>here</a>
      </p>
      </section>
    </div>
    </div>
  );
}
