import { render } from "@testing-library/react"
import React from "react"
import Container from "react-bootstrap/Container"
import { Row, Col } from 'reactstrap';
import example from "./assets/img/example.jpg"
import AnimatedPics from './AnimatedPics.tsx'
import {motion} from 'framer-motion'
import 'bootstrap/dist/css/bootstrap.min.css';
import AccordionElement from "./AccordionElement.tsx";
import MyAccordion from './MyAccordion'
import './App.scss';
import icon from './assets/img/icon.svg'


class About extends React.Component {
    constructor(){
        super()
        this.state = {}
    }
    render(){
    return (
        <div
        className="about-section" 
          data-background-color="black"
          id="about-section"
        >
        <Container fluid  className="align-center">
      <Row>
        <Col style={{marginBottom: "30px"}}>
          <div className="on-md-show align-center ">
          <motion.img src={icon}
                    initial={{height: "30px"}}
                    animate={{ height: "80px" }}
                    transition={{ type: 'tween', duration: 0.7 }}
                    style={{height: "80px", marginTop: "25px", marginBottom: "10px"}}
                    whileHover={{scale: 1.3, marginTop: "40px"}}
                    />
          <h2 style={{color: "#2a2941"}}>פלוגת ח"ץ - חרדים למצוינות</h2>
          <motion.p 
          style={{marginTop: "30px", fontSize: "24px"}}
          initial={{x: 50, opacity: 0.3}}
          animate={{x: 0, opacity: 1}}
          transition={{stiffness: 0.5, duration: 2}}
          >"בסיירת היינו כאלה. היינו מהירים, חזקים ושקטים, כמו שדים.
           הלכנו בלילות הארוכים ברגליים חזקות. עלינו הרים והרגשנו שאנחנו יכולים להם.
           עשינו כל אשר לא האמינו שיכולים אנו לעשות והיינו בטוחים בכוחנו. היש הרגשה טובה לחייל מהיות שקט, עירני ומסוכן? 
          היינו חולפים על פני ישובים, הרים, שדות, כמו צללים ולא נודע כי היינו, ונעלמנו."
<br />
- עפר פניגר</motion.p>
</div>
<motion.h2  animate={{ fontSize: "50px" }} style={{textAlign: "center"}}>מהלך המסלול</motion.h2>
<MyAccordion/>
            </Col>
        <Col className="col-6" className="AnimatedPics-container d-md-block d-none" style={{objectFit: "contain", display: "flex"}}>
        <AnimatedPics />
        </Col>
      </Row>
        </Container>
        </div>
            )
    }
}

export default About