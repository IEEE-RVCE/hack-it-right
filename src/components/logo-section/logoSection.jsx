import React from 'react';
import './logoSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import sym from './sym.png';
import {HACKATHON_TRACKS} from '../../Module/General';
// import logo1 from './logo4.png';
import mainlogo from './LOGO.png';
// import logo3 from './logo3.png';
import ai from './ai-img.png';
import fintech from './fintech.png';
import blockchain from './blockchain.png';
import {MIDDLE_SECTION} from '../../Module/General';
import Carousel from 'react-bootstrap/Carousel';

function LogoSectionAbout() {
  return (
    <div className="LogoSectionAbout" style={{marginTop: '100px'}}>
      <h1 style={{fontSize: 50}}>{MIDDLE_SECTION.TITLE}</h1>
      <p>{MIDDLE_SECTION.LONG_DESCRIPTION}</p>
    </div>
  );
}

function Logo() {
  var myLogo;
  if (MIDDLE_SECTION.LOGO_EFFECT) {
    myLogo = (
      <div className="logoS">
        <img alt="img" className="Logo" src={mainlogo}></img>
      </div>
    );
  } else {
    myLogo = (
      <div className="logoS">
        {/*<img className="Logo sym" src={sym} alt="hack4soc" />
        <img className="Logo logo1" src={logo1} alt="hack4soc" />*/}
      </div>
    );
  }
  return myLogo;
}

function HackathonTracks() {
  const tracks = [
    {
      title: "Generative AI 4 Soc",
      description: "Empower positive change with AI. From personalized healthcare to inclusive education, explore how AI can transform society for the better."
    },
    {
      title: "Fintech 4 Soc",
      description: "Shape a better world with Fintech. Drive financial inclusion, support micro-entrepreneurs, and enable sustainable investments to make a lasting impact on communities"
    },
    {
      title: "Blockchain 4 Soc",
      description: "Unleash the potential of Blockchain for societal good. Revolutionize supply chains, enhance identity security, and create transparent solutions for humanitarian aid."
    }
  ];
  

  return (
    <div className="LogoSectionAbout">
      <h1 style={{ fontWeight: 600, fontSize: 35 }}>{HACKATHON_TRACKS.title}</h1>
      <br />
      <div className="track-cards">
        {tracks.map((track, index) => (
          <div key={index} className="track-card">
            <div className="track-description">
              <h3 style={{ fontWeight: 900, fontSize: 28 }}>{track.title}</h3>
              <p>{track.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



export {Logo, LogoSectionAbout, HackathonTracks};
