import React from 'react';
import Avatar from '../../../../libs/icon/cards/avatar.svg';
import s from './UpcomingLessons.module.css';
const UpcomingLessons = () => {
  return (
    <div className={s.upcoming_lessons}>
      <h1>Ближайшие уроки</h1>
      <div className={s.list}>
        <div className={s.classes}>
          <div className={s.section}>
            <div className={s.date}>
              1 <span>мая</span>
            </div>
            <div className={s.les_name}>Ментальная Арифметика</div>
          </div>
          <div className={s.section}>
            <div className={s.time}>14:00-14:25</div>
            <div className={s.teach}>
              <img src={Avatar} alt='avatar' />
              <p>Белкина Инна</p>
            </div>
          </div>
          <div className={s.section}>
            <button>Button</button>
            <button>Button</button>
          </div>
        </div>
        <div className={s.classes}>
          <div className={s.section}>
            <div className={s.date}>
              1 <span>мая</span>
            </div>
            <div className={s.les_name}>Ментальная Арифметика</div>
          </div>
          <div className={s.section}>
            <div className={s.time}>14:00-14:25</div>
            <div className={s.teach}>
              <img src={Avatar} alt='avatar' />
              <p>Белкина Инна</p>
            </div>
          </div>
          <div className={s.section}>
            <button>Button</button>
            <button>Button</button>
          </div>
        </div>
        <div className={s.classes}>
          <div className={s.section}>
            <div className={s.date}>
              1 <span>мая</span>
            </div>
            <div className={s.les_name}>Ментальная Арифметика</div>
          </div>
          <div className={s.section}>
            <div className={s.time}>14:00-14:25</div>
            <div className={s.teach}>
              <img src={Avatar} alt='avatar' />
              <p>Белкина Инна</p>
            </div>
          </div>
          <div className={s.section}>
            <button>Button</button>
            <button>Button</button>
          </div>
        </div>
        <div className={s.classes}>
          <div className={s.section}>
            <div className={s.date}>
              19
              <span>мая</span>
            </div>
            <div className={s.les_name}>Ментальная Арифметика</div>
          </div>
          <div className={s.section}>
            <div className={s.time}>14:00-14:25</div>
            <div className={s.teach}>
              <img src={Avatar} alt='avatar' />
              <p>Белкина Инна</p>
            </div>
          </div>
          <div className={s.section}>
            <button>Button</button>
            <button>Button</button>
          </div>
        </div>
        <div className={s.classes}>
          <div className={s.section}>
            <div className={s.date}>
              1 <span>мая</span>
            </div>
            <div className={s.les_name}>Ментальная Арифметика</div>
          </div>
          <div className={s.section}>
            <div className={s.time}>14:00-14:25</div>
            <div className={s.teach}>
              <img src={Avatar} alt='avatar' />
              <p>Белкина Инна</p>
            </div>
          </div>
          <div className={s.section}>
            <button>Button</button>
            <button>Button</button>
          </div>
        </div>
      </div>
      <div className={s.button}>
        <button className={s.btn}>Button</button>
      </div>
    </div>
  );
};
export default UpcomingLessons;
