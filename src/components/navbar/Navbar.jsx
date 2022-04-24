import "./Navbar.css";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navHandle = () => {
    setNav(!nav);
  };
  return (
    <nav className={nav ? "navbar navbar-bg" : "navbar"}>
      <div className={nav ? "logo darkLogo" : "logo"}>
        <h2>BEACHES.</h2>
      </div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>Book</li>
        <li>Views</li>
      </ul>
      <div className="nav-icons">
        <BiSearch className="icon" style={{ marginRight: "1rem" }} />
        <BsPerson className="icon" />
      </div>
      <div className="hamburger">
        {nav ? (
          <AiOutlineClose
            className="icon"
            onClick={navHandle}
            style={{ color: "#000" }}
          />
        ) : (
          <HiOutlineMenuAlt4 className="icon" onClick={navHandle} />
        )}
      </div>

      {/* Mobile Menu */}

      <div className={nav ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-nav">
          <li>Home</li>
          <li>Destinations</li>
          <li>Travel</li>
          <li>Book</li>
          <li>Views</li>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icons">
            <button>Search</button>
            <button>Account</button>
          </div>
          <div className="social-icons">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaPinterest className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
