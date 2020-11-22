import React from "react";
import { Carousel, Container, Row, Card } from "react-bootstrap";
import BurgerIMG from "../../image/gourmet-burger-scaled.jpg";

const ProjectDetail = (props) => {
  const id = props.match.params.id;
  return (
    <Container style={{ padding: "20px 0 0 0" }}>
      <Row>
        <Carousel style={{ width: "100%", margin:"auto" }}>
          <Carousel.Item>
            <img className="d-block w-100" src={BurgerIMG} alt="First" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={BurgerIMG} alt="Second" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={BurgerIMG} alt="Third" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row>
        <Card style={{ width: "100%", margin: "20px 0 0 0" }}>
          <Card.Body>
            <Card.Title>Restaurant - {id}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Subtitle</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default ProjectDetail;
