import React from 'react';
import Circle from '../../../libs/icon/header/circle.svg';
import Avatar from '../../../libs/icon/header/avatar.svg';
import Arrow from '../../../libs/icon/header/arrow.svg';
import Mail from '../../../libs/icon/header/mail.svg';
import s from './Header.module.css';

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.section}>
        <a className={s.mail} href='#mail'>
          <img src={Mail} alt='Circle' />
        </a>
        <img className={s.circle} src={Circle} alt='Mail' />
      </div>

      <div className={s.user}>
        <a href='#avatar'>
          <img src={Avatar} alt='Avatar' />
        </a>
        <a href='#arrow'>
          {' '}
          <img src={Arrow} alt='arrow' />
        </a>
      </div>
    </div>
  );
};

export default Header;
