import React from 'react';
import VolunteerCard from '../components/VolunteerCard';

const VolunteerList = () => {
  const volunteers = [
    {
      name: 'Muhammad Erbie Raffasyah',
      location: 'Kota Baru Parahyangan, Bekasi',
      skills: 'Excel, Word, Photoshop, Adobe Lightroom, Adobe Illustrator',
    },
    {
      name: 'Muhammad Erbie Raffasyah',
      location: 'Kota Baru Parahyangan, Bekasi',
      skills: 'Excel, Word, Photoshop, Adobe Lightroom, Adobe Illustrator',
    },
    // Tambahkan lebih banyak data relawan jika perlu
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-2">Relawan yang berminat bergabung pada organisasi</h1>
      <p className="text-center text-gray-600 mb-8">Pilih relawan sesuai dengan kriteria organisasimu</p>
      {volunteers.map((volunteer, index) => (
        <VolunteerCard
          key={index}
          name={volunteer.name}
          location={volunteer.location}
          skills={volunteer.skills}
        />
      ))}
      <div className="text-center mt-8">
        <a href="#" className="text-blue-600 hover:underline">Lihat relawan lainnya</a>
      </div>
    </div>
  );
};

export default VolunteerList;
