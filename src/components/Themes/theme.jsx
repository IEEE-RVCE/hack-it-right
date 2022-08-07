import React from 'react';
import './theme.css';

function CollabType(props) {
  return (
    <div className="HackathonTheme">
      <div class="wrapper">
        <div class="cards_wrap">
          <div class="card_item">
            <div class="card_inner">
              <img
                src="./images/IEEE-CS_LogoTM-orange.png"
                alt="IEEE Computer Society"
              />
              <br />
              <br />
            </div>
          </div>
          <div class="card_item">
            <div class="card_inner">
              <img src="./images/ieee_sight_rvce.png" alt="IEEE Sight" />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollabType;
