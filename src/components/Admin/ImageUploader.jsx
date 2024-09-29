import React, { useState } from 'react';
import axios from 'axios';

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Handle file input change
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image || !description) {
      setError('Both image and description are required');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);
    formData.append('description', description);

    try {
      const response = await axios.post('https://dorcas-backend.onrender.com/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setSuccess('Image uploaded successfully');
      setError(null);
    } catch (err) {
      setError('Failed to upload image');
      setSuccess(null);
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-semibold mb-6">Upload Image</h1>

      {preview && <img src={preview} alt="Image Preview" className="mb-4" />}

      {error && <div className="text-red-500 mb-4">{error}</div>}
      {success && <div className="text-green-500 mb-4">{success}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
          <input 
            type="file" 
            id="image" 
            accept="image/*" 
            onChange={handleImageChange} 
            className="mt-1 block w-full"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea 
            id="description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            className="mt-1 block w-full border-gray-300 rounded-md"
            rows={3}
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default ImageUploader;
