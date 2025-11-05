{/* */}
{/* Import necessary libraries, components etc */}
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import homeImage from '/src/assets/img_1.webp';
import xLogo from '/src/assets/x_logo.png';
import instagramLogo from '/src/assets/instagram_logo.png';
import youtubeLogo from '/src/assets/youtube_logo.png';
import linkedinLogo from '/src/assets/linkedin_logo.png';
import homePageOne from '/src/assets/home-page-1.png';
import homePageTwo from '/src/assets/home-page-2.png';
import homePageThree from '/src/assets/home-page-3.png';
import cameraImage from '/src/assets/camera_image.png';
import Subscribe from '/src/components/Subscribe';

function Home() {
    return (
        <>
            <main>
                <Container>
                    <Row className="align-items-center header-row">
                        {/* Displays the first paragraph on the home page */}
                        <Col md={6}>
                            <p className="anyvolt-logo" style={{color: 'white', fontSize: '64px', fontWeight: '700', marginBottom: 0}}>AnyVolt</p>
                            <p className="anyvolt-logo home-paragraph" style={{marginBottom: 0}}>Empowering Every Voltage,</p>
                            <p className="anyvolt-logo home-paragraph">Every Innovation,</p>
                            <p className="home-paragraph-small">Write something here about the company to drag in peoples attention and make them want to sign up to the company to either buy products or keep up to date with new advancements? </p>
                            <p className="home-paragraph-small" style={{marginBottom: 0}}>Could be a little about us section to draw people in.</p>
                            <p className="home-paragraph-small" style={{marginBottom: 0}}>Just typing anything at this stage just to get a sample.</p>
                            <p className="home-paragraph-small">Sign up today!</p>
                            <div>
                                <Button 
                                    as={Link}
                                    to="/signup" 
                                    className="ms-5 me-5 mt-2"
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

                        {/* Display large home page image*/}
                        <Col md={6}>
                            <img src={homeImage} alt="Anyvolt Engine Image" className="img-fluid rounded-5" style={{ height: 'auto'}}/>
                        </Col>
                    </Row>

                    {/* Display decorative images underneath opening paragraph in new row*/}
                    <Row className="pt-5">
                        <Col className="d-flex justify-content-center">
                            <img src={homePageOne} alt="home-image-1" className="img-fluid" style={{ height: 'auto'}}/>
                            <img src={homePageTwo} alt="home-image-2" className="img-fluid" style={{ height: 'auto'}}/>         
                            <img src={homePageThree} alt="home-image-3" className="img-fluid" style={{ height: 'auto'}}/>                                                   
                        </Col>
                    </Row>
                    
                    {/* Shows two placeholder images for video content once available. */}
                    <Row className="pt-5">
                        <Col md={6} xs={6} className="text-center">
                            <div className="img-fluid" style={{
                                backgroundColor: '#cdcacaff',
                                width: '600px',
                                height: '350px',
                                display: 'inline-flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: '10px',
                                borderRadius: '8px'
                            }}>
                                <img src={cameraImage} alt="camera-image-1" className="img-fluid" style={{ height: 'auto'}}/>
                            </div>
                        </Col>

                        <Col md={6} xs={6} className="text-center">
                            <div className="img-fluid" style={{
                                backgroundColor: '#cdcacaff',
                                width: '600px',
                                height: '350px',
                                display: 'inline-flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: '10px',
                                borderRadius: '8px'
                            }}>
                                <img src={cameraImage} alt="camera-image-1" className="img-fluid" style={{ height: 'auto'}}/>
                            </div>
                        </Col>
                    </Row>
                </Container>     
                <Subscribe />
            </main>
        </>
    );
}

export default Home;