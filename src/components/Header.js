import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import logo from '../assets/logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './Home';
import PatientRecommendations from './PatientRecommendations'; // Import the PatientRecommendations component
import ContactUs from './ContactUs'; // Import the ContactUs component

function Header() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'contact':
        return <ContactUs />; // Render ContactUs when 'contact' tab is active
      case 'therapists':
        return <div>Therapists Content</div>;
      case 'supervisor':
        return <div>Supervisor Content</div>;
      case 'patients':
        return <PatientRecommendations />;
      case 'assigning':
        return <div>Assigning Content</div>;
      case 'analytics':
        return <div>Analytics Content</div>;
      case 'communication':
        return <div>Communication Content</div>;
      default:
        return <Home />;
    }
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar bg-light">
        <nav className="navbar navbar-dark">
          <div className="container-fluid flex-column">
            <div className="header-top d-flex justify-content-between align-items-center">
              <img src={logo} alt="Logo" className="sidebar-logo" />
              <button className="login-btn">
                <i className="fas fa-sign-in-alt"></i> 
              </button>
            </div>
            <div className="sidebar-brand">
              <h2>Speech Synergy</h2>
            </div>

            <ul className="navbar-nav w-100">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setActiveTab('home')}>
                  <i className="fas fa-home"></i> Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setActiveTab('contact')}>
                  <i className="fas fa-envelope"></i> Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setActiveTab('therapists')}>
                  <i className="fas fa-user-md"></i> Therapists
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setActiveTab('supervisor')}>
                  <i className="fas fa-user-shield"></i> Supervisor
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setActiveTab('patients')}>
                  <i className="fas fa-user-injured"></i> Patients
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setActiveTab('assigning')}>
                  <i className="fas fa-tasks"></i> Assigning
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setActiveTab('analytics')}>
                  <i className="fas fa-chart-line"></i> Analytics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setActiveTab('communication')}>
                  <i className="fas fa-comments"></i> Communication
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
}

export default Header;
