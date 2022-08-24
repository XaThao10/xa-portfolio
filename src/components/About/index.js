import { faCss3, faHtml5, faJsSquare, faReact, faVuejs, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useState } from 'react';


const About = () =>{
  const [letterClass] = useState('text-animate')
  const aboutText = ['A','b','o','u','t',' ','M','e']

    return(
        <>
        <div className='container'>
        <div className='row'>
          
            <div className='col-lg'>
                  <h1>
                      <AnimatedLetters letterClass={letterClass} 
                    strArray={aboutText}
                    idx={12}/>
                  </h1>
                  <div className='about-me'>
                  <p>Hello, I’m Xa Thao, currently a Web Developer. I started my career off as an intern WordPress Developer. From there on, I slowly make my way to become a full on developer. I was fortunate enough to be in a position and environment where I had the chance to explore and learn new technologies. I’m not an expert in all of these, but did have the chance to work with them at some point in my career. Here is a list of all the frameworks and CMS I have worked with.</p>
                <h3 className='skill-list'>
                HTML5, CSS, JavaScript, Vue, React, and CMS such as WordPress.
                </h3>
                  </div>
                </div>
            <div className='col-lg'>
            <div className='cube'>
            <div className="cubespinner">
            <div className="face1">
                <FontAwesomeIcon icon={faWordpress} color="#21759b" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faVuejs} color="#42b883" />
              </div>
            </div>
            </div>
        </div>
      </div>
      </div>
      <Loader type="pacman" />
      </>
    )
}

export default About