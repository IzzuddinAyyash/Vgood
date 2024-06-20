import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import iconuser from '../assets/iconuser.png';
import tanggapan from '../assets/tanggapan.png';
import diskusi from '../assets/diskusi.png';
import edukasi from '../assets/edukasi.png';
import article from '../assets/Dashboard/article.png';
import proyek from '../assets/Dashboard/proyek.png';
import relawan from '../assets/Dashboard/relawan.png';
import jam from '../assets/Dashboard/jam.png';

const CariRelawan = () => {
  const [provinces, setProvinces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json')
      .then(response => response.json())
      .then(data => {
        setProvinces(data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching provinces:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8 pt-16">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-left text-gray-800 mb-8">Cari Organisasi</h1>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-2/3 space-y-4 mt-4 md:mt-0">
            <Link to="/Profileorganisasi" className="block">
              <div className="bg-white p-4 rounded-md shadow-lg flex items-center cursor-pointer hover:bg-gray-100 transition-colors duration-200">
                <img src={iconuser} alt="" className="w-14 h-14 rounded-md mr-4" />
                <div>
                  <h3 className="text-lg font-bold">FYP Media</h3>
                  <p className="text-gray-600">Kota Baru Parahyangan, Cimahi</p>
                  <div className="pt-2">
                    <div className="flex items-center mb-2">
                      <p className="text-gray-600">Keahlian :</p>
                    </div>
                    <div className="flex items-center text-gray-600 space-x-4">
                      <div className="flex items-center">
                        <p className='text-gray-400 font-thin'>Excel,  Word, Photoshop, Adobe Lightroom, Adobe Illustrator</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/profile-organisasi" className="block">
              <div className="bg-white p-4 rounded-md shadow-lg flex items-center cursor-pointer hover:bg-gray-100 transition-colors duration-200">
                <img src={iconuser} alt="" className="w-14 h-14 rounded-md mr-4" />
                <div>
                  <h3 className="text-lg font-bold">FYP Media</h3>
                  <p className="text-gray-600">Kota Baru, Cimahi</p>
                  <div className="pt-2">
                    <div className="flex items-center mb-2">
                      <p className="text-gray-600">Keahlian</p>
                    </div>
                    <div className="flex items-center text-gray-600 space-x-4">
                    <p className='text-gray-400 font-thin'>Excel,  Word, Photoshop, Adobe Lightroom, Adobe Illustrator</p>
                      </div>
                    </div>
                </div>
              </div>
            </Link>

            <Link to="/profile-organisasi" className="block">
              <div className="bg-white p-4 rounded-md shadow-lg flex items-center cursor-pointer hover:bg-gray-100 transition-colors duration-200">
                <img src={iconuser} alt="" className="w-14 h-14 rounded-md mr-4" />
                <div>
                  <h3 className="text-lg font-bold">FYP Media</h3>
                  <p className="text-gray-600">Kota Baru Parahyangan, Cimahi</p>
                  <div className="pt-2">
                    <div className="flex items-center mb-2">
                      <img src={edukasi} alt="Artikel" className="w-5 h-5 mr-2" />
                      <p className="text-gray-600">Edukasi</p>
                    </div>
                    <div className="flex items-center text-gray-600 space-x-4">
                      <div className="flex items-center">
                        <img src={proyek} alt="Proyek" className="w-4 h-4 mr-1" />
                        <span>2 Proyek</span>
                      </div>
                      <div className="flex items-center">
                        <img src={relawan} alt="Relawan" className="w-4 h-4 mr-1" />
                        <span>4 Relawan</span>
                      </div>
                      <div className="flex items-center">
                        <img src={jam} alt="Jam" className="w-4 h-4 mr-1" />
                        <span>2 Jam</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>


            <div className="flex justify-center mt-4">
              <nav className="flex space-x-2">
                <button className="px-4 py-2 rounded-full border bg-white">1</button>
                <button className="px-4 py-2 rounded-full border">2</button>
                <button className="px-4 py-2 rounded-full border">3</button>
                <button className="px-4 py-2 rounded-full border">4</button>
                <button className="px-4 py-2 rounded-full border">5</button>
              </nav>
            </div>
          </div>
          <div className="md:w-1/3 bg-white p-4 rounded-md shadow-lg flex-grow ">
            <form className="flex flex-col h-full">
              <div className="mb-4 ">
                <div className="w-full ">
                  <label className="block text-gray-700 mb-2" htmlFor="search">Nama</label>
                  <input type="text" id="search" className="w-full px-3 py-2 border rounded-md" placeholder="Cari inisial nama" />
                </div>
                
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="location">Lokasi </label>
                <select id="location" className="w-full px-3 py-2 border rounded-md">
                  <option classname="text-gray-700">Pilih Lokasi...</option>
                  {loading ? (
                    <option disabled>Loading...</option>
                  ) : (
                    provinces.map((province, index) => (
                      <option key={index} value={province.id}>
                        {province.name}
                      </option>
                    ))
                  )}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="category">Keahlian</label>
                <select id="category" className="w-full px-3 py-2 border rounded-md">
                  <option>Pilih Keahlian</option>
                </select>
              </div>
              
              <div className="">
                <button type="button" className="w-full bg-[#0A65CC] text-white py-2 rounded-md">Cari</button>
              </div>
              <div className="">
                <button type="button" className="w-full bg-[#0A65CC] text-white py-2 rounded-md mt-4">Refresh</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CariRelawan;
