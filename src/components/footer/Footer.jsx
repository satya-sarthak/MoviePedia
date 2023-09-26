 import './Footer.scss'
 import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

 

const Footer = () => {
  return (
      <footer className="footer">
          <ContentWrapper>
              <ul className="menuItems">
                  <li className="menuItem">Terms Of Use</li>
                  <li className="menuItem">Privacy-Policy</li>
                  <li className="menuItem">About</li>
                  <li className="menuItem">Blog</li>
                  <li className="menuItem">FAQ</li>
              </ul>
              <div className="infoText">
                  Special Thanks to TMDB for API;
                  <br></br>
                    Thank You
                  
              </div>
              <div className="socialIcons">
                  <span className="icon">
                      <FaFacebookF />
                  </span>
                  <span className="icon">
                      <FaInstagram />
                  </span>
                  <span className="icon">
                      <FaTwitter />
                  </span>
                  <span className="icon">
                      <FaLinkedin />
                  </span>
              </div>
          </ContentWrapper>
      </footer>
  );
};

export default Footer;