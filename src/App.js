import React from 'react';
import { Navbar, Nav, Card } from 'react-bootstrap';
import * as bootstrap from "bootstrap";
import "./style.css";
import { useEffect } from 'react';
import bluebeach from "./assets/bluebeach.svg";
import mintbeach from "./assets/mintbeach.svg";
import midbluebeach from "./assets/midbluebeach.svg";
import mintbubble from "./assets/mintbubble.svg";
import bluebubble from "./assets/bluebubble.svg";
import purplebubble from "./assets/purplebubble.svg";
import linjellyfish from "./assets/linjellyfish.svg";
import whitejellyfish from "./assets/whitejellyfish.svg";
import radjellyfish from "./assets/radjellyfish.svg";
import bakery from "./assets/game.png";
import swimming from "./assets/service.png";
import tea from "./assets/ecommerce.png";
import analytics from "./assets/dashboard.png";


function App() {
  useEffect(() => {
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: "#navbar",
      offset: 100,
    });

    return () => scrollSpy.dispose();
  }, []);

  return (
    <div id = 'background'>
      <Navbar expand="lg" fixed="top" id="navbar" className="navbar">
        <Navbar.Brand href="#home"><img src={purplebubble} alt="purple coloured bubble"></img></Navbar.Brand>
        <Nav className="me-auto"> 
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#howiwork">How I Work</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
        </Nav>
      </Navbar>

      <section id = 'home' className='section1'>
        <h1 className='portfolio-name'>Christina Young Pow</h1>
        <h2 id = 'title2'>3rd Year Computer Science Student | University of Ottawa</h2>
      </section>

      <div className='beach-container'>
        <img src={mintbeach} alt="ocean wash on shore" className = 'beach' 
          style={{
            position: "absolute",
            top: "20vh",
            zIndex: 1
          }}/>

        <section id = 'about' className='section2'>
          <img src={bluebubble} alt="blue bubble" 
            style={{
              position: "absolute",
              right: "20vw",
              top: "60vh"
            }}/>
            <img src={bluebubble} alt="blue bubble" 
            style={{
              position: "absolute",
              right: "15vw",
              top: "45vh",
              width: "3vw",
              height: "3vh"
            }}/>
            <img src={bluebubble} alt="blue bubble" 
            style={{
              position: "absolute",
              left: "15vw",
              top: "80vh",
              width: "2vw",
              height: "2vh"
            }}/>
            <img src={bluebubble} alt="blue bubble" 
            style={{
              position: "absolute",
              left: "30vw",
              top: "55vh",
              width: "4vw",
              height: "4vh"
            }}/>
          <h2 id = 'subheadings' className='beach-text header1'>About</h2>
          <Card id='about-card' style={{
              position: "absolute",
              left: "30vw",
              top: "55vh",
              width: "40vw",
              height: "20vh",
              zIndex: 3
            }}>
            <Card.Title id='about-title'>Hi! Welcome to my page, I'm Christina.</Card.Title>
            <Card.Text id='about-text'>I'm a 3rd year university student studying computer science with a focus on data science and a great interest in UI/UX design. I have experience in JavaScript, HTML, CSS, and React. I love reading, swimming, and baking treats I've never tried before. </Card.Text>
          </Card>
            <img src={whitejellyfish} alt="white jellyfish" 
            style={{
              position: "absolute",
              left: "90vw",
              top: "70vh",
              width: "15vw",
              height: "30vh",
              transform: "rotate(160deg)"
            }}/>
            <img src={whitejellyfish} alt="white jellyfish" 
            style={{
              position: "absolute",
              left: "20vh",
              top: "45vh",
              width: "10vw",
              height: "15vh",
              transform: "rotate(90deg)"
            }}/>
            <img src={radjellyfish} alt="linear gradient jellyfish" 
            style={{
              position: "absolute",
              right: "45vh",
              top: "65vh",
              width: "15vw",
              height: "30vh",
              transform: "rotate(-45deg)"
            }}/>
            <img src={linjellyfish} alt="linear gradient jellyfish" 
            style={{
              position: "absolute",
              left: "55vh",
              top: "70vh",
              width: "10vw",
              height: "15vh"
            }}/>
        </section>

        <img src={bluebeach} alt="ocean wash on shore" className = 'beach' 
          style={{
            position: "absolute",
            top: "110vh",
            zIndex: 1
          }}/>

        <section id = 'howiwork' className='section2'>
        <h2 id = 'subheadings' className='beach-text header2'>How I Work</h2>
          <section className='section3'>
            <img src={mintbubble} alt="mint bubble" ></img>
            <img src={mintbubble} alt="mint bubble" 
            style={{
              position: "absolute",
              right: "10vw",
              top: "25vh",
              width: "2vw",
              height: "2vh"
            }}/>
            <img src={mintbubble} alt="mint bubble" 
            style={{
              position: "absolute",
              left: "15vw",
              top: "20vh",
              width: "3vw",
              height: "3vh"
            }}/>
            <Card className="ocean-card">
                <Card.Title id='card-title'>
                  1. Use Case and Research
                </Card.Title>
                <Card.Text className='card-text'>
                  Understand the user base/ audience, project purpose, and client context.
                </Card.Text>
            </Card>
            <Card className="ocean-card">
                <Card.Title id='card-title'>
                  2. Prototyping
                </Card.Title>
                <Card.Text className='card-text'>
                  Create prototypes that not only focus on design but also functionality and acessibility.
                </Card.Text>
            </Card>
            <Card className="ocean-card">
                <Card.Title id='card-title'>
                  3. Feedback and Iteration
                </Card.Title>
                <Card.Text className='card-text'>
                  Consult all involved parties and continuously improve through testing and feedback.
                </Card.Text>
            </Card>
          </section>
        </section>

        <img src={midbluebeach} alt="ocean wash on shore" className = 'beach' 
          style={{
            position: "absolute",
            top: "200vh",
            zIndex: 1
          }}/>

          <section id = 'projects' className='section2'>
          <h2 id = 'subheadings' className='beach-text header3'>Projects</h2>

          <section className='section4'>
          <div id="projectCarousel" className="carousel slide">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active card-text">
                    <img src={swimming} class="d-block w-100" alt="swimming students sitting by the pool" ></img>
                    <div className="carousel-caption d-none d-md-block">
                      <h5 id = "blackText">Service Site</h5>
                      <p id = "blackText">Swimming Lessons</p>
                      <a id = "blackText" href="https://silver-crostata-94f613.netlify.app">Click Here</a>
                    </div>
                  </div>
                  <div className="carousel-item card-text">
                    <img src={bakery} class="d-block w-100" alt="small pies on a baking sheets" ></img>
                    <div className="carousel-caption d-none d-md-block">
                      <h5 id = "blackText">Matching Game</h5>
                      <p id = "blackText">Match Baked Goods</p>
                      <a id = "blackText" href="https://jocular-sopapillas-547173.netlify.app">Click Here</a>
                    </div>
                  </div>
                  <div className="carousel-item card-text">
                    <img src={tea} class="d-block w-100" alt="loose leaf tea and tea with lemon, top view" ></img>
                    <div className="carousel-caption d-none d-md-block">
                      <h5 id = "blackText">E-Commerce Site</h5>
                      <p id = "blackText">Loose Leaf Tea Shop</p>
                      <a id = "blackText" href="https://animated-dango-8e5b93.netlify.app/">Click Here</a>
                    </div>
                  </div>
                  <div className="carousel-item card-text">
                    <img src={analytics} class="d-block w-100" alt="analytics dashboard on a tablet" ></img>
                    <div className="carousel-caption d-none d-md-block">
                      <h5 id = "blackText">Analytics/Visualization Site</h5>
                      <p id = "blackText">Café Sales Analytics Dashboard</p>
                      <a id = "blackText" href="https://polite-pithivier-e80b03.netlify.app/">Click Here</a>
                    </div>
                  </div>
                </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
              </div>
          </section>
          </section>

      </div>

    </div>
  );
}

export default App;