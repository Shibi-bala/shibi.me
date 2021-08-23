import React, {useState} from 'react';
import './Styling.css';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import myddle from '../Assets/myddle.png';
import myddleStack from '../Assets/myddleStack.png';
import SoundView from '../Assets/SoundView.png';
import {GitHub} from 'react-feather';

function WorkCard(title) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

    return (
        <div onClick={handleShow} style={{borderRadius: "8px",
        display: "flex",
        margin: 10,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        textDecoration : "none",
        backgroundColor:'grey', paddingTop:"20%", paddingBottom:"20%"}}>
            <p style={{fontFamily: 'Sofia-Pro', fontSize: 30}}>{title.title}</p>
            <Modal show={show} onHide={()=>{setShow(false);}} >
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={()=>{setShow(false);}}>
                  Close
                </Button>
                <Button variant="primary" onClick={()=>{setShow(false);}}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
        </div>
    );
}

// Projects: Myddle, Stero Sound View, Blockchain Ticket,
function Work() {
  const [show, setShow] = useState([false, false, false, false]);
  const handleShow = (i) => {
    const temp = [false, false, false, false];
    temp[i] = true;
    setShow(temp);
  }
  const handleHide = (i) => {
    const temp = [false, false, false, false];
    setShow(temp);
  }

  return (
    
      <div className="Narrow-Container">
        
        <Container fluid={true}>
        <Row > 
          <Col xs={12} md={6}>
          <div onClick={() => handleShow(0)} style={{borderRadius: "8px", display: "flex", margin:10, flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", textDecoration : "none", backgroundColor:'#8d80f5', paddingTop:"20%", paddingBottom:"20%"}}>
            <p style={{fontFamily: 'Sofia-Pro', fontSize: 30}}>Myddle</p>
          </div>
          {/*<div onClick={() => handleShow(2)} style={{borderRadius: "8px", display: "flex", margin: 10, flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", textDecoration : "none", backgroundColor:'#ffe74c', paddingTop:"20%", paddingBottom:"20%"}}>
            <p style={{fontFamily: 'Sofia-Pro', fontSize: 30}}>Blockchain Ticketing</p>
  </div>*/}
          </Col>
          <Col xs={12} md={6}>
          <div onClick={() => handleShow(1)} style={{borderRadius: "8px", display: "flex", margin: 10, flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", textDecoration : "none", backgroundColor:'#ff5964', paddingTop:"20%", paddingBottom:"20%"}}>
            <p style={{fontFamily: 'Sofia-Pro', fontSize: 30}}>Stereo Sound View</p>
          </div>
          </Col>
        </Row>
        </Container>
        <Modal show={show[0]} size='lg' className="modal-container custom-map-modal" onHide={()=>handleHide(0)} centered scrollable>
          <Modal.Header closeButton>
            <Modal.Title className='scalingTitleText'>Myddle</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{alignItems: 'center'}}>
            <div className="Modal-Container">
              <Row> 
                <Col xs={12} md={6}>
                  <p className="p">Myddle was built to be able to allow friends to decide on event locations and times that best suit each member of the group. Using location tracking, the app finds and recommends places at comparable distances from each person while taking into account everyone’s preferences and selected times.</p>
                  <p className="p">I came up with the idea for the app during the Summer of 2020 and spent around six months working on it.</p>
                </Col>
                <Col xs={12} md={6}>
                  <img className="profilePic" src={myddle} alt="Myddle Screens"/>
                </Col>
              </Row>
              <p className="p">The tech stack that ended up being used was actually very new to me at the time. This project was the first time I had used React on something at this scale. Along with that, I used mongoDB Atlas which I was completely learning from scratch (though the great documentation and features such as Atlas Search made it quite straightforward). </p>
              <img  src={myddleStack} alt="Myddle Tech Stack" style={{alignSelf:'center', maxWidth:"100%"}}/>
              <p className="caption">Basic Overview of Tech Stack</p>
              <p className="p">Currently, this project has all of its features built out but is on hold until I find more time to clean it up. It was actually on Testflight for a few months, and hopefully, I can find some time this Winter break to finish it :)</p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            {/*<a className="nav-link-icon" href="https://github.com/Shibi-bala/Meetup" target="_blank" rel="noopener noreferrer"><GitHub/></a>*/}
            <Button variant="secondary" onClick={()=>handleHide(0)}>
              
              Close
            </Button>
          </Modal.Footer>
        </Modal> 
        <Modal show={show[1]} size='lg' className="modal-container custom-map-modal" onHide={()=>handleHide(1)} centered scrollable> 
          <Modal.Header closeButton>
            <Modal.Title>Stereo Sound View</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{alignItems: 'center'}}>
            <div className="Modal-Container">
              <p className="p">This project has a pretty funny origin story. I had broken my only pair of headphones in a way that I couldn't hear out of the left side. After my jerry-rigged fix with a rubber band and eraser stopped working, I had a lot of trouble playing some of my favourite first-person video games. The scope of the problem goes beyond broken headphones; people with impaired hearing are put at a disadvantage, especially in games where directional sound cues are critical.</p>
              <p className="p">This program is meant to visualize the directional left and right sounds heard in many video games. It used C# and interacted with audio interfaces to determine which direction a sound was coming from. The program then displayed that information visually on an overlay.</p>
              <p className="p">Many improvements that could be made such as looking at different pitches in the audio to differentiate between footsteps and other sounds, but </p>
                <img  src={SoundView} alt="Stereo Sound View Example" style={{alignSelf:'center', maxWidth:"100%"}}/>
                <p className="caption">Screenshot of program running in Valorant</p>
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=>handleHide(1)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={show[2]} size='lg' className="modal-container custom-map-modal" onHide={()=>handleHide(2)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Blockchain Ticketing</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=>handleHide(2)} >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
  );
}



export default Work;
