import { render } from "@testing-library/react"
import React from "react"
import Container from "react-bootstrap/Container"
import { Row, Col } from 'reactstrap';
import example from "./assets/img/example.jpg"
import AnimatedPics from './AnimatedPics.tsx'
import { motion } from "framer-motion";
//import { AccordionElement } from "./AccordionElement";


class ContactUs extends React.Component {
    constructor(){
        super()
        this.state = {
          isHidden: true,
          isScrolled :false
        }
        
    }


    render(){
      const classHide = this.state.isHide ? 'hide' : '';
      const divVariables = {
        hover: {
          scale: 1
        }
      }
      
    return (
        <motion.div
          className="section section-about rtl"
          data-background-color="black"
          id="contactus-section"
          onScroll={this.state.isScrolled = true}
        >
            <Container fulid style={{height: "500px"}}>

            </Container>
        </motion.div>
            )
    }
}

export default ContactUs