import React from "react";
import Burger from "../../image/BurgerKing.jpg";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { IoMdShareAlt } from "react-icons/io";
import { MdRateReview } from "react-icons/md";

import './ProjectSummary.css';

const ProjectSummary = ({project}) => {
  return (
    <Card style={{ width: "21rem" }}>
      <Card.Img
        variant="top"
        src={Burger}
        style={{ width: "100%", height: "14rem" }}
        fluid
      />
      <Card.Body>
        <Card.Title className="noWrap subheader">
          <b>{project.restaurantName}</b>
        </Card.Title>
        <Card.Text className="noWrap">
          <b>Address:</b> {project.address}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          <b>Hours:</b> {project.openHours}
        </ListGroupItem>
        <ListGroupItem>
          <b>{project.priceType}</b>
        </ListGroupItem>
        <ListGroupItem>
          <b>Phone:</b> {project.phone}
        </ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href={"/project/" + project.id}>
          <MdRateReview /> Write Review &nbsp;
        </Card.Link>

        <Card.Link href="#">
          <IoMdShareAlt /> Share
        </Card.Link>
      </Card.Body>
      <Card.Footer>
        {" "}
  <small className="text-muted">{project.authorFirstName} {project.authorLastName}</small>
        <small className="text-muted">{project.createAt}</small>
      </Card.Footer>
    </Card>
  );
};
export default ProjectSummary;