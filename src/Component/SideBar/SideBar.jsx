import React from "react";
import "./SideBar.css";
import automobiles from "../../assets/automobiles.png";
import blogs from "../../assets/blogs.png";
import entertainment from "../../assets/entertainment.png";
import sports from "../../assets/sports.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import home from "../../assets/home.png";
import cameron from "../../assets/cameron.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import gerard from "../../assets/gerard.png";
import gameicon from "../../assets/game_icon.png";
import news from "../../assets/news.png";

const SideBar = ({ sidebar,category,setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? "": "small-sidebar"}`}>
      <div className="shortcut-links">
        <div className={`side-link ${category===0?'active':''}`} onClick={()=>setCategory(0)}>
          <img src={home} alt="Home Icon" />
          <p>Home</p>
        </div>

        <div className={`side-link ${category===24?"active":''}`} onClick={()=>setCategory(24)}>
          <img src={entertainment} alt="Entertainment Icon" />
          <p>Entertainment</p>
        </div>

        <div className={`side-link ${category===20?"active":''}`} onClick={()=>setCategory(20)}>
          <img src={gameicon} alt="Game Icon" />
          <p>Game</p>
        </div>

        <div className={`side-link ${category===2?"active":''}`} onClick={()=>setCategory(2)}>
          <img src={automobiles} alt="Automobiles Icon" />
          <p>Automobiles</p>
        </div>

        <div className={`side-link ${category===17?"active":''}`} onClick={()=>setCategory(17)}>
          <img src={sports} alt="Sports Icon" />
          <p>Sports</p>
        </div>

        <div className={`side-link ${category===28?"active":''}`} onClick={()=>setCategory(28)}>
          <img src={tech} alt="Tech Icon" />
          <p>Tech</p>
        </div>

        <div className={`side-link ${category===10?"active":''}`} onClick={()=>setCategory(10)}>
          <img src={music} alt="Music Icon" />
          <p>Music</p>
        </div>

        <div className={`side-link ${category===22?"active":''}`} onClick={()=>setCategory(22)}>
          <img src={blogs} alt="Blogs Icon" />
          <p>Blogs</p>
        </div>

        <div className={`side-link ${category===25?"active":''}`} onClick={()=>setCategory(25)}>
          <img src={news} alt="News Icon" />
          <p>News</p>
        </div>

      </div>
      <hr />
      <div className="subscribed-list">
        <h3>SUBSCRIBED</h3>
        <div className="side-link">
          <img src={jack} alt="PewDiePie Icon" />
          <p>PewDiePie</p>
        </div>

        <div className="side-link">
          <img src={cameron} alt="MrBeast Icon" />
          <p>MrBeast</p>
        </div>

        <div className="side-link">
          <img src={simon} alt="iShowSpeed Icon" />
          <p>iShowSpeed</p>
        </div>

        <div className="side-link">
          <img src={gerard} alt="Gerard Icon" />
          <p>Gerard</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
