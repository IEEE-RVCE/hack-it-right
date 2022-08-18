import React from 'react';
import './Timeline.css';

function TimeLine() {
  return (
    <div>
      <div class="wrap">
        <div class="center-line">
          <a href="#" class="scroll-icon">
            <i class="fas fa-caret-up"></i>
          </a>
        </div>
        <div class="row row-1">
          <section>
            <i class="icon fas fa-home"></i>
            <div class="details">
              <span class="title">Reporting Time (Participants)</span>
              <span>
                8:00 AM, <b>27th August</b>
              </span>
            </div>
            <p className="timeline_text" style={{fontSize: '14px'}}>
              The teams are required to report at the venue, by 8:00 AM.
            </p>
          </section>
        </div>
        <div class="row row-2">
          <section>
            <i class="icon fas fa-star"></i>
            <div class="details">
              <span class="title">Release of Problem Statement</span>
              <span>
                8:30AM, <b>27th August</b>
              </span>
            </div>
            <p className="timeline_text" style={{fontSize: '14px'}}>
              The problem statements will be released at 8:30AM. There will be
              three statements, of which the teams will be asked to give in
              their preference order.
            </p>
          </section>
        </div>
        <div class="row row-1">
          <section>
            <i class="icon fas fa-rocket"></i>
            <div class="details">
              <span class="title">Choosing Problem Statement</span>
              <span>
                8:45 AM, <b>27th August</b>
              </span>
            </div>
            <p className="timeline_text" style={{fontSize: '14px'}}>
              Google form will be shared at the venue to collect your preference
              order of the problem statements. The assignment will be by first
              come first serve basis.
            </p>
          </section>
        </div>
        <div class="row row-2">
          <section>
            <i class="icon fas fa-globe"></i>
            <div class="details">
              <span class="title">Inauguration</span>
              <span>
                9:00 AM, <b>27th August</b>
              </span>
            </div>
            <p className="timeline_text" style={{fontSize: '14px'}}>
              Inauguration of the event will be held at the venue.
            </p>
          </section>
        </div>
        <div class="row row-1">
          <section>
            <i class="icon fas fa-paper-plane"></i>
            <div class="details">
              <span class="title">Hackathon Starts</span>
              <span>
                10:00 AM, <b>27th August</b>
              </span>
            </div>
            <p className="timeline_text" style={{fontSize: '14px'}}>
              Hackathon will start from 10:00 AM.
            </p>
          </section>
        </div>
        <div class="row row-2">
          <section>
            <i class="icon fas fa-paper-plane"></i>
            <div class="details">
              <span class="title">Hackathon Ends</span>
              <span>
                10:00 AM, <b>28th August</b>
              </span>
            </div>
            <p className="timeline_text" style={{fontSize: '14px'}}>
              All the teams will be asked to make their final commits at
              10:00AM. Commits after this time wont be considered.
            </p>
          </section>
        </div>
        <div class="row row-1">
          <section>
            <i class="icon fas fa-globe"></i>
            <div class="details">
              <span class="title">Presentation to the Judges</span>
              <span>
                11:00 AM, <b>28th August</b>
              </span>
            </div>
            <p className="timeline_text" style={{fontSize: '14px'}}>
              All teams will be asked to present their prototype and their idea
              to the judges at 11:00 AM.
            </p>
          </section>
        </div>
        <div class="row row-2">
          <section>
            <i class="icon fas fa-globe"></i>
            <div class="details">
              <span class="title">Concluding ceremony and RESULTS!</span>
              <span>
                2:30PM, <b>28th August</b>
              </span>
            </div>
            <p className="timeline_text" style={{fontSize: '14px'}}>
              On August 28th, the valedictory ceremony followed by felicitation
              ceremony will be held at 2:30 pm.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default TimeLine;
