import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faLaptopCode, faUser } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, Container } from "react-bootstrap";

const Sidebar = () => {

    return <>
           
        <div className='nav-bar'>
            <Navbar collapseOnSelect fixed="top" expand='sm'> 
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav> 
                    <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} className='nav-icon' />HOME
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} className='nav-icon' /> ABOUT
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="work-link" to="/work">
                    <FontAwesomeIcon icon={faLaptopCode} className='nav-icon'/> WORK
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope}  className='nav-icon'/> CONTACT
                    </NavLink>
            </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    </>
            }

export default Sidebar