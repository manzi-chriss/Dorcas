import React from 'react';
import certificate from '../assets/img/certificate.jpg';

const Certificates = () => {
  // Sample certificates data - replace with your actual certificates
  const certificates = [
    {
      id: 1,
      image: certificate,
      title: 'Certificate of Excellence',
      description: 'Awarded for outstanding achievement',
      date: '2024'
    },
    // Add more certificates as needed
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-black">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Our Certificates</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div 
              key={cert.id}
              className="bg-green-50 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <img 
                src={cert.image} 
                alt={cert.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl text-black font-semibold mb-2">{cert.title}</h3>
                <p className="text-gray-600 mb-2">{cert.description}</p>
                <p className="text-sm text-gray-500">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;