import React from 'react';
import s from './BalanceOfActivities.module.css';
const BalanceOfActivities = () => {
  return (
    <div className={s.balance_of_activities}>
      <h1>Баланс занятий</h1>
      <div className={s.list}>
        <div className={s.classes}>
          <h3>Ментальная Арифметика</h3>
          <div className={s.current}>
            <span>32</span>
          </div>
        </div>
        <div className={s.classes}>
          <h3>Ментальная Арифметика</h3>
          <div className={s.current}>
            <span>32</span>
          </div>
        </div>
        <div className={s.classes}>
          <h3>Ментальная Арифметика</h3>
          <div className={s.current}>
            <span>32</span>
          </div>
        </div>
        <div className={s.classes}>
          <h3>Программирование</h3>
          <div className={s.current}>
            <span>0</span>
          </div>
        </div>
        <div className={s.classes}>
          <h3>Скорочтение</h3>
          <div className={s.current}>
            <span>4</span>
          </div>
        </div>
      </div>
      <button>Button</button>
    </div>
  );
};
export default BalanceOfActivities;
