import { render } from "@testing-library/react"
import React from "react"
import ReactDOM from 'react-dom';
import Container from "react-bootstrap/Container"
import { Row, Col } from 'reactstrap';
import example from "./assets/img/example.jpg"
import AnimatedPics from './AnimatedPics.tsx'
import { motion } from "framer-motion";
//import { AccordionElement } from "./AccordionElement";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import './App.scss'


class Footer extends React.Component {
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
      const prevScrollpos = window.pageYOffset;
      const isScrollingUp = true;
      window.onScroll = function() {
        const currentScrollPos = window.pageYOffset;
        isScrollingUp = (prevScrollpos > currentScrollPos) ? true : false;
        prevScrollpos = currentScrollPos;
      }
      
      let styleFooter = {
        marginTop: "1rem",
        padding: "1rem",
        backgroundColor: "#006947",
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        textAlign: "center",
        color: "#FFE6D9",
        display: isScrollingUp ? "block" : "none"
    }

    
    return (
        <motion.div className="footer"
          className="section section-about"
          data-background-color="black"
          id="footer-section"
          style={styleFooter}
          initial={{y: -10, opacity: 0.3}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 1.5}}
        >
            <Container fulid>
            <MessengerCustomerChat
    pageId="<PAGE_ID>"
    appId="<APP_ID>"
    htmlRef="<REF_STRING>"
  />
            <h1 className="h3">
                הרשם עכשיו! 052-480-5122
                </h1>
            </Container>
        </motion.div>
            )
    }
}

export default Footer