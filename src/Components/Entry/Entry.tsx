import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EyeOpenIcon from '../../libs/icon/eye/eye-open.svg';
import EyeCloseIcon from '../../libs/icon/eye/eye-close.svg';
import Sirius from '../../libs/icon/EntryLogo.svg';
import s from './Entry.module.css';

const Entry = () => {
  const [activeLanguage, setActiveLanguage] = useState('RU');
  const [passwordShown, setPasswordShown] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<boolean | null>(null);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };
  const handleSubmit = () => {
    if (email && password) {
      navigate('/shedule');
    }
  };
  const handleClick = (language: any) => {
    setActiveLanguage(language);
  };
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };
  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (event.target.value === '') {
      setEmailError(null);
    } else if (!emailRegex.test(event.target.value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };
  return (
    <div className={s.entry}>
      <div className={s.wrap}>
        <div className={s.section}>
          <img className={s.sirius_logo} src={Sirius} alt='sirius' />
          <h1 className={s.entry_sirius}>Вход в Sirius Future</h1>
        </div>
        <div className={s.section}>
          <input
            className={`${s.inp} ${s.inp_mail}`}
            style={{
              borderColor:
                emailError === null
                  ? 'rgb(236, 236, 236)'
                  : emailError
                  ? 'red'
                  : 'green',
            }}
            type='email'
            placeholder='E-mail'
            value={email}
            onChange={handleEmailChange}
          />
          <div className={s.pass_vis}>
            <input
              className={`${s.inp} ${s.inp_password}`}
              type={passwordShown ? 'text' : 'password'}
              placeholder='Пароль'
              value={password}
              onChange={handlePasswordChange}
            />
            <button
              onClick={togglePasswordVisibility}
              className={s.show_password}
            >
              {passwordShown ? (
                <img src={EyeCloseIcon} alt='EyeCloseIcon' />
              ) : (
                <img src={EyeOpenIcon} alt='EyeOpenIcon' />
              )}
            </button>
          </div>
        </div>
        <div className={s.section}>
          <input className={s.checkbox} type='checkbox' />{' '}
          <span>Запомнить меня</span>
        </div>
        <div className={s.section}>
          <button onClick={handleSubmit} className={s.entrance}>
            Войти
          </button>
        </div>
        <div className={s.section}>
          <a className={s.link} href='shedule'>
            Я забыл пароль
          </a>
          <a className={s.link} href='#coach'>
            Войти как тренер
          </a>
        </div>
        <div className={s.section}>
          <p className={s.registration}>Нет аккаунта?</p>
          <a className={s.link} href='#reg'>
            Зарегистрироваться
          </a>
        </div>
      </div>
      <div className={s.langs}>
        <p
          onClick={() => handleClick('RU')}
          className={`${s.lang} ${activeLanguage === 'RU' ? s.active : ''}`}
        >
          RU
        </p>
        <p
          onClick={() => handleClick('EN')}
          className={`${s.lang} ${activeLanguage === 'EN' ? s.active : ''}`}
        >
          EN
        </p>
      </div>
    </div>
  );
};
export default Entry;
