import React, { useEffect, useState } from "react";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import save from "../../assets/save.png";
import share from "../../assets/share.png";
import { API_KEY, value_convertor } from "../../Data";
import "./PlayVideo.css";
import moment from "moment";
import { useParams } from "react-router-dom";

const PlayVideo = () => {
  const { videoId } = useParams();
  const [apiData, setApidata] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const video_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;
        const response = await fetch(video_url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setApidata(data.items[0]);
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };

    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    const fetchChannelData = async () => {
      if (!apiData) return;

      try {
        const channel_url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
        const channelResponse = await fetch(channel_url);
        if (!channelResponse.ok) {
          throw new Error(`HTTP error! Status: ${channelResponse.status}`);
        }
        const channelData = await channelResponse.json();
        setChannelData(channelData.items[0]);

        const comment_url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
        const commentResponse = await fetch(comment_url);
        if (!commentResponse.ok) {
          throw new Error(`HTTP error! Status: ${commentResponse.status}`);
        }
        const commentData = await commentResponse.json();
        setCommentData(commentData.items || []);
      } catch (error) {
        console.error("Error fetching channel or comment data:", error);
      }
    };

    fetchChannelData();
  }, [apiData, videoId]);

  if (!apiData) return <p>Loading...</p>;

  return (
    <div className="play-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <h3>{apiData.snippet.title}</h3>
      <div className="play-video-info">
        <p>
          {value_convertor(apiData.statistics.viewCount)} Views &bull;{" "}
          {moment(apiData.snippet.publishedAt).fromNow()}
        </p>
        <div>
          <span>
            <img src={like} alt="Like" />
            {value_convertor(apiData.statistics.likeCount)}
          </span>
          <span>
            <img src={dislike} alt="Dislike" />
          </span>
          <span>
            <img src={save} alt="Save" />
            Save
          </span>
          <span>
            <img src={share} alt="Share" />
            Share
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img
          src={channelData ? channelData.snippet.thumbnails.default.url : ""}
          alt="Channel Thumbnail"
        />
        <div>
          <p>{apiData.snippet.channelTitle}</p>
          <span>
            {value_convertor(channelData ? channelData.statistics.subscriberCount : "1M")}
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="video-description">
        <p>{apiData.snippet.description.slice(0, 250)}</p>
        <hr />
        <h4>{value_convertor(apiData.statistics.commentCount)} Comments</h4>

        {Array.isArray(commentData) && commentData.length > 0 ? (
          commentData.map((item, index) => (
            <div key={index} className="comment">
              <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="Author" />
              <div>
                <h3>
                  {item.snippet.topLevelComment.snippet.authorDisplayName}{" "}
                  <span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span>
                </h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action">
                  <img src={like} alt="Like" />
                  <span>{value_convertor(item.snippet.topLevelComment.snippet.likeCount)}</span>
                  <img src={dislike} alt="Dislike" />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No comments available.</p>
        )}
      </div>
    </div>
  );
};

export default PlayVideo;
