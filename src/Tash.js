import { render } from "@testing-library/react"
import React from "react"
import Container from "react-bootstrap/Container"
import { Row, Col } from 'reactstrap';
import example from "./assets/img/example.jpg"
import AnimatedPics from './AnimatedPics.tsx'
import { motion } from "framer-motion";
import rabbi from './assets/img/rabbi.svg'
import torah from './assets/img/torah.svg'
import food from './assets/img/food.svg'
import males_only from './assets/img/males_only_service.png'
import harediLife from './assets/img/jew.svg'
import synagogue from './assets/img/synagogue.svg'
//import { AccordionElement } from "./AccordionElement";


class Tash extends React.Component {
    constructor(){
        super()
        this.state = {
          isHidden: true,
          isScrolled :false
        }
        
    }

    hideBar = () => {
      const { isHide } = this.state

      window.scrollY > this.prev ?
      !isHide && this.setState({ isHide: true })
      :
      isHide && this.setState({ isHide: false });

      this.prev = window.scrollY;
   }

   componentDidMount(){
       window.addEventListener('scroll', this.hideBar);
   }

   componentWillUnmount(){
        window.removeEventListener('scroll', this.hideBar);
   }

    render(){
      const classHide = this.state.isHide ? 'hide' : '';
      const divVariables = {
        hover: {
          scale: 1.2
        }
      }
      
    return (
        <motion.div
          className="tash-section"
          data-background-color="black"
          id="tash-section"
          scale="0.95"
          variants={divVariables}
          transition={{ duration: 1.5, stiffness: 0.5 }}
        >
        <Container>
      <Row >
        <Col className={`topbar ${classHide}`} style={{marginTop: "30px"}}>
        <motion.h2 animate={{ fontSize: "50px" }}>שירות מותאם לחרדים</motion.h2>
    <Container class="m-auto">
      <Row style={{marginTop: "50px"}}>
        <motion.Col className="col-4"
        variants={divVariables}
        whileHover="hover">
        <motion.img
        src={harediLife}
        style={{height: "60px"}}
        />
        <motion.p>
          הקפדה מלאה על אורח חיים חרדי
        </motion.p>
        </motion.Col>
        <motion.Col className="col-4"
        variants={divVariables}
        whileHover="hover">
        <img
        src={synagogue}
        style={{height: "60px"}}
        />
        <motion.p>
          תפילות במניין
        </motion.p>
        </motion.Col>
        <motion.Col className="col-4"
        variants={divVariables}
        whileHover="hover">
        <img
        src={food}
        style={{height: "60px"}}
        />
        <motion.p>
          אוכל בכשרות מהדרין
        </motion.p>
        </motion.Col>
        </Row>
        <Row style={{marginTop: "60px"}}>
        <motion.Col className="col-4"
        variants={divVariables}
        whileHover="hover">
        <img
        src={males_only}
        style={{height: "60px"}}
        />
        <motion.p>
          שירות מגדרי - לגברים בלבד
        </motion.p>
        </motion.Col>
        <motion.Col className="col-4"
        variants={divVariables}
        whileHover="hover">
        <img
        src={rabbi}
        style={{height: "60px"}}
        />
        <motion.p>
          ליווי רוחני של רבנים ואברכים
        </motion.p>
        </motion.Col>
        <motion.Col className="col-4"
        variants={divVariables}
        whileHover="hover">
        <img
        src={torah}
        style={{height: "60px"}}
        />
        <motion.p>
          שיעורי תורה
        </motion.p>
        </motion.Col>
        </Row>
        <Row  style={{marginTop: "50px", marginBottom: "50px"}}>
        <h2 className="m-auto">המסלול מיועד לבני 18-21 בוגרי מוסדות לימוד חרדיים</h2>
      </Row>
    </Container>
            </Col>
      </Row>
        </Container>
        </motion.div>
            )
    }
}

export default Tash