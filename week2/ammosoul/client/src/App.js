import React from 'react';
import Navbar from './components/nav/Navbar'
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <Footer />
    </div>
  )
}

export default App