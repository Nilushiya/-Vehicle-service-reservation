import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';
import Reservations from './components/Reservations';
import ReservationForm from './components/ReservationForm';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Vehicle Service Reservation</h1>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/reservations/new" element={<ReservationForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

