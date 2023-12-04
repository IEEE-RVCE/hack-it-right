import React from 'react';
import {Player, Controls} from '@lottiefiles/react-lottie-player';
import {Myinfo} from '../Top-division-components/Top-division-components.jsx';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import './about.css';
import {
  HackathonTracks,
  Logo,
  LogoSectionAbout
} from '../logo-section/logoSection.jsx';
import {FirstPrize, PrizeHeading} from '../prize tracks/prizes.jsx';
import {Prizeinfo} from '../../Module/General';
import {Accordion} from '../FAQ/faq.jsx';
// import {theme} from "../themes_test/theme.jsx";
// import {Sponsor, SponsorsHead, SponsorUS} from "../Sponsors/sponsors.jsx";
import {Sponsor, SponsorsHead, SponsorUS} from '../Sponsors/sponsors.jsx';
import Birds from '../Birds/birds.jsx';
import Footer from '../Footer/footer.jsx';
import {Member} from '../team/team.jsx';
import koii from '../../Module/Assets/sponsorsLogos/koii.png';
import pattern from './pattern4.png';
import Media from '../media/media.jsx';
import CollabType from '../Themes/theme.jsx';
import TimeLine from '../Timeline/Timeline.jsx';
import filecoin from '../../Module/Assets/sponsorsLogos/filecoin.png';
import polygon from '../../Module/Assets/sponsorsLogos/polygon.png';
import alan from '../../Module/Assets/sponsorsLogos/alan.png';
import {TrackCarousel} from '../logo-section/logoSection.jsx';

import {
  TOP_SECTION,
  TeamInfo,
  // JudgesInfo,
  sponsorLogos,
  frequentlyAskedQuestions,
  NGOSection
} from '../../Module/General';
import NGOCard from 'components/NGOCard/NGOCard.jsx';

// javascript Map for sponsors

function SponsorGroup(props) {
  return (
    <Row
      justifyContent="center"
      alignItems="center"
      style={{
        backgroundColor: '#121930'
      }}
    >
      {props.map((s, key) => (
        <Col
          key={key}
          justifyContent="center"
          alignItems="center"
          sm={12}
          lg={4}
          md={6}
        >
          {' '}
          <Sponsor link={s.link} srcx={s.src} />{' '}
        </Col>
      ))}
      <SponsorUS />
    </Row>
  );
}

const makeSureYouhaveMoreSposors = arr => {
  if (arr.length > 0) {
    return arr;
  } else {
    return [];
  }
};

// javascript Map for sponsors end

// Prize group

function PrizeGroup(props) {
  return (
    <Row>
      {props.map((s, key) => (
        <Col key={key} className="" sm={12} lg={4} md={6}>
          <FirstPrize icon={s.icon} type={s.type} content={s.content} />
        </Col>
      ))}
    </Row>
  );
}

// Prize group ending
function TeamMembers(props) {
  return (
    <Row className="members">
      {props.map((s, k) => (
        <Col key={k} className="" sm={12} lg={4} md={4}>
          <Member info={s} />
        </Col>
      ))}
    </Row>
  );
}

function FrequentlyAsked(props) {
  return (
    <Row className="sf">
      {props.map((s, k) => (
        <Col key={k} className="" sm={12} lg={6} md={6}>
          <Accordion panels={s} />
        </Col>
      ))}
    </Row>
  );
}

const NGOCards = () => {
  return NGOSection.map((NGO, key) => {
    return (
      <NGOCard
        key={key}
        imgSrc={NGO.imgSrc}
        imgAlt={NGO.imgAlt}
        imgDescription={NGO.imgDescription}
      />
    );
  });
};

export default function HomePage(props) {
  window.onscroll = () => {
    toggleTopButton();
  };

  const scrollToTop = event => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  function toggleTopButton() {
    if (document.body.scrollHeight - document.body.scrollTop < 800) {
      document.getElementById('back-to-up').style.display = 'none';
    } else if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById('back-to-up').style.display = 'block';
    } else {
      document.getElementById('back-to-up').style.display = 'none';
    }
  }

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="top"
      className="Whole_div"
      style={{backgroundImage: `url(${pattern})`}}
    >
      <div className="color_sectiom">
        <Container fluid>
          <Row className="Row info">
            <Col className="info-div" sm={12} lg={7} md={8}>
              <Myinfo />
            </Col>
            <Col className="d-image" sm={12} lg={5} md={4}>
              <div className="animation">
                <Player
                  autoplay
                  loop
                  src="https://assets10.lottiefiles.com/packages/lf20_ytmy5gwa.json"
                  style={{height: '100%', width: '100%'}}
                  className="asset"
                  speed={0.5}
                >
                  <Controls
                    visible={false}
                    buttons={['play', 'repeat', 'frame', 'debug']}
                  />
                </Player>
              </div>
              <br />
            </Col>
          </Row>

          <Row className="mediaInfo">
            <Col className="" sm={12} lg={12} md={12}>
              <Media />
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid>
        {/* Logo section  */}
        <Row className=" logoSection" id="about">
          <Col className="info-div" sm={12} lg={8} md={8}>
            <LogoSectionAbout />
          </Col>
          <Col className="info-div" sm={12} lg={4} md={4}>
            <Logo />
          </Col>
        </Row>
        <Row className=" logoSection" id="about">
          <Col className='info-div' sm={12} lg={8} md={8}>
              <HackathonTracks />
          </Col>
          <Col className='info-div' sm={12} lg={4} md={4} style={{margin:'-20px'}}>
            
            <TrackCarousel />
            
          </Col>
  
        </Row>

        {/*Theme Section*/}
        <Row className="prizesection non-coding" id="themes">
          <PrizeHeading type="Presented by" />
          <CollabType />
        </Row>

        {/* <Row className="prizesection non-coding">
          <PrizeHeading type="Partnered NGOs" />
          <br />
          <NGOCards />
        </Row> */}

        {/*TimeLine Section*/}
        {/* <Row className="timeline" id="timeline">
          <PrizeHeading type="Hackathon TimeLine" />
          <TimeLine />
        </Row> */}

        {/* <Row className="prizesection" id="prizes">
          <PrizeHeading type="Prizes" />
        </Row>
        <PrizeState />
        <div class="row1-container margfromsponsor">
          <div class="box box-down orange">
            <h2>All Participants</h2>
            <img
              class="imgright"
              src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-prizes-circus-flaticons-lineal-color-flat-icons.png"
              alt=""
            />
            <h4>
              <b>Participation Certificate & Other exciting swags</b>
            </h4>
          </div>
        </div> */}

        <Birds top="100vh" left="0vh" type="" />

        {/* *******Prizes here ***** */}
        {/*        <Row className="prizesection" id="prizes">
          <PrizeHeading type="Prizes" /><br/>
          <div className="prize--cards">
          {Prizeinfo.map(PrizeGroup)}
          </div>
        </Row>*/}
        {/* ********Prizes ending here ***** */}

        {/* ********Sponsors here ***** */}

        {/* <Row className="sponsorSection" id="sponsors">
          <SponsorsHead />
          {sponsorLogos.map(SponsorGroup)}
        </Row> */}
        {/* ********Sponsors ending here ***** */}

        {/* ********Team here ***** */}
        {/* <h1 id="team">Mentor</h1>


        {JudgesInfo.map(TeamMembers)} */}

        <h1 id="teams">Our Team</h1>
        {/* {FOOTER.JOIN_TEAM.required && (
          <JoinTeam
            placeholder="Join our team"
            formLink={FOOTER.JOIN_TEAM}
            content="Interested in joining our team"
          />
        )} */}
        {TeamInfo.map(TeamMembers)}
        <br />
        <h1 id="faqs">FAQs</h1>
        {/* ********Frequently asked Questions here ***** */}
        <div className="Myfaqs">
          {frequentlyAskedQuestions.map(FrequentlyAsked)}
          {/* ********Frequently asked Questions ending here ***** */}
        </div>
      </Container>
      <br />
      <Footer />
      <div class="backtotop" id="back-to-up">
        <a onClick={scrollToTop}>
          <p>
            <i class="fa-solid fa-arrow-up"></i>
          </p>
        </a>
      </div>
    </div>
  );
}

const PrizeState = () => {
  return (
    <div class="row1-container">
      <div class="box red">
        <h2>All Tracks</h2>
        <img
          class="imgright"
          src="https://img.icons8.com/emoji/96/000000/1st-place-medal-emoji.png"
          alt=""
        />
        <h4>
          <b>Prize</b>: Cash Prize + Vouchers
        </h4>
      </div>
      <div class="box box-down cyan">
        <h2>All Tracks</h2>
        <img
          className="imgright"
          src="https://img.icons8.com/emoji/96/000000/2nd-place-medal-emoji.png"
          alt=""
        />
        <h4>
          <b>Prize</b>: Cash Prize + Vouchers
        </h4>
      </div>
    </div>
  );
};
