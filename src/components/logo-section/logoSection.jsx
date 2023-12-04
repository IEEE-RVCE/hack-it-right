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
  return (
    <div className="LogoSectionAbout">
      <h1 style={{fontWeight: 600, fontSize: 35}}>{HACKATHON_TRACKS.title}</h1>
      <br />
      {HACKATHON_TRACKS.tracks.map(track => {
        return (
          <div>
            <h3 style={{fontWeight: 500, fontSize: 23}}>{track.title}</h3>
            <p>{track.description}</p>
          </div>
        );
      })}
    </div>
  );
}
function TrackCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={500}>
        <img className="d-block w-100 imgHeight" src={ai} />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100 imgHeight" src={fintech} />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100 imgHeight" src={blockchain} />
      </Carousel.Item>
    </Carousel>
  );
}

export {Logo, LogoSectionAbout, HackathonTracks, TrackCarousel};
