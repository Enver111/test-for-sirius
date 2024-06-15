import React from 'react';
import Arrow from '../../../../libs/icon/calendar/arrow.svg';
import s from './CalendarHead.module.css';
const CalendarHead = () => {
  return (
    <div className={s.calendar_head}>
      <div className={s.dropdown}>
        <img src={Arrow} alt='arrow' />
      </div>
      <button className={s.btn}>Изменить расписание</button>
    </div>
  );
};
export default CalendarHead;
