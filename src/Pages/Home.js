import React from 'react';
import './Styling.css';
import ProfilePic from '../Assets/ProfilePic.jpg';
function Home() {
  return (
    <div className="Narrow-Container">
      <img align="left" className="profilePic" src={ProfilePic} alt=""/>
      <p className="p">Hi! I'm Shibi Balamurugan. I am currently a sophomore computer engineering student at Purdue University. I am a detail-oriented creator who can bring unique solutions to life.</p>
      <p className="p">For the last four summers, I have been an intern at <a className="link" href="https://www.commvault.com/">Commvault</a>. There, I got the chance to work on cool projects from building a closed domain question answering system using <a className="link" href="https://ai.googleblog.com/2018/11/open-sourcing-bert-state-of-art-pre.html">Google BERT</a> to prototyping an internal log analysis tool.</p>
      <p className="p">I am also very passionate about making technology more accessible. In 2015, a friend and I launched <a className="link" href="https://www.projectspark.us/">Project Spark</a>, an initiative to encourage children in underprivileged and local communities to pursue an interest in CS and higher education by teaching foundational programming skills and providing essential technological infrastructure. Recently, I built a <a className="link" href="https://github.com/Shibi-bala/StereoSoundView">tool</a> to help the hearing impaired visualize the directional sounds heard in video games.</p>
      <p className="p">On campus, I am involved in <a className="link" href="https://engineering.purdue.edu/AMP/">Autonomous Motorsports Purdue</a>. We are currently a part of the <a className="link" href="https://www.indyautonomouschallenge.com/">Indy Autonomous Challenge</a>.</p>
    </div>
  );
}

export default Home;
