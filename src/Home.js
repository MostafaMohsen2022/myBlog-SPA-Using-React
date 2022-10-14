
import React, {Component} from "react";
import Carousel from 'react-bootstrap/Carousel';
import bg1 from "./img/bg-1.jpg";
import bg2 from "./img/bg-2.jpg" ;
import bg3 from "./img/bg-3.jpg" ;


class Home extends Component{
  render(){
    return(
             <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bg1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bg2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bg3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
  }
  
}

export default Home;