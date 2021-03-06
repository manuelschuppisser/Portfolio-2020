import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../assets/img/carousal/img1.jpg";
import Slide2 from "../../assets/img/carousal/img2.jpg";
import Slide3 from "../../assets/img/carousal/img3.JPG";
import ScrollDown from "../scroll-down/scroll-down.component";
import "./my-carousal.styles.css";

class MyCarousal extends Component {
  render() {
    return (
      <div id="home">
        <Carousel controls={false} indicators interval={2500} pauseOnHover={false}>
          <Carousel.Item>
            <img className="d-block w-100 custom-img" src={Slide1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 custom-img" src={Slide2} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 custom-img" src={Slide3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
        <ScrollDown />
      </div>
    );
  }
}

export default MyCarousal;
