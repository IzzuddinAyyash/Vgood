import React from 'react';
import iconuser from '../assets/iconuser.png';


const Profile = () => {
    return (

        <div className="min-h-screen bg-gray-100 p-8 pt-16">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-left text-gray-800 mb-8">Profile</h1>
                <div className="bg-white shadow rounded-lg p-6 mb-6">
                    <div className="flex items-center">
                        <img src={iconuser} alt="Profile"
                            className="w-24 h-24 rounded-full mr-4"
                        />
                        <div>
                            <h2 className="text-xl font-bold">Muhammad Erbie Raffasyah</h2>
                            <p className="text-gray-600">Mahasiswa</p>
                            <p className="text-gray-600">Cilodong, Depok, Jawa Barat, Indonesia</p>
                        </div>
                        <button className="ml-auto bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
                    </div>
                </div>

                <div className="bg-white shadow rounded-lg p-6 mb-6">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-bold">Informasi Pribadi</h3>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                        <div>
                            <p className="font-semibold">Nama</p>
                            <p>Muhammad Erbie Raffasyah</p>
                        </div>
                        <div>
                            <p className="font-semibold">No. Telepon</p>
                            <p>089543133243242332</p>
                        </div>
                        <div>
                            <p className="font-semibold">Alamat Email</p>
                            <p>raffasyah@gmail.com</p>
                        </div>
                        <div>
                            <p className="font-semibold">Kemampuan</p>
                            <p>Public Speaking, MC, Bahasa Inggris, Power Point, Word</p>
                        </div>
                        <div className="col-span-2">
                            <p className="font-semibold">Bio</p>
                            <p>Saya merupakan Mahasiswa semester 7 di Universitas A</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow rounded-lg p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold">Detail Alamat</h3>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
                    </div>
                    <div className="grid grid-cols-2 gap-y-2 gap-x-8">
                        <div>
                            <p className="font-semibold">Negara</p>
                            <p className="text-gray-500">Indonesia</p>
                        </div>
                        <div>
                            <p className="font-semibold">Provinsi</p>
                            <p className="text-gray-500">Jawa Barat</p>
                        </div>
                        <div>
                            <p className="font-semibold">Kode Pos</p>
                            <p className="text-gray-500">450132</p>
                        </div>
                        <div>
                            <p className="font-semibold">Kota</p>
                            <p className="text-gray-500">Bogor</p>
                        </div>
                        <div className="col-span-2">
                            <p className="font-semibold">Alamat Rumah</p>
                            <p className="text-gray-500">Jl. Kolonel Masturi No. 123, Blok C</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Profile;
