import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './PromoCarousel.css';

import McDonalds from '../../image/BurgerKing.jpg';
  
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

class PromoCarousel extends React.Component {
    render()
        {
        var snapRight = this.props.snapRight;

        /*FALSE is left, TRUE is right*/
        var positionClass = snapRight ? "snapRight" : "snapLeft";

        return (
            <div>
                <h1 className={"header promoHeader " + positionClass}>{this.props.headline}</h1>
                <p className={"promoSubtitle " + positionClass}>{this.props.subtitles}</p>
                <div className={"headerBack " + positionClass}></div>
                <div className={"headerBack light " + positionClass}></div>
                <hr className={"solid lineDiv " + positionClass}></hr>
                <Carousel responsive={responsive}>
                    <div className="carouselItem"><CarouselEntry restaurantName="McDonald's" rating="1" /></div>
                    <div className="carouselItem"><CarouselEntry restaurantName="Kurger Bing" rating="2" /></div>
                    <div className="carouselItem"><CarouselEntry restaurantName="Xetas Chicken" rating="3" /></div>
                    <div className="carouselItem"><CarouselEntry restaurantName="McDonald's" rating="4" /></div>
                </Carousel>;
            </div>
        );
        }
}

class CarouselEntry extends React.Component {
    render()
        {
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <Image src={McDonalds} className="carouselImage" fluid />
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="card">
                            <td className="header car-entry-header">{this.props.restaurantName}</td>
                            <td className="rating-bar"><StarRating rating={this.props.rating} /></td>
                        </tr>
                        <tr>
                            <p>{this.props.description}</p>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
        }
}

class StarRating extends React.Component {
    render()
        {

        var stars = []

        for(var i = 0; i < 5; i++) {
            if(i < this.props.rating)
                {
                stars.push(<Star filled={true} />);
                }
            else
                {
                stars.push(<Star filled={false} />);
                }
        }
    
        return(
            <div>
                {stars}
            </div>
        )
        }
}

class Star extends React.Component {
    render()
        {
        if(this.props.filled)
            {
            var star =  {
                        __html: '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg>'
                        }
            }
        else
            {
            var star =  {
                        __html: '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/> </svg>'
                        }
            }

        return (
            <div dangerouslySetInnerHTML={star} className="star">
            </div>
        )
        }
}

CarouselEntry.defaultProps = {
    restaurantName: "Placeholder Burgers",
    description: "Lorem ipsum dolor sit amet consecteteur adipiscing",
    rating: "5"
}


export default PromoCarousel;