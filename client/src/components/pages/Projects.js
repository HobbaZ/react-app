import React from 'react';
import {projectInfo} from '../ProjectInfo';

 function ProjectDisplay() {
  return (
    projectInfo.map((data)=> (
    <div className='projectBox'>
      <h2>{data.name}</h2>
      <img src={data.image} width={300} height={300} alt= {data.altText}/>
      <p>{data.description}</p>
      <button type="button" onClick={data.githubLink}>GitHub</button><br></br>
      <button type="button" onClick={data.deployedLink}>Website</button>
      </div>
      ))
  
  )};

export default function Project() {
  return (
    <div>
    <section>
      <h1>Projects</h1>
      <p>
        Here are some of my projects
      </p>
    </section>

    

      <div className='projectContainer'>
      <ProjectDisplay/>
    </div>
    </div>
  );
}
