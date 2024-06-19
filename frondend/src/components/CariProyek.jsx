// src/pages/CariProyek.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Membantu proyek konstruksi peduli iklim',
    date: '16 Mei 2024',
    location: 'Kota Parahyangan Bandung',
    category: 'Artikel',
  },
  {
    title: 'Membangun peternakan ayam',
    date: '18 Juni 2024',
    location: 'Kota Parahyangan Bandung',
    category: 'MDL',
  },
  {
    title: 'Memberikan perawatan gigi',
    date: '21 Juli 2024',
    location: 'Kota Parahyangan Bandung',
    category: 'DANYAD',
  },
  {
    title: 'Mengajarkan bahasa inggris',
    date: '10 Agustus 2024',
    location: 'Kota Parahyangan Bandung',
    category: 'KARYAWAN',
  },

];

const Cariproyek = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 pt-16">
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-left text-gray-800 mb-8">Cari Proyek</h1>
        <div className="flex flex-col md:flex-row md:space-x-8 mb-8">
          <input
            type="text"
            placeholder="Cari Proyek..."
            className="w-full md:w-1/3 px-3 py-2 border rounded-md mb-4 md:mb-0"
          />
          <input
            type="text"
            placeholder="Lokasi"
            className="w-full md:w-1/3 px-3 py-2 border rounded-md mb-4 md:mb-0"
          />
          <button className="w-full md:w-auto bg-blue-500 text-white px-4 py-2 rounded-md">Filters</button>
          <button className="w-full md:w-auto bg-blue-500 text-white px-4 py-2 rounded-md ml-2">Cari</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-4 rounded-md shadow-lg flex flex-col">
              <img
                src="https://via.placeholder.com/300" // Replace with your project image URL
                alt={project.title}
                className="rounded-md mb-4"
              />
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-1">{project.date}</p>
              <p className="text-gray-600 mb-1">{project.location}</p>
              <p className="text-gray-600 mb-1">{project.category}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <nav className="flex space-x-2">
            <button className="px-4 py-2 rounded-md border bg-white">1</button>
            <button className="px-4 py-2 rounded-md border">2</button>
            <button className="px-4 py-2 rounded-md border">3</button>
            <button className="px-4 py-2 rounded-md border">4</button>
            <button className="px-4 py-2 rounded-md border">5</button>
          </nav>
        </div>
      </main>
    </div>
  );
};

export default Cariproyek;
