import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <div className="container">
        <h1>
          Crypto<span className="primary">Fi</span>
        </h1>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="featured" smooth={true} duration={500}>
              Featured
            </Link>
          </li>
          <li>
            <Link to="earn" smooth={true} duration={500}>
              Earn
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="btn-group">
          <button className="btn">Connect Wallet</button>
        </div>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#333" }} />
          ) : (
            <FaBars size={20} style={{ color: "#333" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
