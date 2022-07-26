import React from 'react';
import './birds.scss';

export default function Waves(props) {
  return (
    <div
      className={`container ${props.type}`}
      style={{top: props.top, left: props.left}}
    >
      <div className="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div>
    </div>
  );
}
