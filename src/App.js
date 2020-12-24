import React from "react"
import ReactDOM from "react"
import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import HeroSlide from './HeroSlide';
import Navbarr from './Navbarr';
import About from './About'
import Tash from './Tash'
import NavbarSecond from "./Example";
import AnimatedPics from './AnimatedPics.tsx'
import Articles from "./Articles";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

function App() {
  return (
      <section>
        <Navbarr />
        <HeroSlide />
        <About style={{zIndex: "-10"}} />
        <Tash />
        <Articles />
        <Footer />
        
      </section>
  );
}

export default App;
