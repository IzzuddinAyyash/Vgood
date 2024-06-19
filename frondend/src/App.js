import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login.jsx';
import Landingpage from './pages/Landingpage.jsx';
import DaftarRelawan from './pages/DaftarRelawan.jsx';
import Tentangkami from './pages/Tentangkami.jsx'
import Lprelawan from './pages/Lprelawan';
import Donasi from './pages/Donasi.jsx'
import Donate from './pages/Donate.jsx'
import Dashboardrelawan from './pages/Dashboardrelawan.jsx'
import Lporganisasi from './pages/Lporganisasi.jsx';
import Profilerelawan from './pages/Profilerelawan.jsx';
import CariOrganisasi from './pages/CariOrganisasi.jsx';
import CariProyek from './pages/CariProyek.jsx';
import Success from './components/Success';

const App = () => {
  return (
    <div>
     
      <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/Tentangkami" element={<Tentangkami />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/DaftarRelawan" element={<DaftarRelawan />} />
          <Route path="/Lprelawan" element={<Lprelawan />} />
          <Route path="/Lporganisasi" element={<Lporganisasi />} />
          <Route path="/Donasi" element={<Donasi />} />
          <Route path="/Donate" element={<Donate />} />
          <Route path="/Dashboardrelawan" element={<Dashboardrelawan />} />
          <Route path="/Profilerelawan" element={<Profilerelawan />} />
          <Route path="/CariProyek" element={<CariProyek />} />
          <Route path="/CariOrganisasi" element={<CariOrganisasi />} />
          <Route path="/success" element={<Success />} />
      </Routes>
     
    </div>
  )
}

export default App;
