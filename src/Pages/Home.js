import React from 'react';
import './Styling.css';
import Button from 'react-bootstrap/Button'
import { Col, Container, Row } from 'react-bootstrap';

function Home() {
  return (
    <div className="Narrow-Container-Text-Centered">
      <p className="scalingTitleText">Hello! I'm Shibi. 👋</p>
      <p className="scalingTitleTextGrey">I'm a Computer Engineering student at Purdue.</p>
      <Button variant="outline-primary" href="#/about" size="lg" style={{height:40, width:140, fontSize:18, margin:20}} >Read More</Button>
    </div>
  );
}

export default Home;
