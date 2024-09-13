import React, { useState } from "react";
import "./NavBar.css";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import upload from "../../assets/upload.png";
import more from "../../assets/more.png";
import notification from "../../assets/notification.png";
import jack from "../../assets/jack.png";
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({ setSidebar }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to the search results page with the query
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          className="menu-icon"
          onClick={() => setSidebar((prev) => !prev)}
          src={menu_icon}
          alt="Menu"
        />
        <Link to='/'><img className="logo" src={logo} alt="Logo" /></Link>
      </div>

      <div className="nav-middle flex-div">
        <form onSubmit={handleSearchSubmit} className="search-box flex-div">
          <input
            type="search"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit" className="search-button">
            <img className="search-icon" src={search} alt="Search" />
          </button>
        </form>
      </div>

      <div className="nav-right flex-div">
        <img src={upload} alt="Upload" />
        <img src={more} alt="More" />
        <img src={notification} alt="Notifications" />
        <img src={jack} alt="User" className="user-icon" />
      </div>
    </nav>
  );
};

export default NavBar;
