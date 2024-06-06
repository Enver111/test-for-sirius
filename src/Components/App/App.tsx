import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import s from './App.module.css';
import Entry from '../Entry/Entry';
import Shedule from '../Shedule/Shedule';

const App = () => {
  return (
    <Router>
      <div className={s.app}>
        <Routes>
          <Route path='/' element={<Entry />} />
          <Route path='/shedule' element={<Shedule />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
