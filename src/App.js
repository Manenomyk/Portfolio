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
import vengi from './Images/vengi.png';
import { GoVerified } from "react-icons/go";

function App() {
  return (
<div className='body'>
<main.Container id='Home' className='container1'>
      <main.Row className='bg-dark'>
      <main.Col className='navlinks mx-auto' lg={4}>
          <div className='nav d-flex justify-content-center'>
            <div>
              <a href="#Home"><FaHome  style={{fontSize:"2rem"}} /></a>
            </div>
            <div>
            <a href="#About"><FaUserCircle style={{fontSize:"2rem"}} /></a>
            </div>
            <div>
            <a href="#Experience"><BiBookContent style={{fontSize:"2rem"}} /></a>
            </div>
            <div>
            <a href="#Services"><RiServiceLine style={{fontSize:"2rem"}} /></a>
            </div>
            <div>
            <a href="#Portfolio"><RiProfileLine style={{fontSize:"2rem"}}/></a>
            </div>
            <div>
            <a href="#Contact"><TiContacts style={{fontSize:"2rem"}} /></a>
            </div>
          </div>
        </main.Col>
        <main.Col id='col1' className='mx-auto text-center' lg={6}>
          <h5 style={{color:"yellow"}}>Hello, I'm</h5>
          <h2 style={{color:"white"}}>Michael Maneno</h2>
          <p style={{color:"grey"}}>Software Engineer</p>

          <div id='topbtns' className='d-flex justify-content-center'>
            <div >
              <a href={cv} download><button className='btn btn-warning'>Download CV</button></a>
            </div>
            <div>
              <button className='btn btn-danger'>Reach out</button>
            </div>
          </div>
        </main.Col>
      </main.Row>

      <main.Row>
        <main.Col  id='col2' lg={12}>
          <div id='icons' >
            <div id='linkedin'>
              <BsLinkedin />
            </div>
            <div id='github'>
              <BsGithub />
            </div>
            <div id='gitlab'>
              <FaGitlab />
            </div>
            <div id='gmail'>
              <MdOutgoingMail />
            </div>
          </div>

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

          <div id='direction'>
            <a href="#Quick">scroll down</a>
          </div>
        </main.Col>
      </main.Row>  
    </main.Container>


    <main.Container id='About' className='container2 pb-5'>
      <main.Row>
        <div className='about text-center mb-4 pt-4'> 
          <p style={{color:"yellow"}}>Get To Know</p>
          <h2 style={{color:"black"}}>About Me</h2>
        </div>
        <main.Col className='classimage mx-auto' id='sec2col1' lg={3}>
        <main.Image
                    className="d-block w-100"
                    src={mik}
                    // style={{borderRadius:"1rem"}}
                    alt="First slide"
                    id='img'
                    fluid
                    />
        </main.Col>

        <main.Col className='mx-auto' id='sec2col' lg={7}>
          <main.Row>
            <main.Col className='expe  mx-auto' id='sec2col2' lg={3}>
              <div id='col-icon' className=' text-center'>
                  < TfiMedallAlt className='text-light abouticon' />

                  <h4 className='text-warning'>Experience</h4>
                  <p style={{color:"white"}}>2 years of practical experience</p>
              </div>
            </main.Col>
            <main.Col className='skill mx-auto' id='sec2col2' lg={3}>
              
              <div id='col-icon' className='text-center'>
                  <GiSkills className='abouticon' />

                  <h4 className='text-danger'>Skills</h4>
                  <p>2 years of practical experience</p>
              </div>
            </main.Col>
            <main.Col className='pro mx-auto' id='sec2col2' lg={3}>
            <div id='col-icon' className=' text-center'>
                  <BsCodeSlash style={{color:"white"}} className='abouticon' />

                  <h4 style={{color:"black"}}>Projects</h4>
                  <p style={{color:"white"}}>2 years of practical experience</p>
              </div>
            </main.Col>
          </main.Row>

          <main.Row className='mt-4'>
            <main.Col lg={12}>
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

              <button className='btn btn-danger'>Contact Me</button>
            </main.Col>
          </main.Row>
        </main.Col>
      </main.Row>
    </main.Container>



    <main.Container id='Experience' className='bg-dark pt-4 pb-5' style={{color:"white"}}>
      <main.Row>
      <div className='text-center mb-4'> 
          <p style={{color:"yellow"}}>What Skills I Have</p>
          <h2>My Experience</h2>
        </div>
        <main.Col id='sec2col' className='frontend mx-auto' lg={5}>
          <h5 className='text-center mt-3 mb-4'>Frontend Development</h5>
          <main.Row>
          <main.Col id='expericon' className='mx-auto d-flex' lg={4}>
            <div>
              <DiCodeigniter id='fire' />
            </div>
            <div>
              <h6>HTML</h6>
              <p>Experienced</p>
            </div>
          </main.Col>
          <main.Col id='expericon' className='mx-auto d-flex' lg={4}>
            <div>
              <DiCodeigniter id='fire'  />
            </div>
            <div>
              <h6>CSS</h6>
              <p>Experienced</p>
            </div>
          </main.Col>
        </main.Row>

        <main.Row className='mt-3'>
          <main.Col id='expericon' className='mx-auto d-flex' lg={4}>
            <div>
              <DiCodeigniter id='fire' />
            </div>
            <div>
              <h6>JavaScript</h6>
              <p>Experienced</p>
            </div>
          </main.Col>
          <main.Col id='expericon' className='mx-auto d-flex' lg={4}>
            <div>
              <DiCodeigniter id='fire' />
            </div>
            <div>
              <h6>Bootstrap</h6>
              <p>Experienced</p>
            </div>
          </main.Col>
        </main.Row>

        <main.Row className='mt-3'>
          <main.Col id='expericon' className='mx-auto d-flex' lg={4}>
            <div>
              <DiCodeigniter id='fire' />
            </div>
            <div>
              <h6>React</h6>
              <p>Experienced</p>
            </div>
          </main.Col>
  

        </main.Row>
        </main.Col>
        <main.Col id='sec2col' className='backend mx-auto' lg={5}>
        <h5 className='text-center mt-3 mb-5'>Backend Development</h5>
        
        <main.Row>
          <main.Col id='expericon' className='mx-auto d-flex' lg={4}>
            <div>
             <DiCodeigniter id='fire' />
            </div>
            <div>
              <h6>Node.JS</h6>
              <p>Experienced</p>
            </div>
          </main.Col>
          <main.Col id='expericon' className='mx-auto d-flex' lg={4}>
            <div>
              <DiCodeigniter id='fire' />
            </div>
            <div>
              <h6>PHP</h6>
              <p>Experienced</p>
            </div>
          </main.Col>
        </main.Row>

        <main.Row className='mt-3'>
          <main.Col id='expericon' className='mx-auto d-flex' lg={4}>
            <div>
              <DiCodeigniter id='fire' />
            </div>
            <div>
              <h6>MySQL</h6>
              <p>Experienced</p>
            </div>
          </main.Col>
          <main.Col  id='expericon' className='mx-auto d-flex' lg={4}>
            <div>
              <DiCodeigniter id='fire' />
            </div>
            <div>
              <h6>Python</h6>
              <p>Experienced</p>
            </div>
          </main.Col>
        </main.Row>

        <main.Row className='mt-3'>
          <main.Col id='expericon' className='mx-auto d-flex' lg={4}>
            <div>
              <DiCodeigniter id='fire' />
            </div>
            <div>
              <h6>Django</h6>
              <p>Experienced</p>
            </div>
          </main.Col>
          
        </main.Row>

        </main.Col>
      </main.Row>
    </main.Container>



    <main.Container id='Services' className='container4'>
      <main.Row>
        <div className='text-center mb-4'> 
          <p>What I Offer</p>
          <h2>Services</h2>
        </div>
        <main.Col className='ux mx-auto' id='sec2col3' lg={3}>
          <div className='text-center mt-1 mb-4'>
          <div className='d-flex justify-content-center'>
            <hr style={{width:"5rem"}} />
            </div>
            <h5>UX/UI DESIGN</h5>
            <hr />
          </div>
          <div>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"green"}} />
              Responsive Designs  
            </p>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"green"}} />
              Designs using Adobe  
            </p>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"green"}} />
              Designs using Adobe XD 
            </p>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"green"}} />
              Designs using Figma tool
            </p>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"green"}} />
              User Experience concideration
            </p>
          </div>
        </main.Col>
        <main.Col className='web mx-auto' id='sec2col3' lg={3}>
          <div className='text-center mt-1 mb-4'>
          <div className='d-flex justify-content-center'>
            <hr style={{width:"5rem"}} />
            </div>
            <h5>Web Development</h5>
            <hr />
          </div>
          <div>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"green"}} />
              Responsive Webpages  
            </p>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"green"}} />
              Smooth user experience 
            </p>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"green"}} />
              Outstanding landing pages  
            </p>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"green"}} />
              Website deloyment and hosting
            </p>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"green"}} />
              Website maintainance & testing
            </p>
            
          </div>
        </main.Col>
        <main.Col className='graph mx-auto' id='sec2col3' lg={3}>
          <div className='text-center mt-1 mb-4'>
            <div className='d-flex justify-content-center'>
            <hr style={{width:"5rem"}} />
            </div>
            <h5>Graphics Design</h5>
            <hr />
          </div>
          <div>
          <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"green"}} />
              Video editing
            </p>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"green"}} />
              photo editing  
            </p>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"green"}} />
              Logo designs  
            </p>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"green"}} />
              Poster Designs 
            </p>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"green"}} />
              Branding and marketing
            </p>
            
          </div>
        </main.Col>
      </main.Row>
    </main.Container>


    <main.Container id='Portfolio' className='bg-dark pb-5'>
      <main.Row>
      <div className='text-center mb-4'> 
          <p style={{color:'yellow', marginTop:"2rem"}}>My Recent Work</p>
          <h2 style={{color:'white'}}>My Portfolio</h2>
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
                                  src={amal}
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
                                      src={amal}
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
                                    src={amal}
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
          <p >Get in Touch </p>
          <h2>Contact Me</h2>
        </div>
        <main.Col className='mx-auto ' lg={3}>
            <div className='text-center mb-2 pt-1' id='sec2col2'>
                  < GoMailRead className='abouticon' />

                  <h6><b>EMAIL</b></h6>
                  <p>manenomichael99@gmail.com</p>
                  <p>Send a message</p>
              </div>

              <div id='sec2col2' className='text-center mb-2 pt-1'>
                  < FaLinkedinIn className='abouticon'  />

                  <h6><b>Linkedin</b></h6>
                  <p>2 years of practical experience</p>
                  <p>Send a message</p>

              </div>

              <div id='sec2col2' className='text-center mt-2 pt-1'>
                  < FaWhatsapp className='abouticon' />

                  <h6><b>Whatsup</b></h6>
                  <p>+254 718 776 401</p>
                  <p>Send a message</p>

              </div>
        </main.Col>
        
        <main.Col lg={7}>
          <div>
            <input className='form form-control shadow-none mb-3 pt-3 pb-3' placeholder='Your Name' type="text" />
          </div>
          <div>
            <input className='form form-control shadow-none mb-3 pt-3 pb-3 ' placeholder='Your Email Address' type="text" />
          </div>
          <div>
            <textarea className='form form-control shadow-none mb-3' placeholder='Your Messsage' rows="6" />
          </div>

          <div>
            <button className='btn btn-danger'>Messsage</button>
          </div>
        </main.Col>
      </main.Row>
    </main.Container>

    <main.Container id='Quick' className='footer bg-dark pt-4 pb-5'>
      <main.Row>
      <div className='text-center mb-4'> 
          <h3 style={{color:"yellow"}}>Quick Access</h3>
        </div>
        <main.Col className='mx-auto' lg={12}>
          <div className='footlinks d-flex justify-content-center'>
            <p>Home</p>
            <p>About</p>
            <p>Experience</p>
            <p>Services</p>
            <p>Portfolio</p>
            <p>Contact</p>
          </div>

          <div className='footsocials d-flex justify-content-center'>
          <div id='github'>
              <BsLinkedin />
            </div>
            <div id='github'>
              <BsGithub />
            </div>
            <div id='gitlab'>
              <FaGitlab />
            </div>
            <div id='gmail'>
              <MdOutgoingMail />
            </div>
            <div>
            < FaWhatsapp className='abouticon' />
            </div>
          </div>
        </main.Col>
      </main.Row>
    </main.Container>
</div>
  );
}

export default App;
