import React from 'react';

// Sample data for ministries
const ministriesData = [
  {
    id: 1,
    title: 'Community Outreach',
    description: 'Engaging with the local community to provide support and resources.',
    image: 'path/to/community-outreach.jpg', // replace with actual image path
  },
  {
    id: 2,
    title: 'Education Program',
    description: 'Providing educational resources and opportunities for children and adults.',
    image: 'path/to/education-program.jpg', // replace with actual image path
  },
  {
    id: 3,
    title: 'Health Services',
    description: 'Offering health services and wellness programs to improve community health.',
    image: 'path/to/health-services.jpg', // replace with actual image path
  },
  {
    id: 4,
    title: 'Spiritual Guidance',
    description: 'Providing spiritual support and guidance through various programs.',
    image: 'path/to/spiritual-guidance.jpg', // replace with actual image path
  },
];

const Ministries = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Ministries</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ministriesData.map((ministry) => (
          <div key={ministry.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={ministry.image}
              alt={ministry.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{ministry.title}</h2>
              <p className="text-gray-700">{ministry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ministries;
