import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  HomePage  from './components/HomePage';
import  AboutPage  from './components/AboutPage';
import  ProjectsPage  from './components/ProjectsPage';
import ContactsPage from './components/ContactsPage';
import  NavBar  from './components/NavBar';
import  Footer  from './components/Footer';
import './App.css';



function App() {
  return (
    <Router>
      <div className='bg'>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
