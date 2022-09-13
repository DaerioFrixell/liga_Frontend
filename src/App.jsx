import React from "react";
import Header from './components/header/Header';
import Lending from './components/lending/Lending';
import './app.scss'

function App() {
  return (
    <section className="app">
      <Header />
      <Lending />
    </section>
  );
}

export default App;
