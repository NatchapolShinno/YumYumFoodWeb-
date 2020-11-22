import React from "react";
import { CardDeck, CardColumns } from "react-bootstrap";

import ProjectSummary from './ProjectSummary';

export default function ProjectList() {
  return (
    <CardColumns>
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
      

    </CardColumns>
  );
}
