// rafce
// import React from 'react';
// import Header from './components/Header';
import Footer from './components/Footer';
import MainBody from './pages/MainBody';
import Portfolio from './pages/Portfolio';
import AltHeader from './components/AltHeader';
import Contact from './pages/Contact'
import { useState } from 'react';


const App = () => {
  const [page, setPage] = useState('about');
  const displayPage = () => {
    if (page === 'about') {
      return <MainBody/>
    }
    if (page === 'portfolio') {
      return <Portfolio/>
    }
    if (page === 'contact') {
      return <Contact/>
    }
  }
  return (
    <>
      <AltHeader setPage={setPage} />
      {displayPage()}
      <Footer />
    </>
  )
}

export default App;