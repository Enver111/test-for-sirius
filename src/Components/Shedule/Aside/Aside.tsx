import React from 'react';
import Logo from '../../../libs/icon/aside/logo.svg';
import s from './Aside.module.css';
import Home from '../../../libs/icon/aside/menu/home.svg';
import Payment from '../../../libs/icon/aside/menu/payment.svg';
import Schedule from '../../../libs/icon/aside/menu/schedule.svg';
interface AsideProps {
  handleClick: (id: number) => void;
  activeItemId: number | null;
}
const Aside: React.FC<AsideProps> = ({ handleClick, activeItemId }) => {
  const items = [
    { id: 1, name: 'Главная', icon: Home },
    { id: 2, name: 'Расписание', icon: Schedule },
    { id: 3, name: 'Оплата', icon: Payment },
    { id: 4, name: 'Достижения', icon: Home },
    { id: 5, name: 'Тренажеры', icon: Home },
    { id: 6, name: 'Библиотека', icon: Home },
    { id: 7, name: 'Проверка связи', icon: Home },
    { id: 8, name: 'Настройки', icon: Home },
    { id: 9, name: 'Вопросы', icon: Home },
  ];

  return (
    <aside className={s.aside}>
      <div className={s.logo}>
        <img src={Logo} alt='logo' />
      </div>
      <div className={s.menu}>
        {items.map((item) => (
          <div
            key={item.id}
            className={`${s.menu_list} ${
              item.id === activeItemId ? s.menu_list_active : ''
            }`}
            onClick={() => handleClick(item.id)}
          >
            <img src={item.icon} alt={item.icon} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      <div className={s.advertising}>
        <h2>Учитесь бесплатно</h2>
        <p>
          Приводите друзей с детьми <br /> заниматься в Sirius Future <br /> и
          получайте подарки!
        </p>
        <button>Узнать</button>
      </div>
    </aside>
  );
};

export default Aside;
