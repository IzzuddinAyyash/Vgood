import React from 'react'
import HeaderRelawan from '../components/HeaderRelawan';
import ProfileOrganisasicomp from '../components/ProfileOrganisasicomp'
import Footer from "../components/Footer";

const ProfileOrganisasi = () => {
  return ( 
    <div className="overflow-hidden">
      <HeaderRelawan />
      <ProfileOrganisasicomp />
      <Footer />
    </div>
  )
}

export default ProfileOrganisasi;