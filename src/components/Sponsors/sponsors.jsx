import {SOCIALS} from 'Module/General';
import React from 'react';
import './sponsors.scss';

function SponsorsHead() {
  return (
    <div>
      <h1 className="shead">Sponsors & Partners</h1>
    </div>
  );
}

function Sponsor(props) {
  return (
    <div className="Sponsor">
      {/*<h3>coming Soon</h3>*/}
      <a href={props.link} rel="noreferrer" target="_blank">
        {' '}
        <img src={props.srcx} alt="hack4soc"></img>
      </a>
    </div>
  );
}

function SponsorUS() {
  return (
    <div className="sponsorUS">
      {/* <h3
        style={{
          textAlign: 'center',
          
        }}
      >
        Interested in Sponsoring Us
      </h3>
      <a href={SOCIALS.email}>
        <button className="btn">
          <i
            className="fas fa-envelope"
            style={{
              marginRight: '10px'
            }}
          ></i>
          <span>Mail Us</span>
        </button>
      </a>{' '} */}
    </div>
  );
}

export {SponsorsHead, Sponsor, SponsorUS};
