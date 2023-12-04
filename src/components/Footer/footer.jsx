import React, {useEffect, useState} from 'react';
import './footer.scss';
// import Insta from "./icons8-instagram.svg";
// import Dis from "./icons8-discord.svg";
// import Linked from "./icons8-linkedin-2.svg";
// import Mail from "./icons8-mail.svg";
// import DevPost from "./icons8-dev-post.svg";
// import PrivacyPolicy from "./Privacy policy.pdf";
// import TermsOfUse from "./Terms of use.pdf";
// import Twitter from "./icons8-twitter.svg";
// import {Btn} from "../Top-division-components/Top-division-components.jsx";
import logo from '../../Module/Assets/LOGO.png';
// import cross from "./cross.svg";
import {SOCIALS, FOOTER} from '../../Module/General';
import IEEE_RVCE_Logo_Blue from '../../Module/Assets/IEEE RVCE Logo_Blue.png';
// function GithubTemplate({hideTemplate}) {
//   return (
//     <div className="template">
//       <div className="template-left">
//         <p>
//           Join us to{" "}
//           <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>Gear Up</a>,
//           where we will be hosting PUBLIC workshops, tech talks, panel
//           discussions, and career sessions!
//         </p>
//       </div>
//       <img alt="img" onClick={hideTemplate} src={cross} />
//     </div>
//   );
// }

export default function Footer() {
  const [template, setTemplate] = useState(false);
  const [viewTemplate, setViewTemplate] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  const listenScrollEvent = e => {
    if (window.scrollY > 2800) setTemplate(true);
    else if (window.scrollY < 2800) setTemplate(false);
  };

  return (
    <div>
      <footer>
        <div class="content">
          <div class="top">
            <div class="logo-details">
              <img src={logo} className="imgfooter" />
              <span class="logo_name">&nbsp;hack4soc 2.0</span>
            </div>
            <div class="media-icons">
              <a target="_blank" href={SOCIALS.discord} rel="noreferrer">
                <i class="iconlink fab fa-discord"></i>
              </a>
              <a target="_blank" href={SOCIALS.twitter} rel="noreferrer">
                <i class="iconlink fab fa-twitter"></i>
              </a>
              <a target="_blank" href={SOCIALS.instagram} rel="noreferrer">
                <i class="iconlink fab fa-instagram"></i>
              </a>
              <a target="_blank" href={SOCIALS.linkedin} rel="noreferrer">
                <i class="iconlink fab fa-linkedin-in"></i>
              </a>
              <a target="_blank" href={SOCIALS.email} rel="noreferrer">
                <i class="iconlink fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
          <div
            class="link-boxes"
            style={{display: 'flex', justifyContent: 'center'}}
          >
            <ul class="box1 input-box1">
              {/*<li class="link_name">Subscribe</li>*/}
              {/* <img src={IEEE_RVCE_Logo_Blue} className="imgfooterdsc" /> */}
              <img
                src="./images/IEEE RVCE Computer Society Logo (1).png"
                alt="IEEE Computer Society"
                className="imgfooterdsc"
              />
            </ul>
          </div>
        </div>
        <div class="bottom-details">
          <div class="bottom_text">
            <span class="copyright_text">Copyright © 2023 hack4soc 2.0</span>
            <span class="policy_terms">Made with ❤️</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
