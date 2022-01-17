import React from 'react';

function Project(props) {
  return (
  <h2>{props.projectName}</h2>,
  <img src={props.projectImage} alt= {props.imageAltText}/>,
  <p>{props.description}</p>,
  <button type="button" onClick={props.GitHubLink}>GitHub</button>,
  <button type="button" onClick={props.websiteLink}>Website</button>
  )};

export default function Projects() {
  return (
    <div className="">
      <h1>Projects</h1>
      <p>
        Here are some of my projects
      </p>

      <Project projectName="React"
               projectImage=""
               imageAltText=""
               description="Description of Project"
               GitHubLink
               websiteLink
      />
      <Project/>
      <Project/>
      <Project/>
      <Project/>
      <Project/>
      <Project/>
    </div>
  );
}
