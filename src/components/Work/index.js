import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import LazyLoad from 'react-lazyload';


const Work = () => {

    const [letterClass] = useState('text-animate')
    const projectText = ['P','r','o','j','e','c','t','s']
    const projectsInfo = [
        {
            title: "Adams Developement",
            description: "I worked with my team to come up with the design, and helped build the site from beginning to end.",
            cms: "CMS: WordPress",
            theme: "Theme: Divi",
            image: 'https://res.cloudinary.com/xathao-info/image/upload/v1661271672/Site images/Adams_amhtsl.png',
            url: "https://www.adamsdevelopment.com/",
        },
        {
            title: "Brothers Excavating",
            description: "Worked with the team with design, setup, and development from beginning to end.",
            cms: "CMS: WordPress",
            theme: "Theme: Divi",
            image: 'https://res.cloudinary.com/xathao-info/image/upload/v1661271674/Site images/Brother-Excavating_vrai57.png',
            url: "https://brothersexcavatingllc.com/",
        },
        {
            title: "Comfort Gallery",
            description: "My team and I helped design the site from beginning to end for the client.",
            cms: "CMS: WordPress",
            theme: "Theme: Divi",
            image: 'https://res.cloudinary.com/xathao-info/image/upload/v1661271675/Site images/Comfort-gallery_ykjwxj.png',
            url: "https://thecomfortgallery.com/",
        },
        {
            title: "Dawson Chiropractic",
            description: "A quick single site I helped design from beginning to end for the client.",
            cms: "CMS: WordPress",
            theme: "Theme: Divi",
            image: 'https://res.cloudinary.com/xathao-info/image/upload/v1661271670/Site%20images/Dawson_zjtgc1.jpg',
            url: "https://drdawsonchiro.com/",
        },
        {
            title: "Midwest 360 Peoria",
            description: "My team and I helped design the site from beginning to end.",
            cms: "CMS: WordPress",
            theme: "Theme: Divi",
            image: 'https://res.cloudinary.com/xathao-info/image/upload/v1661271670/Site%20images/Midwest360_t0map4.jpg',
            url: "https://brothersexcavatingllc.com/",

        },
        {
            title: "Peoria Law Firm",
            description: "A law firm site with a lot of content. I helpe design the site with my team from beginning to end while working with the client.",
            cms: "CMS: WordPress",
            theme: "Theme: Divi",
            image: 'https://res.cloudinary.com/xathao-info/image/upload/v1661271673/Site%20images/Peoria-Law-Frim_mlxlkw.jpg',
            url: "https://www.peorialawfirm.com/",
        },
        {
            title: "Pulling Freight",
            description: "A quick one page site built with a quick turn around.",
            cms: "CMS: WordPress",
            theme: "Theme: Divi",
            image: 'https://res.cloudinary.com/xathao-info/image/upload/v1661271674/Site%20images/Image%20for%20site%202/pulling-freight_ft0ovz.jpg',
            url: "https://www.pullingfreight.com/",
        },
        {
            title: "Quality Connection",
            description: "My team and I helped design the site from beginning to end for the client.",
            cms: "CMS: WordPress",
            theme: "Theme: Divi",
            image: 'https://res.cloudinary.com/xathao-info/image/upload/v1661271674/Site%20images/Quality-Control_iqenuo.jpg',
            url: "https://peoriajatc.com/",
        },
        {
            title: "Resch Insurance",
            description: "This was one of the site I built towards the biginning of myh career as a designer for client. It's a simple site for information.",
            cms: "CMS: WordPress",
            theme: "Theme: Elementor",
            image: 'https://res.cloudinary.com/xathao-info/image/upload/v1661271676/Site%20images/Image%20for%20site%202/Resch-Insurance_kela7e.jpg',
            url: "https://reschinsurance.com/",
        },
        {
            title: "Sherrill's Pest Control",
            description: "My team and I helped design the site from beginning to end for the client.",
            cms: "CMS: WordPress",
            theme: "Theme: Divi",
            image: 'https://res.cloudinary.com/xathao-info/image/upload/v1661271676/Site%20images/Image%20for%20site%202/Sherill-Pest-Control_tsqy4g.jpg',
            url: "https://sherrillspestcontrol.com/",
        },
        {
            title: "Sounds Good Hearing Aids",
            description: "My team and I helped design the site from beginning to end for the client.",
            cms: "CMS: WordPress",
            theme: "Theme: Divi",
            image: 'https://res.cloudinary.com/xathao-info/image/upload/v1661271677/Site%20images/Image%20for%20site%202/Sounds-Good_mlphqi.jpg',
            url: "https://soundsgoodhearingaids.com/",
        },
        {
            title: "South Sid Mission",
            description: "My team and I helped design the site from beginning to end for the client.",
            cms: "CMS: WordPress",
            theme: "Theme: Divi",
            image: 'https://res.cloudinary.com/xathao-info/image/upload/v1661271676/Site%20images/Image%20for%20site%202/SouthSide-Mission_xawgni.jpg',
            url: "https://southsidemission.org/",
        },
        {
            title: "Stewardship Financial",
            description: "This was my very first website I built from beginning to end for a client.",
            cms: "CMS: WordPress",
            theme: "Theme: Divi",
            image: 'https://res.cloudinary.com/xathao-info/image/upload/v1661271677/Site%20images/Image%20for%20site%202/Stewardship-Financials-1_mofpbs.jpg',
            url: "https://theincomesteward.com/",
        },
        {
            title: "Stewardship Financial",
            description: "This was a quick one page site that takes around a week to finish from beginning to end.",
            cms: "CMS: WordPress",
            theme: "Theme: Divi",
            image: 'https://res.cloudinary.com/xathao-info/image/upload/v1661271677/Site%20images/Image%20for%20site%202/WellMobile1_wtxcss.png',
            url: "https://www.unitypoint.org/peoria/wellmobile.aspx",
        },
        {
            title: "Stewardship Financial",
            description: "This is an auto service site I with the intention of adding products for sale. Not a full on e-commerce site but more of a listing site I built in the past.",
            cms: "CMS: WordPress",
            theme: "Theme: Divi",
            image: 'https://res.cloudinary.com/xathao-info/image/upload/v1661271678/Site%20images/Image%20for%20site%202/Zelich_dtiueu.png',
            url: "https://zelichcustoms.com/",
        },
        
        
    ];

    const renderProject = (project, index) => {
        return (
            <Card style={{ width: '25rem' }} key={index} className='box'>
            <a href={project.url} target="_blank">
                <LazyLoad>
              <Card.Img variant="top" src={project.image} />
              </LazyLoad></a>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.cms}</Card.Text>
                <Card.Text>{project.theme}</Card.Text>
                <Card.Text>{project.description}</Card.Text>
                <a href={project.url} target="_blank">
                <Button className='cardBtn'>VIEW SITE</Button>
                </a>
              </Card.Body>
            </Card>
            );
    };

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg'>
                        <h1>
                       <AnimatedLetters letterClass={letterClass} 
                    strArray={projectText}
                    idx={12}/> 
                    </h1>
                        <div className='project-header'>
                         <div className='project-text'>
                        <p >Here are some projects I done in the past with my previous team.<br/> Most of these are built in WordPress with Theme builder like  Divi and Elementor.</p>
                        </div>
                        </div>
                        </div>
                    <div className='grid'>
                       { projectsInfo.map(renderProject)}
                </div>
            </div>
        </div>
            <Loader type='pacman' />
        </>
    )
}

export default Work