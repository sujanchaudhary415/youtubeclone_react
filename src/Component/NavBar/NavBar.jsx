import React from "react";
import "./NavBar.css";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import upload from "../../assets/upload.png";
import more from "../../assets/more.png";
import notification from "../../assets/notification.png";
import jack from "../../assets/jack.png";
import {Link} from "react-router-dom"

const NavBar = ({ setSidebar }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          className="menu-icon"
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
          src={menu_icon}
          alt=""
        />
        <Link to='/'><img className="logo" src={logo} alt="" /></Link>
        
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="search" placeholder="Search" />
          <img className="search-icon" src={search} alt="" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={upload} alt="" />
        <img src={more} alt="" />
        <img src={notification} alt="" />
        <img src={jack} alt="" className="user-icon" />
      </div>
    </nav>
  );
};

export default NavBar;
