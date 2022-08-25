import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters';
import heroAvatar from '../../assets/images/hero_Avatar.png';
import Loader from 'react-loaders';
import { FaArrowRight } from "react-icons/fa";
import Typical from "react-typical";

const Home = () =>{
    const [letterClass] = useState('text-animate')
    const nameArray = [' ','X', 'a']
    const lnameArray = ['T','h','a','o']

    return (
        <>
        
        <div className='container'>
          <div className='row'>
              <div className='col-lg'>
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <AnimatedLetters letterClass={letterClass} 
                    strArray={nameArray}
                    idx={15}/> <AnimatedLetters letterClass={letterClass} 
                    strArray={lnameArray}
                    idx={18}/></h1>
                   <h2 className="animated-hero-text">
                    I'm a <FaArrowRight className="hero-arrrow-icon"/> {' '}
                    <Typical className="hero-text-animation"
                    loop={Infinity}
                    wrapper='b'
                    steps={[
                        ' Developer',
                        2000,
                        ' Music Enthusiast',
                        2000,
                        ' Sport Enthusiast',
                        2000,
                        ' Outdoor Enthusiast',
                        2000,
                        ' Gamer',
                        2000
                    ]} />
                    </h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
                <div className='col-lg'>
                    <div className='hero-avatar'>
                        <img className='avatar' src={heroAvatar} alt="Xa" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    );
}

export default Home