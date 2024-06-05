import React from 'react';
import s from './App.module.css';
import Entry from './Entry/Entry';

const App = () => {
  return (
    <div className={s.app}>
      <Entry />
    </div>
  );
};

export default App;
