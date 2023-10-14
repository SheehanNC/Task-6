import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <header className="header">
        <div className="overlay">
          <div className="container">
            <div className="profile-picture">
              <img src={require('./Ami.JPG')} alt="Sheehan's Profile" />
            </div>
            <div className="name-box">
              <div className="red-rectangle">
                <p>This is Sheehan's Portfolio!</p>
              </div>
            </div>
            <h1 className="portfolio-title">Web Developer</h1>
          </div>
        </div>
      </header>
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>About Me</h2>
              <p>
                I am Sheehan Nag Chowdhury. I'm a passionate web developer with a strong focus on creating beautiful and functional web applications. My goal is to make the web a better place.
              </p>
            </div>
          </div>
        </div> 
        <div className="red-strip">
        <h2 className="red-strip-heading" style={{ color: 'white', fontSize: '1.2em' }}>Here are some of my projects!</h2>
      </div>
      </section>
      <section className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-4" style={{ marginBottom: '100px' }}>
              <div className="project">
              <div className="project-title">
               <h3>Weather Application</h3>
              </div>
                <p>A weather website/web-based platform that provides users with real-time and historical weather data for cities across the world</p>
                <img
                  src={require('./weather.png')}
                  alt="Weather Application"
                  className="project-image"
                />
                <br></br>
                <br></br>
                <a
                  href="https://sheehannc.github.io/WebD_project/"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="col-md-4" style={{ marginBottom: '50px' }} >
              <div className="project">
                <h3>Women Empowerment Advertisement</h3>
                <p>
                  An advertisement for Mukti NGO, Sundarbans about Women Empowerment which was used to raise Rs 27,000 for the cause
                </p>
                <img
                  src={require('./Women.png')}
                  alt="Weather Application"
                  className="project-image"
                />
                <br></br>
                <br></br>
                <a
                  href="https://www.instagram.com/p/Cn1D9a1PnpI/?igshid=MTIyMzRjYmRlZg=="
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
            {/* Add more project items as needed */}
          </div>
        </div>
      </section>
      <section className="footer">
  <div className="container">
    <div className="footer-content">
      <p>You can reach me at: <a href="mailto:enceesheehan@email.com">enceesheehan@email.com</a></p>
    </div>
  </div>
</section>


    </div>
  );
}

export default Portfolio;
