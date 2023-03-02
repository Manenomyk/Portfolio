import React, {useRef, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as main from 'react-bootstrap';
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaGitlab } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import baha from './Images/baha.jpeg';
import mik from './Images/mik.jpeg';
import fredor from './Images/finance.png';
import { TfiMedallAlt } from "react-icons/tfi";
import { GiSkills } from "react-icons/gi";
import { BsCodeSlash } from "react-icons/bs";
import { DiCodeigniter } from "react-icons/di";
import amal from './Images/dashboard.png';
import { GoMailRead } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import cv from './Images/ManenoMichael.pdf';
import { FaHome } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { GoGear } from "react-icons/go";
import { GrAchievement } from "react-icons/gr";
import { BiChat } from "react-icons/bi";
import vengi from './Images/veng.png';
import blue from './Images/blue.png';
import account from './Images/account.png';
import Order from './Images/Order.jpg';
import { GoVerified } from "react-icons/go";
import * as rev from 'react-reveal';
import { Link } from 'react-scroll';
import emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet';

function App() {

  const [successResponce,setSuccessResponce] =useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qk3ecbi', 'template_h2a286a', form.current, 'KFsuGcuTAtVQTcEYG')
      .then((result) => {
          console.log(result.text);

         
      }, (error) => {
          console.log(error.text);
      });



      e.target.reset();
      setSuccessResponce("Message sent successfully")
      setTimeout(()=>{
        setSuccessResponce('')
      }, 2000);

    };

  return (
<div className='body'>

<div style={{marginLeft:"45%",marginTop:"15%",position:"fixed", zIndex:"2"}}>
  {successResponce && (
    <div style={{color:'white', fontSize:'16px',width:"17vw",background:"#28a745",
    borderRadius:"15px", paddingTop:'15px',paddingBottom:'15px',paddingLeft:"6%",
    border:"1px solid lightgray", opacity:"0.7", transition:'0.5'}}>
      {successResponce}
    </div>
  )}
</div>

          <Helmet>
                <meta charSet="utf-8" />
                <title>#BahatiCodes</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Awesome portfolio you need to checkout" />
            </Helmet>


<main.Container id='Home' className='container1'>
      <main.Row className='bg-dark'>
        
      
      <main.Col className='navlinks mx-auto' md={5}  sm={6} xs={10} lg={4}>
      {/* <rev.Zoom delay={1200}>  */}
          <div className='nav d-flex justify-content-center'>
          <rev.Fade left delay={1500}>
            <div>
              <Link 
                  to='Home'
                  id='homelink'
                  activeClass='active'
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  href="#Home"><FaHome  style={{fontSize:"2rem"}} />
              </Link>

            </div>
            </rev.Fade>

            <rev.Fade left delay={1700}>
            <div>

            <Link 
                  id='aboutlink' 
                  to='About'
                  activeClass='active'
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  href="#About"><FaUserCircle style={{fontSize:"2rem"}} />
            </Link>
            
            </div>
            </rev.Fade>

            <rev.Fade left delay={1900}>
            <div>
            <Link 
                  id='expelink'
                  to='Experience'
                  activeClass='active'
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  href="#Experience"><BiCodeAlt style={{fontSize:"2rem"}} />
            </Link>
            </div>
            </rev.Fade>

            <rev.Fade right delay={1900}>
            <div>

            <Link 
                  id='servlink' 
                  to='Services'
                  activeClass='active'
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  href="#Services"><GoGear style={{fontSize:"2rem"}} />
            </Link>

            </div>
            </rev.Fade>
            
            <rev.Fade right delay={1700}>
            <div>

            <Link 
                  id='portlink1'
                  to='Portfolio'
                  activeClass='active'
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500} 
                  href="#Portfolio"><GrAchievement style={{fontSize:"2rem"}}/>
            </Link>

            </div>
            </rev.Fade>

            <rev.Fade right delay={1500}>
            <div>

            <Link 
                    id='contlink' 
                    to='Contact'
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    href="#Contact"><BiChat style={{fontSize:"2rem"}} />
            </Link>

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
              <Link
                  to='Contact'
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  href="#Contact">
                  <button className='btn btn-danger'>Reach out</button>
               </Link>
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
              <a style={{textDecoration:"none"}} target='_blank' href="https://www.linkedin.com/in/michael-maneno-ab7325201/"><BsLinkedin /></a>
            </div>
            </rev.Fade>

            <rev.Fade left delay={1000}>
            <div id='github'>
              <a  href="https://github.com/Manenomyk" style={{textDecoration:"none", color:"black"}} target='_blank'><BsGithub /></a>
              
            </div>
            </rev.Fade>

            <rev.Fade left delay={1200}>
            <div id='gitlab'>
              <a style={{textDecoration:"none", color:"gray"}} target='_blank' href="https://gitlab.com/Bahatimyk"><FaGitlab /></a>
            </div>
            </rev.Fade>

            <rev.Fade left delay={1400}>
            <div id='gmail'>
              <a style={{textDecoration:"none", color:"brown"}} href="mailto:manenomichael99@gmail.com" target="_blank"><MdOutgoingMail /></a>
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
          
            <Link 
                    id='scrol' 
                    to='Quick'
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    href="#Quick"><rev.Fade right delay={1100}>scroll down</rev.Fade>
            </Link>
            
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
                  <p style={{color:"white"}}>Over 2 years of practical experience</p>
              </div>
              </rev.Zoom>
            </main.Col>
            
            <main.Col className='skill mx-auto mb-3' id='sec2col2' sm={9} xs={11} lg={3}>
            <rev.Zoom  delay={1000}>
              <div id='col-icon' className='text-center'>
                  <GiSkills className='abouticon' />

                  <h4 className='text-danger'>Skills</h4>
                  <p>Mastery of over 4 languages</p>
              </div>
            </rev.Zoom>
            </main.Col>
            <main.Col className='pro mx-auto' id='sec2col2' sm={9} xs={11} lg={3}>
            <rev.Zoom  delay={1000}>
            <div id='col-icon' className=' text-center'>
                  <BsCodeSlash style={{color:"white"}} className='abouticon' />

                  <h4 style={{color:"black"}}>Projects</h4>
                  <p style={{color:"white"}}>Over 7 real time projects</p>
              </div>
              </rev.Zoom>
            </main.Col>
          </main.Row>

          <main.Row className='mt-4'>
            <main.Col lg={12}>
              <rev.Fade right delay={1200}>
              <p>
              Hi and welcome, <br />
               this is Michael Bahati Maneno a highly competent
               IT professional with a proven track record in designing websites, 
               networking and managing databases. I have strong technical skills 
               as well as excellent interpersonal skills, enabling me to interact
               with a wide range of clients. I am eager to be challenged in order
               to grow and further improve my IT skills. My greatest passion
               in life is using my technical know-how to benefit other people
              and organizations.

              </p>
              </rev.Fade>

              <rev.Fade bottom delay={1400}>
              <a href="#Contact" ><button className='btn btn-danger'>Contact Me</button></a>
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
              <GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"#c2820b"}} />
              Responsive Designs  
            </p>
            </rev.Fade>

            <rev.Fade left delay={1200}>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"#c2820b"}} />
              Designs using Adobe  
            </p>
            </rev.Fade>

            <rev.Fade left delay={1400}>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"#c2820b"}} />
              Designs using Adobe XD 
            </p>
            </rev.Fade>

            <rev.Fade left delay={1600}>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"#c2820b"}} />
              Designs using Figma tool
            </p>
            </rev.Fade>

            <rev.Fade left delay={1800}>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"#c2820b"}} />
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
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"#c2820b"}} />
              Responsive Webpages  
            </p>
            </rev.Zoom>

            <rev.Zoom delay={1200}>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"#c2820b"}} />
              Smooth user experience 
            </p>
            </rev.Zoom>

            <rev.Zoom delay={1400}>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"#c2820b"}} />
              Outstanding landing pages  
            </p>
            </rev.Zoom>

            <rev.Zoom delay={1600}>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"#c2820b"}} />
              Website deloyment and hosting
            </p>
            </rev.Zoom>

            <rev.Zoom delay={1800}>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"#c2820b"}} />
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
          <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"#c2820b"}} />
              Video editing
            </p>
            </rev.Fade>

            <rev.Fade right delay={1200}>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"#c2820b"}} />
              photo editing  
            </p>
            </rev.Fade>

            <rev.Fade right delay={1400}>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"#c2820b"}} />
              Logo designs  
            </p>
            </rev.Fade>

            <rev.Fade right delay={1600}>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"#c2820b"}} />
              Poster Designs 
            </p>
            </rev.Fade>

            <rev.Fade right delay={1800}>
            <p><GoVerified style={{fontSize:"1.3rem", marginRight:"0.5rem", color:"#c2820b"}} />
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
                        <a target='_blank' href="https://gitlab.com/Bahatimyk"><button className='cv'>Gitlab</button></a>
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
                        <a target='_blank' href="https://gitlab.com/Bahatimyk"><button className='cv'>Gitlab</button></a>
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
                            <a target='_blank' href="https://gitlab.com/Bahatimyk"><button className='cv'>Gitlab</button></a>
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
                          <a target='_blank' href="https://gitlab.com/Bahatimyk"><button className='cv'>Gitlab</button></a>
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
                  <main.Col className='mx-auto mb-3' lg={6}>
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
                            
                            <a target='_blank' href="https://gitlab.com/Bahatimyk"><button className='cv'>Gitlab</button></a>
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
                  <main.Col className='mx-auto mb-3' lg={6}>
                        <main.Card>
                          <main.Card.Title>
                          <main.Image
                                    className="d-block w-100"
                                    src={fredor}
                                    style={{height:"45vh"}}
                                    alt="First slide"
                                    fluid
                                    />
                          </main.Card.Title>
                          <main.Card.Body>
                            <h5 className='text-center'>Fredor Investment financial system</h5>
                            <div id='topbtns1' className='d-flex '>
                          <div >
                            
                            <a target='_blank' href="https://gitlab.com/Bahatimyk"  ><button className='cv'>Gitlab</button></a>
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
                  <a className='send' href="mailto:manenomichael99@gmail.com" target='_blank'>Send a message</a>
                  {/* <p className='send'>Send a message</p> */}
              </div>
           </rev.Fade>

            <rev.Fade left delay={1200}>
              <div id='sec2col2' className='linkedin text-center mb-2 pt-1'>
                  < FaLinkedinIn id='linki' className='abouticon'  />

                  <h6 style={{color:"RED"}}><b>Linkedin</b></h6>
                  <p style={{color:"black"}}>2 years of practical experience</p>
                  <a className='send1' href="https://github.com/Manenomyk" target='_blank'>Send a message</a>
                  {/* <p className='send1'>Send a message</p> */}

              </div>
              </rev.Fade>

              <rev.Fade left delay={1400}>
              <div id='sec2col2' className='wasup text-center mt-2 pt-1'>
                  < FaWhatsapp id='watsicon' className='abouticon' />

                  <h6><b>Whatsup</b></h6>
                  <p style={{color:"white"}}>+254 718 776 401</p>
                  <a className='send2' href="https://api.whatsapp.com/send?phone+254718776401" target='_blank'>Send a message</a>
                  {/* <p className='send2'>Send a message</p> */}

              </div>
              </rev.Fade>
        </main.Col>
        
        <main.Col lg={7}>
      <form ref={form} onSubmit={sendEmail}>
      <rev.Fade right delay={1000}>
          <div>
            <input name='name' className='form form-control shadow-none mb-3 pt-3 pb-3' placeholder='Your Name' type="text" required/>
          </div>
          </rev.Fade>

          <rev.Fade right delay={1200}>
          <div>
            <input name='email' type='email' className='form form-control shadow-none mb-3 pt-3 pb-3 ' placeholder='Your Email Address' required />
          </div>
          </rev.Fade>

          <rev.Fade right delay={1400}>
          <div>
            <textarea name='message' className='form form-control shadow-none mb-3' placeholder='Your Messsage' rows="6" required />
          </div>
          </rev.Fade>

        <rev.Zoom delay={1600}>
          <div>
            <button type='submit' className='btn btn-danger'>Messsage</button>
          </div>
          </rev.Zoom>
      </form>
        
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
              <Link 
                    id='scrol1' 
                    to='Home'
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    href="#Home"><p>Home</p>
              </Link> 
            </rev.Fade>

            <rev.Fade left delay={800}>     
            <Link 
                    id='scrol1' 
                    to='About'
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    href="#About"><p>About</p></Link>
            </rev.Fade>

            <rev.Fade left delay={1000}>
            <Link 
                  id='scrol1'  
                  to='Experience'
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  href="#Experience"><p>Experience</p>
                    
            </Link>
            </rev.Fade>

            <rev.Fade right delay={1000}>
            <Link 
                    id='scrol1' 
                    to='Services'
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    href="#Services"><p>Services</p>
            </Link>
            
            </rev.Fade>

            <rev.Fade right delay={800}>
            <Link 
                    id='scrol1'
                    to='Portfolio'
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500} 
                    href="#Portfolio"><p>Portfolio</p>
            </Link>
            
            </rev.Fade>

            <rev.Fade right delay={600}>
            <Link 
                    id='scrol1' 
                    to='Contact'
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500} 
                    href="#Contact"><p>Contact</p>
            </Link>
            
            </rev.Fade>
          </div>

          <div className='footsocials d-flex justify-content-center'>
            <rev.Fade left delay={600}>
            <div className='footin' id='github'>
              <a style={{textDecoration:"none", color:"white"}} target="_blank" href="https://www.linkedin.com/in/michael-maneno-ab7325201/"><BsLinkedin /></a>
            </div>
            </rev.Fade>

            <rev.Fade left delay={800}>
            <div className='foothub' id='github'>
              <a style={{textDecoration:"none", color:"white"}} target="_blank" href="https://github.com/Manenomyk"><BsGithub /></a>
            </div>
            </rev.Fade>

            <rev.Fade delay={1000}>
            <div className='footlab' id='gitlab'>
              <a style={{textDecoration:"none", color:"white"}} target="_blank" href="https://gitlab.com/Bahatimyk"><FaGitlab /></a>
            </div>
            </rev.Fade>

            <rev.Fade right delay={800}>
            <div className='footmail' id='gmail'>
              <a style={{textDecoration:"none", color:"white"}} target="_blank" href="mailto:manenomichael99@gmail.com"><MdOutgoingMail /></a>
            </div>
            </rev.Fade>

            <rev.Fade right delay={600}>
            <div className='footsap'>
            <a style={{textDecoration:"none", color:"white"}} target="_blank" href="https://api.whatsapp.com/send?phone+254718776401">< FaWhatsapp className='abouticon' /></a>
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
