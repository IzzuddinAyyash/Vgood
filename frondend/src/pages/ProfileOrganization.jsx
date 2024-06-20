import React from 'react';
import iconorganisasi from '../assets/iconorganisasi.png';

const ProfileOrganisasi = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 pt-16">
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
        
          <div className="flex-1 bg-white p-6 rounded-md shadow-lg">
            <div className="flex items-center">
              <img src={iconorganisasi} alt="Logo Organisasi" className="w-20 h-20 rounded-md mr-6" />
              <div>
                <h3 className="text-l font-bold">FYP Media</h3>
                <p className="text-gray-600 text-sm font-extralight max-w-sm">
                  FYP Media adalah perusahaan yang bergerak dalam bidang pengelolaan sosial media, artikel dan berita.
                </p>
                <div className="flex items-center text-gray-600 mb-4 mt-4 ml-10 text-sm space-x-4">
                  <div>Pusat Informasi dan Kajian</div>
                  <div className="ml-2">Social Media</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileOrganisasi;
