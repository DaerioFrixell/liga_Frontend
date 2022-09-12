import React from "react";
import Header from './header/Header';
import Lending from './components/lending/Lending';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Lending />

      </div>
      <Footer />
    </div>
  );
}

export default App;
