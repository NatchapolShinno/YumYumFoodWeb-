import React from "react";
import Burger from "../../image/BurgerKing.jpg";
import { Card, CardDeck, ListGroup, ListGroupItem } from "react-bootstrap";
import { IoMdShareAlt } from "react-icons/io";
import { MdRateReview } from "react-icons/md";

const ProjectSummary = () => {
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
          <b>Burker King - The Bright Mall</b>
        </Card.Title>
        <Card.Text>
          <b>Address:</b> The Bright mall 15/9 Rama2 Rd, Thakam,
          Bangkhunthain, Bangkok 10150
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          <b>Hours:</b> Open 24 hours
        </ListGroupItem>
        <ListGroupItem>
          <b>$$</b> - Fast food restaurant
        </ListGroupItem>
        <ListGroupItem>
          <b>Phone:</b> 02 365 6999
        </ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">
          <MdRateReview /> Write Review
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