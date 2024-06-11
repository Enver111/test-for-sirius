import React from 'react';
import s from './Discount.module.css';

const Discount = () => {
  return (
    <div className={s.discount}>
      <h1>До 31 декабря любой курс со скидкой 20%</h1>
      <p>
        До конца года у вас есть уникальная возможность воспользоваться нашей
        новогодней скидкой 20% на любой <br />
        курс!
      </p>
    </div>
  );
};

export default Discount;
