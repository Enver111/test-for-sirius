import React, { useState, useEffect } from 'react';
import s from './Timer.module.css';
interface TimeLeft {
  [key: string]: number | undefined;
  д?: number;
  ч?: number;
  м?: number;
  с?: number;
}

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  function calculateTimeLeft(): TimeLeft {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-6-31`) - +new Date(); // Замените на вашу дату
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        д: Math.floor(difference / (1000 * 60 * 60 * 24)),
        ч: Math.floor((difference / (1000 * 60 * 60)) % 24),
        м: Math.floor((difference / 1000 / 60) % 60),
        с: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval} className={s.number}>
        {timeLeft[interval]}
        <span>{interval}</span>
      </span>
    );
  });

  return (
    <div className={s.timer}>
      <p>
        Следующее <br />
        занятие начнется через:
      </p>
      <div>
        {timerComponents.length ? timerComponents : <span>Время вышло!</span>}
      </div>
      <button>Button</button>
    </div>
  );
};

export default CountdownTimer;
