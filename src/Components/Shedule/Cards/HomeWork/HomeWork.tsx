import React from 'react';
import Work from '../../../../libs/icon/cards/work.svg';
import Reports from '../../../../libs/icon/cards/reports.svg';
import s from './HomeWork.module.css';

const HomeWork = () => {
  return (
    <div className={s.home_work}>
      <div className={s.work}>
        <h1>Домашние задания</h1>
        <img src={Work} alt='work' />
      </div>
      <div className={s.reports}>
        <h1>Отчеты от учителей</h1>
        <img src={Reports} alt='reports' />
      </div>
    </div>
  );
};

export default HomeWork;
