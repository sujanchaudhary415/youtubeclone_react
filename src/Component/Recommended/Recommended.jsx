import React, { useEffect, useState } from "react";
import "./Recommended.css";
import { value_convertor } from "../../Data";
import { API_KEY } from "../../Data";
import { Link } from "react-router-dom";

const Recommended = ({ categoryId }) => {
  const [apiData, setApidata] = useState([]);

  const recommended_video = async () => {
    const recommended_video_url =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
    await fetch(recommended_video_url)
      .then((res) => res.json())
      .then((data) => setApidata(data.items));
  };

  useEffect(() => {
    recommended_video();
  }, []);

  return (
    <div className="recommended">
      {apiData.map((item, index) => {
        return (
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="video-info">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{value_convertor(item.statistics.viewCount)}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recommended;
