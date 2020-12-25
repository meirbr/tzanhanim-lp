import React from "react";
import Carousel from "react-bootstrap/Carousel"
import CarouselCaption from "react-bootstrap/CarouselCaption"
import CarouselItem from "react-bootstrap/CarouselItem"
import firstImageSlide from "./assets/img/hero-slide-first.jpg"
import secondImageSlide from "./assets/img/hero-slide-second.jpg"
import thirdImageSlide from "./assets/img/hero-slide-third.jpg"
import introVidCover from "./assets/img/intro_vid_cover.jpg"
import introVid from "./assets/vids/intro_vid.mp4"
import Tzhanhanim from "./Tzhanhanim"
import ReactPlayer from "react-player"
import {motion} from "framer-motion"
import './App.scss';
import { Jumbotron } from "reactstrap";
import { Container, Row, Col } from "react-bootstrap"


function HeroSlide(){
    
    return(
  <div>
    
  <motion.div
  initial={{opacity: 0.4}}
  animate={{opacity: 1}}
className="Heroslidesection"
  >
    <Container
    className="Heroslidesection">
      <Row>
        <Col  className="on-md-disappear align-me m-auto">
        <motion.div
        initial={{y: -50}}
        animate={{y: 0}}
        transition={{duration: 2}}>
        <h1>פלגת ח"ץ - חרדים למצוינות</h1>
        <br />
      <p>
      "בסיירת היינו כאלה. היינו מהירים, חזקים ושקטים, כמו שדים. הלכנו בלילות הארוכים ברגליים חזקות. עלינו הרים והרגשנו שאנחנו יכולים להם. עשינו כל אשר לא האמינו שיכולים אנו לעשות והיינו בטוחים בכוחנו. היש הרגשה טובה לחייל מהיות שקט, עירני ומסוכן? היינו חולפים על פני ישובים, הרים, שדות, כמו צללים ולא נודע כי היינו, ונעלמנו."
        </p>
        <h5>-עפר פניגר</h5>
      </motion.div>
        </Col>
        <Col>
    <ReactPlayer
        url={"https://youtu.be/EBmCbsiGziA?t=313"}
        autoPlay
        muted
        controls
         playing={true}
         className="align-me"
      />
</Col>
</Row>
      {/*
    <Carousel.Caption>
    <Tzhanhanim />
      <h3>בדיקה</h3>
      <p>בדיקה</p>
    </Carousel.Caption>
      */}
      </Container>
  </motion.div>

  </div>
  
    )
}

export default HeroSlide