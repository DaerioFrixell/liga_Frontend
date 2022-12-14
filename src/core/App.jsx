import React from "react";
import Lending from '../view/pages/lending/Lending';
import {
  Routes,
  Route,
} from "react-router-dom";
import './app.scss'
import LessonsList from "../view/pages/lessons/lessonsList/LessonsList";

function App() {
  return (
    <section className="app">
      <Lending />
      <Routes>
        <Route path='LessonsList' element={<LessonsList />} />
      </Routes>
    </section>
  );
}

export default App;
