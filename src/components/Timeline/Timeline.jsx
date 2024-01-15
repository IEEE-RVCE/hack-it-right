import React, {useEffect, useState} from 'react';
import './Timeline.css';

function TimeLine() {
  const [scrollDirection, setScrollDirection] = useState('down');

  const handleScroll = () => {
    const currentScroll = window.scrollY;

    if (
      currentScroll > (window.pageYOffset || document.documentElement.scrollTop)
    ) {
      setScrollDirection('down');
    } else {
      setScrollDirection('up');
    }
  };

  useEffect(() => {
    const timelineSections = document.querySelectorAll('.wrap .row');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      {threshold: 0.5} // Adjust the threshold as needed
    );

    timelineSections.forEach(section => {
      observer.observe(section);
    });

    window.addEventListener('scroll', handleScroll);

    // Cleanup observer and scroll event listener on component unmount
    return () => {
      timelineSections.forEach(section => {
        observer.unobserve(section);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <div class="wrap">
        <div class="center-line">
          
        </div>
        <div class="row row-1">
          <section>
            <i class="icon fas fa-home"></i>
            <div class="details">
              <span class="title">Registrations Begin</span>
              <span>
                <b>16th January 2024</b>
              </span>
            </div>
            <p className="timeline_text" style={{fontSize: '14px'}}>
              Hack4Soc 2.0 , the second iteration of our 24-hour flagship
              national-level hackathon, is opening its registration from 16th
              January 2024. Hurry up! Register soon!
            </p>
          </section>
        </div>
        <div class="row row-2">
          <section>
            <i class="icon fas fa-star"></i>
            <div class="details">
              <span class="title">Registrations Close</span>
              <span>
                <b>27th January 2024</b>
              </span>
            </div>
            <p className="timeline_text" style={{fontSize: '14px'}}>
              The registrations are going to be closed on 27th January. Register
              if you have not already!
            </p>
          </section>
        </div>
        <div class="row row-1">
          <section>
            <i class="icon fas fa-rocket"></i>
            <div class="details">
              <span class="title">Shortlisting the best teams!</span>
              <span>
                <b>29th January 2024</b>
              </span>
            </div>
            <p className="timeline_text" style={{fontSize: '14px'}}>
              Announcing the Shortlisted Teams<br></br>
              Teams shortlisted for the offline event, get ready!
            </p>
          </section>
        </div>
        <div class="row row-2">
          <section>
            <i class="icon fas fa-globe"></i>
            <div class="details">
              <span class="title">Announcing the Shortlisted Team</span>
              <span>
                <b>29th January 2024</b>
              </span>
            </div>
            <p className="timeline_text" style={{fontSize: '14px'}}>
              Teams shortlisted for the offline event, get ready!
            </p>
          </section>
        </div>
        <div class="row row-1">
          <section>
            <i class="icon fas fa-paper-plane"></i>
            <div class="details">
              <span class="title">Hack4Soc 2.0 - The Main event </span>
              <span>
                <b>3rd and 4th February 2024</b>
              </span>
            </div>
            <p className="timeline_text" style={{fontSize: '14px'}}>
              The main event day! Teams compete and hack the event.
            </p>
          </section>
        </div>
        {/*<div class="row row-2">
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
  </div>*/}
      </div>
    </div>
  );
}

export default TimeLine;
