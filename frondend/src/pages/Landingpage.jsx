import React from 'react'
import Header from '../components/Header';
import Home from "../components/Home";
import Page from "../components/Page";
import Kegiatan from "../components/Kegiatan";
import Blog from "../components/Blog";
import Keunggulan from "../components/Tanggapan";
import Footer from "../components/Footer";


const Landingpage = () => {
  return ( 
    <div className="overflow-hidden">
      <Header />
      <Home />
      <Page />
      <Kegiatan />
      <Blog />
      <Keunggulan />
      <Footer />
    </div>
  )
}

export default Landingpage;
