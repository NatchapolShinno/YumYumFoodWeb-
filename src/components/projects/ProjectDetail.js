import React, { useState, useRef } from "react";
import { Carousel, Container, Row, Card, Button } from "react-bootstrap";
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
  const { restaurant, match, reviews, auth } = props;
  const [posts, setPosts] = useState([]);

  function addPost(title) {
    const restaurantID = match.params.id;
    const newPost = { id, title, restaurantID};
    setPosts([newPost, ...posts]);
    props.createReview(newPost);
    console.log(newPost);
    id += 1;
  } 
  const scrollRef = useRef(null);

  const scrollDown = () => scrollRef.current.scrollIntoView();

  if (restaurant) {
    return (
      <div>
        <Row style={{marginBottom: "5%"}}>
          <Card 
            style={{width: "100vw", margin: "5% 0 0 0", height: "85vh" }}
            border="light"
            >
            <Card.Img variant="top" src={BurgerIMG} style={{margin: "3% 0 0 0", paddingBottom: "3%", height: "50%", width: "auto", objectFit: "contain"}}/>
            <Card.Body style={{backgroundColor: "#D52323", boxShadow: "2px 2px 3px #9E9E9E", padding: "2% 5% 0 5%"}}>
              <Card.Title className="header" style={{fontWeight: "900", color: "white", textShadow: "2px 2px 2px #000000"}}>{restaurant.restaurantName}</Card.Title>
              <Card.Subtitle className="mb-2" style={{color: "#33CA7F"}}>
                {restaurant.priceType}
              </Card.Subtitle>
              <Card.Text style={{color: "white", fontFamily: "Open Sans"}}>
                <b>Phone:</b> {restaurant.phone}
                <br />
                <b>Address:</b> {restaurant.address}
                <br />
                <b>Open Hours:</b> {restaurant.openHours}
              </Card.Text>
            </Card.Body>
            <center><Button variant="outline-light" onClick={scrollDown} className="scrollButton">V</Button></center>
            <center><label className="subtitleText blinking">more info</label></center>
            <div ref={scrollRef}></div>
          </Card>
          
        </Row>
        <Input addPost={addPost} auth={auth}/>
        <div style={{margin: "0 10% 0 10%"}}>
          <Post reviews={reviews} />
        </div>
        </div>
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
  console.log(state);
  const id = ownProps.match.params.id;
  const restaurants = state.firestore.data.Restaurants;
  const reviews = state.firestore.ordered.Reviews;
  const restaurant = restaurants ? restaurants[id] : null;
  const auth = state.firebase.auth.uid ? state.firebase.auth.uid : null;
  return {
    restaurant: restaurant,
    reviews: reviews,
    ID: id,
    auth: auth
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    createReview: (review) => dispatch(createReview(review)),
  };
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(() => ["Restaurants"]),
  firestoreConnect((ownProps) => [
    { collection: "Reviews", where: [["restaurantID", "==", ownProps.match.params.id]]/*, orderBy: [["reviewFirstName","desc"]] */},
  ])
)(ProjectDetail);
