import React from 'react';
import "./Video.css";
import PlayVideo from '../../Component/PlayVideo/PlayVideo';
import Recommended from '../../Component/Recommended/Recommended';
import { useParams } from 'react-router-dom';

const Video = () => {
  const { videoId, categoryId } = useParams();

  // Ensure categoryId and videoId are available before rendering components
  return (
    <div className='play-container'>
      {videoId ? (
        <PlayVideo videoId={videoId} />
      ) : (
        <p>Loading video...</p>
      )}
      {categoryId ? (
        <Recommended categoryId={categoryId} />
      ) : (
        <p>Loading recommendations...</p>
      )}
    </div>
  );
};

export default Video;
