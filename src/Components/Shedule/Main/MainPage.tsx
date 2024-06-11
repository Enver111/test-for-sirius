import React from 'react';
import s from './MainPage.module.css';
import CountdownTimer from '../Cards/Timer/Timer';
import Discount from '../Cards/Discount/Discount';
import HomeWork from '../Cards/HomeWork/HomeWork';
const MainPage = () => {
  return (
    <main className={s.main}>
      <div className={s.card_1}>
        <Discount />
      </div>
      <div className={s.card_2}>
        <CountdownTimer />
      </div>
      <div className={s.card_3}>
        <HomeWork />
      </div>
    </main>
  );
};
export default MainPage;
