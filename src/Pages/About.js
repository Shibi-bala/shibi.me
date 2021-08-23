import React from 'react';
import './Styling.css';
import ProfilePic from '../Assets/ProfilePic.jpg';
import ShibiBalamuruganPurdue from '../Assets/ShibiBalamuruganPurdue.JPG';
import { Col, Container, Row } from 'react-bootstrap';
function About() {
  return (
    
      <div className="Narrow-Container">
        
        <Container fluid={true}>
        <Row > 
          <Col xs={12} md={6}>
           <img className="profilePic" src={ShibiBalamuruganPurdue} alt="Shibi at Purdue"/>
          </Col>
          <Col xs={12} md={6}>
            <ol style={{padding:0, margin:0}}>
              <p className="p">Hi! I'm Shibi Balamurugan. I am currently a sophomore computer engineering student at Purdue University. I am a detail-oriented creator who can bring unique solutions to life. Right now, I'm working on some really cool stuff at JP Morgan Chase as an intern.</p>
              <p className="p">For the previous few summers, I have been an intern at <a className="link" href="https://www.commvault.com/">Commvault</a>. There, I got the chance to work on cool projects from building a closed domain question answering system using <a className="link" href="https://ai.googleblog.com/2018/11/open-sourcing-bert-state-of-art-pre.html">Google BERT</a> to prototyping an internal log analysis tool.</p>
              <p className="p">I am also very passionate about making technology more accessible. In 2015, a friend and I launched <a className="link" href="https://www.projectspark.us/">Project Spark</a>, an initiative to encourage children in underprivileged and local communities to pursue an interest in CS and higher education by teaching foundational programming skills and providing essential technological infrastructure. Recently, I built a <a className="link" href="https://github.com/Shibi-bala/StereoSoundView">tool</a> to help the hearing impaired visualize the directional sounds heard in video games.</p>
              <p className="p">On campus, I am involved in <a className="link" href="https://engineering.purdue.edu/AMP/">Autonomous Motorsports Purdue</a>. We are currently a part of the <a className="link" href="https://www.indyautonomouschallenge.com/">Indy Autonomous Challenge</a>.</p>
            </ol>
        </Col>
        </Row>
        </Container>
      </div>
  );
}

export default About;
