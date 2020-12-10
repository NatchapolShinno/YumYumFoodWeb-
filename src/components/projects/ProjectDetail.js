import React, { useState } from "react";
import { Carousel, Container, Row, Card } from "react-bootstrap";
import BurgerIMG from "../../image/gourmet-burger-scaled.jpg";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Input from "../projects/Input";
import Post from "../projects/Post";
import "../projects/review.css";
import { createReview } from "../../store/actions/projectActions";


let id = 1;

const ProjectDetail = (props) => {
  const { restaurant, match } = props;

  const [posts, setPosts] = useState([]);
  function addPost(title) {
    const restaurantID = match.params.id;
    const newPost = { id, title, restaurantID};
    setPosts([newPost, ...posts]);
    createReview(newPost);
    console.log(newPost);
    id += 1;
  }
  function deletePost(id) {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  }

  if (restaurant) {
    return (
      <Container style={{ padding: "20px 0 0 0" }}>
        <Row>
          <Carousel style={{ width: "100%", margin: "auto" }}>
            <Carousel.Item>
              <img className="d-block w-100" src={BurgerIMG} alt="First" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
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
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row>
          <Card style={{ width: "100%", margin: "20px 0 0 0" }}>
            <Card.Body>
              <Card.Title>{restaurant.restaurantName}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {restaurant.priceType}
              </Card.Subtitle>
              <Card.Text>
                <b>Phone:</b> {restaurant.phone}
                <br />
                <b>Address:</b> {restaurant.address}
                <br />
                <b>Open Hours:</b> {restaurant.openHours}
              </Card.Text>
              <Card.Link href="#">Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Row>
        <Input addPost={addPost} />
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            deletePost={deletePost}
          />
        ))}
      </Container>
    );
  } else {
    return (
      <Container>
        <p>Loading Page...</p>
      </Container>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  //console.log(state);
  const id = ownProps.match.params.id;
  const restaurants = state.firestore.data.Restaurants;
  const restaurant = restaurants ? restaurants[id] : null;
  return {
    restaurant: restaurant,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    createReview: (title) => dispatch(createReview(title)),
  };
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(() => ["Restaurants"])
)(ProjectDetail);
