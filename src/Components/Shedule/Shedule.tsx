import React, { useState } from 'react';
import Header from './Header/Header';
import Aside from './Aside/Aside';
import s from './Shedule.module.css';
import MainPage from './Main/MainPage';
const Shedule = () => {
  const [activeItemId, setActiveItemId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setActiveItemId(id);
  };

  return (
    <div className={s.shedule}>
      <div className={s.header}>
        <Header />
      </div>
      <div className={s.aside}>
        <Aside handleClick={handleClick} activeItemId={activeItemId} />
      </div>
      <div className={s.main_page}>
        <MainPage activeItemId={activeItemId} />
      </div>
    </div>
  );
};
export default Shedule;
