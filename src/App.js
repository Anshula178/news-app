import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import HomeScreen from './pages/HomeScreen';
import Footer from './pages/Footer';
import ContactUs from './pages/ContactUs';
import Business from './pages/Business';
import Entertainment from './pages/Entertainment';
import Sports from './pages/Sports';
import General from './pages/General';
import Search from './pages/Search';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/business" element={<Business />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/general" element={<General />} />
        <Route path="/search" element={<Search/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
