import React from 'react';
import {projectInfo} from '../ProjectInfo';

 function ProjectDisplay() {
  return (
    projectInfo.map((data)=> (
    <div className='projectBox'>
      <h2>{data.name}</h2>
      <img className='projectImage' src={data.image} alt= {data.altText}/>
      <p>{data.description}</p>
      <button><a href={data.githubLink} target="_blank" rel='noreferrer'>GitHub</a></button><br></br>
      <button><a href={data.deployedLink} target="_blank" rel='noreferrer'>Website</a></button>
      </div>
      ))
  
  )};

export default function Project() {
  return (
    <div>
    <section>
      <h1>Projects</h1>
      <p>Here are some of my projects</p>
    </section>
      <div className='projectContainer'>
      <ProjectDisplay/>
    </div>
    </div>
  );
}
