// src/pages/CariOrganisasi.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const organizations = [
  {
    name: 'FYP Media',
    location: 'Kota Baru Parahyangan, Cimahi',
    category: 'Artikel',
    projects: 2,
    volunteers: 4,
    hours: 2,
  },
  {
    name: 'FYP Media',
    location: 'Kota Baru, Cimahi',
    category: 'Diskusi',
    projects: 1,
    volunteers: 3,
    hours: 3,
  },
  {
    name: 'FYP Media',
    location: 'Kota Parahyangan, Bandung',
    category: 'Edukasi',
    projects: 3,
    volunteers: 2,
    hours: 1,
  },
  {
    name: 'FYP Media',
    location: 'Kota Baru, Cimahi',
    category: 'Diskusi',
    projects: 3,
    volunteers: 3,
    hours: 3,
  },
];

const CariOrganisasi = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Cari Organisasi</h2>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/4 bg-white p-4 rounded-md shadow-lg">
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="search">Cari Organisasi</label>
                <input type="text" id="search" className="w-full px-3 py-2 border rounded-md" placeholder="Cari Organisasi..." />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="location">Lokasi Organisasi</label>
                <select id="location" className="w-full px-3 py-2 border rounded-md">
                  <option>Pilih Lokasi...</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="category">Kategori Organisasi</label>
                <select id="category" className="w-full px-3 py-2 border rounded-md">
                  <option>Pilih Kategori Organisasi...</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="focus">Fokus Organisasi</label>
                <select id="focus" className="w-full px-3 py-2 border rounded-md">
                  <option>Pilih Fokus Organisasi...</option>
                </select>
              </div>
              <button type="button" className="w-full bg-blue-500 text-white py-2 rounded-md">Refresh</button>
            </form>
          </div>
          <div className="md:w-3/4 space-y-4 mt-4 md:mt-0">
            {organizations.map((org, index) => (
              <div key={index} className="bg-white p-4 rounded-md shadow-lg flex justify-between">
                <div>
                  <h3 className="text-lg font-bold">{org.name}</h3>
                  <p className="text-gray-600">{org.location}</p>
                  <p className="text-gray-600">{org.category}</p>
                </div>
                <div className="flex space-x-4">
                  <p>{org.projects} Proyek</p>
                  <p>{org.volunteers} Relawan</p>
                  <p>{org.hours} Jam</p>
                </div>
              </div>
            ))}
            <div className="flex justify-center mt-4">
              <nav className="flex space-x-2">
                <button className="px-4 py-2 rounded-md border bg-white">1</button>
                <button className="px-4 py-2 rounded-md border">2</button>
                <button className="px-4 py-2 rounded-md border">3</button>
                <button className="px-4 py-2 rounded-md border">4</button>
                <button className="px-4 py-2 rounded-md border">5</button>
              </nav>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CariOrganisasi;
