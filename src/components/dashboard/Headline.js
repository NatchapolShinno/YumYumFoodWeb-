import Button from 'react-bootstrap/Button';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Headline.css'

//Set of headlines to display on the main page
var headlines = [
    "your favorite cuisine.",
    "your next meal.",
    "the taste around you.",
    "the flavors of the world."
];

var marginleft = {
    marginLeft: "10%"
}

//Randomly select one headline
var selectHeadline = headlines[Math.floor(Math.random()*headlines.length)];

class Headline extends React.Component {
    render()
        {
        return (
            <div className="headline" style={marginleft}>
                <Button variant="success" href="discover" className="discover-btn">Discover</Button>
                <p className="headline">{selectHeadline}</p>
            </div>
        );
        }
}

export default Headline;