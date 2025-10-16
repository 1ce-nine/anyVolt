import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import xLogo from '../assets/x_logo.png';
import instagramLogo from '../assets/instagram_logo.png';
import youtubeLogo from '../assets/youtube_logo.png';
import linkedinLogo from '../assets/linkedin_logo.png';

/* To be displayed at the bottom of each page */
function Footer() {
  return (
    <footer>
      {/* Add some margin between above the footer to add some space between the footer and rendered page */}
      <Container className="mt-5"> 
        {/* Add in white line across top of footer*/}
        <hr className="white-line"></hr>
        <Row>
          <Col xs={3}>
            {/* Footer link to X */}
            <a href="https://x.com/" target="_blank">
              <img src={xLogo} alt="x logo" className="img-fluid me-3" style={{ height: 'auto'}}/>
            </a>

            {/* Footer link to Instagram */}
            <a href="https://www.instagram.com/" target="_blank">
              <img src={instagramLogo} alt="instagram logo" className="img-fluid me-3" style={{ height: 'auto'}}/>
            </a>

            {/* Footer link to YouTube */}
            <a href="https://www.youtube.com/" target="_blank">
              <img src={youtubeLogo} alt="youtube logo" className="img-fluid me-3" style={{ height: 'auto'}}/>
            </a> 

            {/* Footer link to LinkedIn */}    
            <a href="https://www.linkedin.com/feed/" target="_blank">
              <img src={linkedinLogo} alt="linkedin logo" className="img-fluid" style={{ height: 'auto'}}/>
            </a> 
          </Col>
          
          <Col xs={3}>
            <p className='pb-2' style={{color: 'white', fontSize: '12px', fontWeight: "700"}}>Use cases</p>
            <p style={{color: 'white', fontSize: '11px'}}>Online whiteboard</p>
            <p style={{color: 'white', fontSize: '11px'}}>Team collaboration</p>
          </Col>
          <Col xs={3}>
            <p style={{color: 'white', fontSize: '12px', fontWeight: "700"}}>Help</p>
            <Link to ="/faqs" className="footer-link pb-5">FAQ</Link>
            <p></p>
            <p style={{color: 'white', fontSize: '11px'}}>Customer Service</p>
            <Link to="/contact" className="footer-link">Contact Us</Link> 
          </Col>
          <Col xs={3}>
            <p className='pb-2' style={{color: 'white', fontSize: '12px', fontWeight: "700"}}>Other</p>
            <p style={{color: 'white', fontSize: '11px'}}>Privacy Policy</p>
            <p style={{color: 'white', fontSize: '11px'}}>Sitemap</p>
            <p style={{color: 'white', fontSize: '11px'}}>Subscriptions</p>   
          </Col>                              
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;