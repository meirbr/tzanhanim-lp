import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavLink from "react-bootstrap/NavLink"
import NavItem from "react-bootstrap/NavItem"
import NavDropdown from "react-bootstrap/NavDropdown"
import {motion} from "framer-motion"
import icon from './assets/img/icon.svg'

function Navbarr(){
    return (
        <Navbar collapseOnSelect expand="lg" variant="light" sticky="top" className="bg-red">
          
          <motion.img src={icon}
                    initial={{height: "3vh"}}
                    animate={{ height: "9vh" }}
                    transition={{ type: 'tween', duration: 0.7 }}
                    whileHover={{scale: 1.3, marginTop: "40px"}}
                    className="on-md-show"
                    />
  <Navbar.Toggle aria-controls="responsive-navbar-nav" src={icon} />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="rtl m-auto">
      <Nav.Link href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("about-section")
                      .scrollIntoView();
                  }}
                >
                  <motion.p  animate={{ fontSize: "25px" }} 
                  transition={{ type: 'tween', duration: 0.5 }}
                  style={{color: 'white', marginTop: "22px"}}
                  whileHover={{fontSize: "27px" }}
                  >
                    מהלך המסלול
                    </motion.p>
                    </Nav.Link>
                  <Nav.Link href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("tash-section")
                      .scrollIntoView();
                  }}
                >
                  <motion.p  animate={{ fontSize: "25px" }} 
                  transition={{ type: 'tween', duration: 0.5 }}
                  style={{color: 'white', marginTop: "22px"}}
                  whileHover={{fontSize: "27px" }}
                   >
                    אופי השירות
                    </motion.p></Nav.Link>
                    <motion.img src={icon}
                    initial={{height: "30px"}}
                    animate={{ height: "80px" }}
                    transition={{ type: 'tween', duration: 0.7 }}
                    style={{height: "80px", marginTop: "25px"}}
                    whileHover={{scale: 1.3, marginTop: "40px"}}
                    className="d-none d-md-block"
                    />
                  <Nav.Link href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("articles-section")
                      .scrollIntoView();
                  }}
                >
                  <motion.p  animate={{ fontSize: "25px" }}
                  transition={{ type: 'tween', duration: 0.5 }}
                  style={{color: 'white', marginTop: "22px"}}
                  whileHover={{fontSize: "27px" }}
                   >
                    המבצעים
                    </motion.p>
                  </Nav.Link>
                  <Nav.Link href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("footer-section")
                      .scrollIntoView();
                  }}
                >
                  <motion.p  animate={{ fontSize: "25px" }}
                  transition={{ type: 'tween', duration: 0.5 }}
                  style={{color: 'white', marginTop: "22px"}}
                  whileHover={{fontSize: "27px" }}
                   >
                    צור קשר
                    </motion.p>
                  </Nav.Link>
                  
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default Navbarr