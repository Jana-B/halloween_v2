import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { BiSolidNavigation } from "react-icons/bi";
import { GiSpookyHouse } from "react-icons/gi";
import "../styles/header.css";

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="nav-toggle" onClick={toggleNav}>
        <div className="nav-item">
          <div className="spooky-house-icon">
            <BiSolidNavigation className="nav-icon" />
          </div>
        </div>
      </div>
      <Nav className={`navbar ${isNavOpen ? "open" : ""}`}>
        <div className="nav-link-container">
          <Nav.Link href="/homepage" className="nav-link home-link">
            <div className="nav-item">
              <div className="spooky-house-icon">
                <GiSpookyHouse className="nav-icon" />
              </div>
              <span className="nav-text">Home</span>
            </div>
          </Nav.Link>
          <Nav.Link href="/page2" className="nav-link">
            <div className="nav-item">
              <div className="spooky-house-icon">
                <GiSpookyHouse className="nav-icon" />
              </div>
              <span className="nav-text">Page2</span>
            </div>
          </Nav.Link>
          <Nav.Link href="/page3" className="nav-link">
            <div className="nav-item">
              <div className="spooky-house-icon">
                <GiSpookyHouse className="nav-icon" />
              </div>
              <span className="nav-text">Page3</span>
            </div>
          </Nav.Link>
        </div>
      </Nav>
    </header>
  );
};

export default Header;
