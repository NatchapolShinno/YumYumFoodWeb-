import React from "react";
import Burger from "../../image/BurgerKing.jpg";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { IoMdShareAlt } from "react-icons/io";
import { MdRateReview } from "react-icons/md";
import { Link } from 'react-router-dom';

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
        <Card.Title>
          <b>{project.restaurantName}</b>
        </Card.Title>
        <Card.Text>
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
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  );
};
export default ProjectSummary;