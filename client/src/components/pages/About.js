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
      <h1>Hi, I'm Zac</h1><br></br>
      <h3> CSS3 | HTML5 | JavaScript | MySQL | NoSQL | React | CSS style libraries | NPM modules | Node.js | APIs </h3>
      <br></br>
      
      <p className="aboutMeDesc">
      I'm a junior full stack web developer now based in the greater Sydney area. I enjoy working on interesting projects, whether that's refactoring a code base to make it simpler and faster, 
      implementing that new feature or turning an idea into a working app or website, I'm up for the challenge. <br></br><br></br> Check out some more of my projects <a href='https://github.com/HobbaZ'>here</a> or check out my <a href='https://www.linkedin.com/in/zachary-hobba-52aaa182/'>LinkedIn</a> if you want to have a chat.
      </p>
      </section>
    </div>
    </div>
  );
}
