import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import homeImage from './assets/img_1.webp';
import xLogo from './assets/x_logo.png';
import instagramLogo from './assets/instagram_logo.png';
import youtubeLogo from './assets/youtube_logo.png';
import linkedinLogo from './assets/linkedin_logo.png';

function Home() {
    return (
        <>
            <main>
                <Container>
                    <Row className="align-items-center header-row">
                        <Col md={6}>
                            <p className="anyvolt-logo" style={{color: 'white', fontSize: '64px', fontWeight: '700', marginBottom: 0}}>AnyVolt</p>
                            <p className="anyvolt-logo home-paragraph" style={{marginBottom: 0}}>Empowering Every Voltage,</p>
                            <p className="anyvolt-logo home-paragraph">Every Innovation,</p>
                            <p className="home-paragraph-small">Write something here about the company to drag in peoples attention and make them want to sign up to the company to either buy products or keep up to date with new advancements? </p>
                            <p className="home-paragraph-small" style={{marginBottom: 0}}>Could be a little about us section to draw people in.</p>
                            <p className="home-paragraph-small" style={{marginBottom: 0}}>Just typing anything at this stage just to get a sample.</p>
                            <p className="home-paragraph-small">Sign up today!</p>
                            <div>
                                <Button className="ms-5 me-5 mt-2"
                                    style={{
                                        backgroundColor: 'white',
                                        borderColor: 'white',
                                        color: 'navy',
                                    }}
                                    >Sign up      
                                </Button>      
                                <a href="https://x.com/" target="_blank">
                                    <img src={xLogo} alt="x logo" className="img-fluid me-3" style={{ height: 'auto'}}/>
                                </a>

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






                                
                            </div>      
                        </Col>
                        <Col md={6}>
                            <img src={homeImage} alt="Anyvolt Engine Image" className="img-fluid" style={{ height: 'auto'}}/>
                        </Col>
                    </Row>
                </Container>     
            </main>
        </>
    );
}

export default Home;