import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './SearchResults.css'; // Import the CSS for styling
import { API_KEY } from '../../Data'; // Ensure these are correctly imported
import moment from 'moment';

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query') || '';

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&maxResults=10&key=${API_KEY}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setResults(data.items);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    if (query) {
      fetchSearchResults();
    }
  }, [query]);

  return (
    <div className='feed'>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {results.length === 0 && !loading && <p>No results found for "{query}"</p>}
      {results.map((video) => (
        <Link to={`/video/defaultCategory/${video.id.videoId}`} className="card" key={video.id.videoId}>
          <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
          <h2>{video.snippet.title}</h2>
          <h3>{video.snippet.channelTitle}</h3>
          <p>{moment(video.snippet.publishedAt).fromNow()}</p>
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
