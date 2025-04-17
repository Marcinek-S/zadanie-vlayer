import React from 'react';

import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import CardSection from './components/CardSection';
import QuoteSection from './components/QuoteSection';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
    <MainSection />
    <CardSection />
    <QuoteSection />
    <Footer />  
    </div>
  );
}

export default App;
