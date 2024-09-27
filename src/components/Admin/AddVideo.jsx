import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://dorcas-backend.onrender.com/video';

const AddVideo = ({ onClose }) => {
  const [videos, setVideos] = useState([]);
  const [newVideo, setNewVideo] = useState({ id: '', url: '', description: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 2; // Two rows per slide

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await axios.get(API_URL);
      const sortedVideos = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Sort by latest posted
      setVideos(sortedVideos);
    } catch (err) {
      setError('Failed to fetch videos');
      console.error('Error fetching videos:', err);
    }
  };

  const handleInputChange = (e) => {
    setNewVideo({ ...newVideo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (newVideo.id) {
        await axios.put(`${API_URL}/${newVideo.id}`, newVideo);
        setSuccess('Video updated successfully');
      } else {
        await axios.post(API_URL, newVideo);
        setSuccess('Video added successfully');
      }
      setNewVideo({ id: '', url: '', description: '' });
      fetchVideos();
    } catch (err) {
      setError('Failed to save video');
      console.error('Error saving video:', err);
    }
  };

  const handleEdit = (video) => {
    setNewVideo({ id: video._id, url: video.url, description: video.description });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setSuccess('Video deleted successfully');
      fetchVideos();
    } catch (err) {
      setError('Failed to delete video');
      console.error('Error deleting video:', err);
    }
  };

  const totalPages = Math.ceil(videos.length / rowsPerPage);
  const displayedVideos = videos.slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md max-h-[80vh] flex flex-col"> {/* Adjusted max-width */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Add/Update Video</h2>
        <button onClick={onClose} className="text-red-500 text-xl">&times;</button>
      </div>

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label htmlFor="url" className="block text-sm font-medium text-gray-700">URL</label>
          <input
            type="text"
            id="url"
            name="url"
            value={newVideo.url}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            name="description"
            value={newVideo.description}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {newVideo.id ? 'Update Video' : 'Add Video'}
        </button>
      </form>

      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}

      <div className="overflow-y-auto flex-grow">
        <table className="min-w-full bg-white">
          <thead className="sticky top-0 bg-white">
            <tr>
              <th className="px-2 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">URL</th>
              <th className="px-2 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Description</th>
              <th className="px-2 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody>
            {displayedVideos.map((video, index) => (
              <tr key={video._id || index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-2 py-4 whitespace-normal break-words"> {/* Added break-words for wrapping */}
                  <a href={video.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    {video.url}
                  </a>
                </td>
                <td className="px-2 py-4">{video.description}</td>
                <td className="px-2 py-4">
                  <button onClick={() => handleEdit(video)} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded text-xs mr-2">Edit</button>
                  <button onClick={() => handleDelete(video._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between mt-4">
        <button 
          onClick={() => setCurrentPage(Math.max(currentPage - 1, 0))}
          disabled={currentPage === 0}
          className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
        >
          Previous
        </button>
        <button 
          onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages - 1))}
          disabled={currentPage >= totalPages - 1}
          className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AddVideo;
