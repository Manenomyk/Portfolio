import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as main from 'react-bootstrap';
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaGitlab } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import baha from './Images/baha.jpeg';
import mik from './Images/mik.jpeg';
import { TfiMedallAlt } from "react-icons/tfi";
import { GiSkills } from "react-icons/gi";
import { BsCodeSlash } from "react-icons/bs";
import { DiCodeigniter } from "react-icons/di";
import amal from './Images/dashboard.png';
import { GoMailRead } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import cv from './Images/resume.docx';
import { FaHome } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { BiBookContent } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { RiProfileLine } from "react-icons/ri";
import { TiContacts } from "react-icons/ti";
import vengi from './Images/veng.png';
import blue from './Images/blue.png';
import account from './Images/account.png';
import Order from './Images/Order.jpg';
import { GoVerified } from "react-icons/go";
import * as rev from 'react-reveal';

function App() {
  return (
<div className='body'>
<main.Container id='Home' className='container1'>
      <main.Row className='bg-dark'>
        
      
      <main.Col className='navlinks mx-auto' md={5}  sm={6} xs={10} lg={4}>
      {/* <rev.Zoom delay={1200}>  */}
          <div className='nav d-flex justify-content-center'>
          <rev.Fade left delay={1500}>
            <div>
              <a id='homelink' href="#Home"><FaHome  style={{fontSize:"2rem"}} /></a>
            </div>
            </rev.Fade>

            <rev.Fade left delay={1700}>
            <div>
            <a id='aboutlink' href="#About"><FaUserCircle style={{fontSize:"2rem"}} /></a>
            </div>
            </rev.Fade>

            <rev.Fade left delay={1900}>
            <div>
            <a id='expelink' href="#Experience"><BiBookContent style={{fontSize:"2rem"}} /></a>
            </div>
            </rev.Fade>

            <rev.Fade right delay={1900}>
            <div>
            <a id='servlink' href="#Services"><RiServiceLine style={{fontSize:"2rem"}} /></a>
            </div>
            </rev.Fade>
            
            <rev.Fade right delay={1700}>
            <div>
            <a id='portlink' href="#Portfolio"><RiProfileLine style={{fontSize:"2rem"}}/></a>
            </div>
            </rev.Fade>

            <rev.Fade right delay={1500}>
            <div>
            <a id='contlink' href="#Contact"><TiContacts style={{fontSize:"2rem"}} /></a>
            </div>
            </rev.Fade>

          </div>
        {/* </rev.Zoom>  */}

        </main.Col>
        <main.Col id='col1' className='mx-auto text-center' lg={6}>

          <rev.Zoom delay={500}>
          <h5 style={{color:"yellow"}}>Hello, I'm</h5>
          </rev.Zoom>

          <rev.Zoom delay={700}>
          <h2 style={{color:"white"}}>Michael Maneno</h2>
          </rev.Zoom>

          <rev.Zoom delay={800}>
          <p style={{color:"grey"}}>Software Engineer</p>
          </rev.Zoom>

          <div id='topbtns' className='d-flex justify-content-center'>

          <rev.Fade left>
            <div >
              <a href={cv} download><button className='btn btn-warning'>Download CV </button></a>
            </div>
          </rev.Fade>

            <div>
            <rev.Fade right>
              <button className='btn btn-danger'>Reach out</button>
            </rev.Fade>
            </div>

          </div>
        </main.Col>
      </main.Row>

      <main.Row>
        <main.Col  id='col2' lg={12}>

          <div id='icons' >
            <rev.Fade left delay={800}>
            <div id='linkedin'>
              <BsLinkedin />
            </div>
            </rev.Fade>

            <rev.Fade left delay={1000}>
            <div id='github'>
              <BsGithub />
            </div>
            </rev.Fade>

            <rev.Fade left delay={1200}>
            <div id='gitlab'>
              <FaGitlab />
            </div>
            </rev.Fade>

            <rev.Fade left delay={1400}>
            <div id='gmail'>
              <MdOutgoingMail />
            </div>
            </rev.Fade>
          </div>

          <rev.Zoom delay={300}>
          <div  className='d-flex justify-content-center'>
          <div className='d-flex justify-content-center' id='image'>
            
              <main.Image
                    className="d-block w-100"
                    src={baha}
                    style={{borderRadius:"12rem 12rem 0 0"}}
                    alt="First slide"
                    fluid
                    />
          </div>
          </div>
          </rev.Zoom>

          <div id='direction'>
          
            <a id='scrol' href="#Quick"><rev.Fade right delay={1100}>scroll down</rev.Fade></a>
            
          </div>
         

        </main.Col>
      </main.Row>  
    </main.Container>


    <main.Container id='About' className='container2 pb-5'>
      <main.Row>
        <div className='about text-center mb-4 pt-4'> 
        <rev.Zoom delay={500}>
          <p style={{color:"yellow"}}>Get To Know</p>
          </rev.Zoom> 
          <rev.Zoom delay={800}>
          <h2 style={{color:"black"}}>About Me</h2>
          </rev.Zoom>
        </div>
        
        <main.Col className='classimage mx-auto mb-3' id='sec2col1'xs={7} lg={3}>
          <rev.Zoom left delay={600}>
        <main.Image
                    className="d-block w-100"
                    src={mik}
                    // style={{borderRadius:"1rem"}}
                    alt="First slide"
                    id='img'
                    fluid
                    />
            </rev.Zoom>
        </main.Col>

        <main.Col className='mx-auto' id='sec2col' lg={7}>
          <main.Row>
            
            <main.Col className='expe  mx-auto mb-3' id='sec2col2' sm={9} xs={11} lg={3}>
            <rev.Zoom  delay={1000}>
              <div id='col-icon' className=' text-center'>
                  < TfiMedallAlt className='text-light abouticon' />

                  <h4 className='text-warning'>Experience</h4>
                  <p style={{color:"white"}}>2 years of practical experience</p>
              </div>
              </rev.Zoom>
            </main.Col>
            
            <main.Col className='skill mx-auto mb-3' id='sec2col2' sm={9} xs={11} lg={3}>
            <rev.Zoom  delay={1000}>
              <div id='col-icon' className='text-center'>
                  <GiSkills className='abouticon' />

                  <h4 className='text-danger'>Skills</h4>
                  <p>2 years of practical experience</p>
              </div>
            </rev.Zoom>
            </main.Col>
            <main.Col className='pro mx-auto' id='sec2col2' sm={9} xs={11} lg={3}>
            <rev.Zoom  delay={1000}>
            <div id='col-icon' className=' text-center'>
                  <BsCodeSlash style={{color:"white"}} className='abouticon' />

                  <h4 style={{color:"black"}}>Projects</h4>
                  <p style={{color:"white"}}>2 years of practical experience</p>
              </div>
              </rev.Zoom>
            </main.Col>
          </main.Row>

          <main.Row className='mt-4'>
            <main.Col lg={12}>
              <rev.Fade right delay={1200}>
              <p>
              Compiled successfully!
              webpack compiled successfully
              Compiling...
              Compiled successfully!
              webpack compiled successfully
              Compiling...
              Compiled successfully!
              webpack compiled successfully
              Compiling...
              Compiled successfully!
              webpack compiled successfully
              Compiling...
              Compiled successfully!
              webpack compiled successfully
              Compiling...
              Compiled successfully!
              webpack compiled successfully
              Compiling...
              Compiled successfully!
              webpack compiled successfully

              </p>
              </rev.Fade>

              <rev.Fade bottom delay={1400}>
              <button className='btn btn-danger'>Contact Me</button>
              </rev.Fade>
            </main.Col>
          </main.Row>
        </main.Col>
      </main.Row>
    </main.Container>



    <main.Container id='Experience' className='bg-dark pt-4 pb-5' style={{color:"white"}}>
      <main.Row>
      <div className='text-center mb-4'> 
        <rev.Fade top delay={600}>
          <p style={{color:"yellow"}}>What Skills I Have</p>
          </rev.Fade>
          <rev.Fade top delay={800}>
          <h2>My Experience</h2>
          </rev.Fade>
        </div>
        <main.Col id='sec2col' className='frontend mx-auto mb-3' xs={10} lg={5}>
          <rev.Zoom delay={800}>
          <h5 className='text-center mt-3 mb-4'>Frontend Development</h5>
          </rev.Zoom>
          <main.Row>
          <main.Col id='expericon' className='mx-auto d-flex' lg={4}>

            <rev.Fade left delay={1000}>
            <div>
              <DiCodeigniter id='fire' />
            </div>
            <div>
              <h6>HTML</h6>
              <p>Experienced</p>
            </div>
            </rev.Fade>
          </main.Col>
          <main.Col id='expericon' className='mx-auto d-flex' lg={4}>
          <rev.Fade left delay={1200}>
            <div>
              <DiCodeigniter id='fire'  />
            </div>
            <div>
              <h6>CSS</h6>
              <p>Experienced</p>
            </div>
            </rev.Fade>
          </main.Col>
        </main.Row>

        <main.Row className='mt-3'>
          <main.Col id='expericon' className='mx-auto d-flex' lg={4}>
          <rev.Fade left delay={1400}>
            <div>
              <DiCodeigniter id='fire' />
            </div>
            <div>
              <h6>JavaScript</h6>
              <p>Experienced</p>
            </div>
            </rev.Fade>
          </main.Col>
          <main.Col id='expericon' className='mx-auto d-flex' lg={4}>
          <rev.Fade left delay={1600}>
            <div>
              <DiCodeigniter id='fire' />
            </div>
            <div>
              <h6>Bootstrap</h6>
              <p>Experienced</p>
            </div>
            </rev.Fade>
          </main.Col>
        </main.Row>

        <main.Row className='mt-3'>
          <main.Col id='expericon' className='mx-auto d-flex' lg={4}>
          <rev.Fade left delay={1800}>
            <div>
              <DiCodeigniter id='fire' />
            </div>
            <div>
              <h6>React</h6>
              <p>Experienced</p>
            </div>
            </rev.Fade>
          </main.Col>
  

        </main.Row>
        </main.Col>
        <main.Col id='sec2col' className='backend mx-auto' xs={10} lg={5}>
        <rev.Zoom delay={800}>
        <h5 className='text-center mt-3 mb-5'>Backend Development</h5>
        </rev.Zoom>
        <main.Row>
          
          <main.Col id='expericon' className='mx-auto d-flex' lg={4}>
          <rev.Fade right delay={1000}>
            <div>
             <DiCodeigniter id='fire' />
            </div>
            <div>
              <h6>Node.JS</h6>
              <p>Experienced</p>
            </div>
            </rev.Fade>
          </main.Col>
          <main.Col id='expericon' className='mx-auto d-flex' lg={4}>
          <rev.Fade right delay={1200}>
            <div>
              <DiCodeigniter id='fire' />
            </div>
            <div>
              <h6>PHP</h6>
              <p>Experienced</p>
            </div>
            </rev.Fade>
          </main.Col>
        </main.Row>

        <main.Row className='mt-3'>
          <main.Col id='expericon' className='mx-auto d-flex' lg={4}>
          <rev.Fade right delay={1400}>
            <div>
              <DiCodeigniter id='fire' />
            </div>
            <div>
              <h6>MySQL</h6>
              <p>Experienced</p>
            </div>
            </rev.Fade>
          </main.Col>
          <main.Col  id='expericon' className='mx-auto d-flex' lg={4}>
          <rev.Fade right delay={1600}>
            <div>
              <DiCodeigniter id='fire' />
            </div>
            <div>
              <h6>Python</h6>
              <p>Experienced</p>
            </div>
            </rev.Fade>
          </main.Col>
        </main.Row>

        <main.Row className='mt-3'>
          <main.Col id='expericon' className='mx-auto d-flex' lg={4}>
          <rev.Fade right delay={1600}>
            <div>
              <DiCodeigniter id='fire' />
            </div>
            <div>
              <h6>Django</h6>
              <p>Experienced</p>
            </div>
            </rev.Fade>
          </main.Col>
          
        </main.Row>

        </main.Col>
      </main.Row>
    </main.Container>



    <main.Container id='Services' className='container4'>
      <main.Row>
        <div className='text-center mb-4'> 
        <rev.Zoom delay={600}>
          <p>What I Offer</p>
        </rev.Zoom>

        <rev.Zoom delay={800}>
          <h2>Services</h2>
        </rev.Zoom>
        </div>
        
        <main.Col className='ux mx-auto mb-3' id='sec2col3' xs={7} lg={3}>
        <rev.Zoom delay={1000}>
          <div className='text-center mt-1 mb-4'>
          <div className='d-flex justify-content-center'>
            <hr style={{width:"5rem"}} />
            </div>
            <h5>UX/UI DESIGN</h5>
            <hr />
          </div>
          </rev.Zoom>
          <div>
            
          <rev.Fade left delay={1000}>
            <p>
              <GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"green"}} />
              Responsive Designs  
            </p>
            </rev.Fade>

            <rev.Fade left delay={1200}>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"green"}} />
              Designs using Adobe  
            </p>
            </rev.Fade>

            <rev.Fade left delay={1400}>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"green"}} />
              Designs using Adobe XD 
            </p>
            </rev.Fade>

            <rev.Fade left delay={1600}>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"green"}} />
              Designs using Figma tool
            </p>
            </rev.Fade>

            <rev.Fade left delay={1800}>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"green"}} />
              User Experience concideration
            </p>
            </rev.Fade>
            
          </div>
        </main.Col>
        <main.Col className='web mx-auto mb-3' id='sec2col3' xs={7} lg={3}>

        <rev.Zoom delay={1000}>
          <div className='text-center mt-1 mb-4'>
          <div className='d-flex justify-content-center'>
            <hr style={{width:"5rem"}} />
            </div>
            <h5>Web Development</h5>
            <hr />
          </div>
          </rev.Zoom>
          <div>

            <rev.Zoom delay={1000}>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"green"}} />
              Responsive Webpages  
            </p>
            </rev.Zoom>

            <rev.Zoom delay={1200}>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"green"}} />
              Smooth user experience 
            </p>
            </rev.Zoom>

            <rev.Zoom delay={1400}>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"green"}} />
              Outstanding landing pages  
            </p>
            </rev.Zoom>

            <rev.Zoom delay={1600}>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"green"}} />
              Website deloyment and hosting
            </p>
            </rev.Zoom>

            <rev.Zoom delay={1800}>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"green"}} />
              Website maintainance & testing
            </p>
            </rev.Zoom>
            
          </div>
        </main.Col>
        <main.Col className='graph mx-auto' id='sec2col3' xs={7} lg={3}>

          <rev.Zoom delay={1000}>
          <div className='text-center mt-1 mb-4'>
            <div className='d-flex justify-content-center'>
            <hr style={{width:"5rem"}} />
            </div>
            <h5>Graphics Design</h5>
            <hr />
          </div>
          </rev.Zoom>

          <div>
            <rev.Fade right delay={1000}>
          <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"green"}} />
              Video editing
            </p>
            </rev.Fade>

            <rev.Fade right delay={1200}>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"green"}} />
              photo editing  
            </p>
            </rev.Fade>

            <rev.Fade right delay={1400}>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"green"}} />
              Logo designs  
            </p>
            </rev.Fade>

            <rev.Fade right delay={1600}>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"green"}} />
              Poster Designs 
            </p>
            </rev.Fade>

            <rev.Fade right delay={1800}>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"green"}} />
              Branding and marketing
            </p>
            </rev.Fade>
            
          </div>
        </main.Col>
      </main.Row>
    </main.Container>


    <main.Container id='Portfolio' className='bg-dark pb-5'>
      <main.Row>
      <div className='text-center mb-4'> 
        <rev.Zoom delay={600}>
          <p style={{color:'yellow', marginTop:"2rem"}}>My Recent Work</p>
          </rev.Zoom>
          <rev.Zoom delay={800}>
          <h2 style={{color:'white'}}>My Portfolio</h2>
          </rev.Zoom>
        </div>

        <main.Carousel>
                <main.Carousel.Item>
                <main.Col className='mx-auto mb-3'  lg={6}>
                      <main.Card>
                        <main.Card.Title>
                        <main.Image
                                  className="d-block w-100"
                                  src={amal}
                                  style={{height:"45vh"}}
                                  alt="First slide"
                                  fluid
                                  />
                        </main.Card.Title>
                        <main.Card.Body>
                          <h5 className='text-center'>Amal Investment Platform</h5>
                          <div id='topbtns1' className='d-flex '>
                        <div >
                          <button className='cv'>Gitlab</button>
                        </div>
                        <div>
                          <button className='talk'>Live Demo</button>
                        </div>
                      </div>
                        </main.Card.Body>
                      </main.Card>
                    </main.Col>
                  </main.Carousel.Item>
                  <main.Carousel.Item>
                  <main.Col className='mx-auto mb-3'  lg={6}>
                      <main.Card>
                        <main.Card.Title>
                        <main.Image
                                  className="d-block w-100"
                                  src={Order}
                                  style={{height:"45vh"}}
                                  alt="First slide"
                                  fluid
                                  />
                        </main.Card.Title>
                        <main.Card.Body>
                          <h5 className='text-center'>FYX platform</h5>
                          <div id='topbtns1' className='d-flex '>
                        <div >
                          <button className='cv'>Gitlab</button>
                        </div>
                        <div>
                          <button className='talk'>Live Demo</button>
                        </div>
                      </div>
                        </main.Card.Body>
                      </main.Card>
                    </main.Col>
                  </main.Carousel.Item>
                  <main.Carousel.Item>
                  <main.Col className='mx-auto mb-3'  lg={6}>
                          <main.Card>
                            <main.Card.Title>
                            <main.Image
                                      className="d-block w-100"
                                      src={account}
                                      style={{height:"45vh"}}
                                      alt="First slide"
                                      fluid
                                      />
                            </main.Card.Title>
                            <main.Card.Body>
                              <h5 className='text-center'>Accounts Manager System</h5>
                              <div id='topbtns1' className='d-flex '>
                            <div >
                              <button className='cv'>Gitlab</button>
                            </div>
                            <div>
                              <button className='talk'>Live Demo</button>
                            </div>
                          </div>
                            </main.Card.Body>
                          </main.Card>
                        </main.Col>
                  </main.Carousel.Item>
                  <main.Carousel.Item>
                  <main.Col className='mx-auto mb-3'  lg={6}>
                        <main.Card>
                          <main.Card.Title>
                          <main.Image
                                    className="d-block w-100"
                                    src={blue}
                                    style={{height:"45vh"}}
                                    alt="First slide"
                                    fluid
                                    />
                          </main.Card.Title>
                          <main.Card.Body>
                            <h5 className='text-center'>Blue Shoulder Resort Website</h5>
                            <div id='topbtns1' className='d-flex '>
                          <div >
                            <button className='cv'>Gitlab</button>
                          </div>
                          <div>
                            <button className='talk'>Live Demo</button>
                          </div>
                        </div>
                          </main.Card.Body>
                        </main.Card>
                      </main.Col>
                  </main.Carousel.Item>
                  <main.Carousel.Item>
                  <main.Col className='mx-auto mb-3'  lg={6}>
                        <main.Card>
                          <main.Card.Title>
                          <main.Image
                                    className="d-block w-100"
                                    src={vengi}
                                    style={{height:"45vh"}}
                                    alt="First slide"
                                    fluid
                                    />
                          </main.Card.Title>
                          <main.Card.Body>
                            <h5 className='text-center'>Vengi Sacco System</h5>
                            <div id='topbtns1' className='d-flex '>
                          <div >
                            <button className='cv'>Gitlab</button>
                          </div>
                          <div>
                            <button className='talk'>Live Demo</button>
                          </div>
                        </div>
                          </main.Card.Body>
                        </main.Card>
                      </main.Col>
                  </main.Carousel.Item>

        </main.Carousel>
        
      </main.Row>
    </main.Container>



    <main.Container id='Contact' style={{paddingTop:"2rem"}} className='container2 pb-5'>
      <main.Row>
      <div className='text-center mb-4'> 
      <rev.Zoom delay={600}>
          <p >Get in Touch </p>
      </rev.Zoom>

      <rev.Zoom delay={800}>
          <h2>Contact Me</h2>
      </rev.Zoom>

        </div>
        <main.Col className='mx-auto mb-4' xs={10} lg={3}>

          <rev.Fade left delay={1000}>
            <div className='gmail text-center mb-2 pt-1' id='sec2col2'>
                  < GoMailRead id='email' className='abouticon' />

                  <h6 style={{color:"orange"}}><b>EMAIL</b></h6>
                  <p id='emai' style={{color:"white"}}>manenomichael99@gmail.com</p>
                  <p className='send'>Send a message</p>
              </div>
           </rev.Fade>

            <rev.Fade left delay={1200}>
              <div id='sec2col2' className='linkedin text-center mb-2 pt-1'>
                  < FaLinkedinIn id='linki' className='abouticon'  />

                  <h6 style={{color:"RED"}}><b>Linkedin</b></h6>
                  <p style={{color:"black"}}>2 years of practical experience</p>
                  <p className='send1'>Send a message</p>

              </div>
              </rev.Fade>

              <rev.Fade left delay={1400}>
              <div id='sec2col2' className='wasup text-center mt-2 pt-1'>
                  < FaWhatsapp id='watsicon' className='abouticon' />

                  <h6><b>Whatsup</b></h6>
                  <p style={{color:"white"}}>+254 718 776 401</p>
                  <p className='send2'>Send a message</p>

              </div>
              </rev.Fade>
        </main.Col>
        
        <main.Col lg={7}>

        <rev.Fade right delay={1000}>
          <div>
            <input className='form form-control shadow-none mb-3 pt-3 pb-3' placeholder='Your Name' type="text" />
          </div>
          </rev.Fade>

          <rev.Fade right delay={1200}>
          <div>
            <input className='form form-control shadow-none mb-3 pt-3 pb-3 ' placeholder='Your Email Address' type="text" />
          </div>
          </rev.Fade>

          <rev.Fade right delay={1400}>
          <div>
            <textarea className='form form-control shadow-none mb-3' placeholder='Your Messsage' rows="6" />
          </div>
          </rev.Fade>

        <rev.Zoom delay={1600}>
          <div>
            <button className='btn btn-danger'>Messsage</button>
          </div>
          </rev.Zoom>
        </main.Col>
      </main.Row>
    </main.Container>

    <main.Container id='Quick' className='footer bg-dark pt-4 pb-5'>
      <main.Row>
      <div className='text-center mb-4'> 
      <rev.Fade top delay={600}>
          <h3 style={{color:"yellow"}}>Quick Access</h3>
          </rev.Fade>
        </div>
        <main.Col className='mx-auto' lg={12}>
          <div className='footlinks d-flex justify-content-center'>
            <rev.Fade letf delay={600}>
              <a id='scrol1' href="#Home"><p>Home</p></a> 
            </rev.Fade>

            <rev.Fade left delay={800}>     
            <a id='scrol1' href="#About"><p>About</p></a>
            </rev.Fade>

            <rev.Fade left delay={1000}>
            <a id='scrol1' href="#Experience"><p>Experience</p></a>
            </rev.Fade>

            <rev.Fade right delay={1000}>
            <a id='scrol1' href="#Services"><p>Services</p></a>
            
            </rev.Fade>

            <rev.Fade right delay={800}>
            <a id='scrol1' href="#Portfolio"><p>Portfolio</p></a>
            
            </rev.Fade>

            <rev.Fade right delay={600}>
            <a id='scrol1' href="#Contact"><p>Contact</p></a>
            
            </rev.Fade>
          </div>

          <div className='footsocials d-flex justify-content-center'>
            <rev.Fade left delay={600}>
            <div id='github'>
              <BsLinkedin />
            </div>
            </rev.Fade>

            <rev.Fade left delay={800}>
            <div id='github'>
              <BsGithub />
            </div>
            </rev.Fade>

            <rev.Fade delay={1000}>
            <div id='gitlab'>
              <FaGitlab />
            </div>
            </rev.Fade>

            <rev.Fade right delay={800}>
            <div id='gmail'>
              <MdOutgoingMail />
            </div>
            </rev.Fade>

            <rev.Fade right delay={600}>
            <div>
            < FaWhatsapp className='abouticon' />
            </div>
            </rev.Fade>
          </div>
        </main.Col>
      </main.Row>
    </main.Container>
</div>
  );
}

export default App;
