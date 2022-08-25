import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";
import Logo from "../../assets/images/Xa_Logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faEnvelope, faHome, faLaptopCode, faUser  } from '@fortawesome/free-solid-svg-icons';



function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={Logo} alt="Xa's Logo" width="90px" height="auto"/>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <FontAwesomeIcon icon={faHome} /> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                 <FontAwesomeIcon icon={faUser} /> About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/work"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <FontAwesomeIcon icon={faLaptopCode} /> Work
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               <FontAwesomeIcon icon={faEnvelope} />  Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={faList} className={click ? "fas fa-times" : "fas fa-bars"}></FontAwesomeIcon>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;