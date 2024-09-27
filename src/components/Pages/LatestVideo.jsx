import React, { useState, useEffect } from 'react';

const API_URL = 'https://dorcas-backend.onrender.com/video';

const VideoCard = ({ video }) => {
  const getYouTubeVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeVideoId(video.url);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
      <div className="relative w-full h-64 lg:h-72">
        {videoId ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          ></iframe>
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-200">
            <p className="text-gray-500">Invalid YouTube URL</p>
          </div>
        )}
      </div>
      <div className="p-6 flex-grow">
        <p className="text-lg text-gray-800">{video.description}</p>
      </div>
    </div>
  );
};

const LatestVideo = () => {
  const [latestVideo, setLatestVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchLatestVideo();
  }, []);

  const fetchLatestVideo = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch videos');
      }
      const data = await response.json();
      // Sort videos by createdAt and get the latest one
      const sortedVideos = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setLatestVideo(sortedVideos[0]);
      setError(null);
    } catch (err) {
      setError('Error loading the latest video. Please try again later.');
      console.error('Error fetching latest video:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center py-8 text-2xl">Loading latest video...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-2xl text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center">Latest Video</h1>
      {latestVideo ? (
        <VideoCard video={latestVideo} />
      ) : (
        <p className="text-center text-2xl text-gray-500">No latest video available.</p>
      )}
    </div>
  );
};

export default LatestVideo;
