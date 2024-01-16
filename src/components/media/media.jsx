import React from 'react';
import './media.css';
import {SOCIALS} from '../../Module/General';

export default function Media() {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div
        className="media"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <div>
          <p>Follow us on social media for updates</p>
        </div>
        <div>
          <div className="single">
           
            <a
              aria-label="Instagram Link"
              rel="noreferrer"
              target="_blank"
              href={SOCIALS.instagram}
              
            >
              <i className="fab fa-3x fa-instagram"></i>
            </a>
            
          </div>

         

          <div className="single">
            <a rel="noreferrer" target="_blank" href={SOCIALS.linkedin}>
              <i className="fab fa-3x fa-linkedin-in"></i>
            </a>
          </div>
       
        
        </div>
      </div>
    </div>
  );
}
