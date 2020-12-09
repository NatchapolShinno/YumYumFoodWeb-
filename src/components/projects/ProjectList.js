import React from "react";
import { CardColumns } from "react-bootstrap";

import ProjectSummary from './ProjectSummary';

export default function ProjectList({projects}) {
  return (
    <CardColumns>
      {projects && projects.map(project =>{
        return (      
        <ProjectSummary project = {project} key ={ project.id }/>
        )
      })}
      

    </CardColumns>
  );
}
