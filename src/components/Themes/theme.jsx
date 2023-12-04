import React from 'react';
import './theme.css';

function CollabType(props) {
  return (
    <div className="HackathonTheme" style={{width:"100%"}}>
      <div class="wrapper" >
        <div class="cards_wrap" >
          <div class="card_item" style={{width:"100%",display:'flex',justifyContent:'center'}}>
            <div class="card_inner" style={{width:"33%"}}>
              <img
                src="./images/IEEE RVCE Computer Society Logo (1).png"
                alt="IEEE Computer Society"
              />
              <br />
              <br />
            </div>
          </div>
          {/* <div class="card_item">
            <div class="card_inner">
              <img src="./images/ieee_sight_rvce.png" alt="IEEE Sight" />
              <br />
              <br />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default CollabType;
