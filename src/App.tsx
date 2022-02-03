import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import './App.css';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/edit/:id" element={<EditContact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
