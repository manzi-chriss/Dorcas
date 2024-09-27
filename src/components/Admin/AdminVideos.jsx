// import React, { useState, useEffect } from 'react';
// import { Edit, Trash2 } from 'lucide-react';

// const API_URL = 'https://dorcas-backend.onrender.com/video';

// const VideoCard = ({ video, onEdit, onDelete }) => (
//   <div className="bg-white rounded-lg shadow-md overflow-hidden">
//     <div className="aspect-w-16 aspect-h-9">
//       <iframe 
//         src={video.url} 
//         frameBorder="0" 
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
//         allowFullScreen
//         className="w-full h-full"
//       ></iframe>
//     </div>
//     <div className="p-4">
//       <p className="text-sm text-gray-600 mb-2">{video.description}</p>
//       <div className="flex justify-end space-x-2">
//         <button onClick={() => onEdit(video)} className="text-blue-500 hover:text-blue-700">
//           <Edit size={18} />
//         </button>
//         <button onClick={() => onDelete(video._id)} className="text-red-500 hover:text-red-700">
//           <Trash2 size={18} />
//         </button>
//       </div>
//     </div>
//   </div>
// );

// function Videos() {
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchVideos();
//   }, []);

//   const fetchVideos = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(API_URL);
//       if (!response.ok) {
//         throw new Error('Failed to fetch videos');
//       }
//       const data = await response.json();
//       setVideos(data);
//       setError(null);
//     } catch (err) {
//       setError('Error fetching videos. Please try again later.');
//       console.error('Error fetching videos:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleEdit = (video) => {
//     // Implement edit functionality or navigation to edit page
//     console.log('Edit video:', video);
//   };

//   const handleDelete = async (videoId) => {
//     if (window.confirm('Are you sure you want to delete this video?')) {
//       try {
//         const response = await fetch(`${API_URL}/${videoId}`, { method: 'DELETE' });
//         if (!response.ok) {
//           throw new Error('Failed to delete video');
//         }
//         fetchVideos(); // Refresh the video list after deletion
//       } catch (err) {
//         console.error('Error deleting video:', err);
//         setError('Error deleting video. Please try again.');
//       }
//     }
//   };

//   if (loading) {
//     return <div className="text-center py-4">Loading videos...</div>;
//   }

//   if (error) {
//     return <div className="text-center py-4 text-red-500">{error}</div>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">Posted Videos</h1>
//       {videos.length === 0 ? (
//         <p className="text-center text-gray-500">No videos posted yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {videos.map((video) => (
//             <VideoCard 
//               key={video._id} 
//               video={video} 
//               onEdit={handleEdit} 
//               onDelete={handleDelete} 
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Videos;