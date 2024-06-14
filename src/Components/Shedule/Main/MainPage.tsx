import React from 'react';
import s from './MainPage.module.css';
import CountdownTimer from '../Cards/Timer/Timer';
import Discount from '../Cards/Discount/Discount';
import HomeWork from '../Cards/HomeWork/HomeWork';
import BalanceOfActivities from '../Cards/BalanceOfActivities/BalanceOfActivities';
import UpcomingLessons from '../Cards/UpcomingLessons/UpcomingLessons';

const MainPage = ({ activeItemId }: { activeItemId: number | null }) => {
  const SheduleBloks = (
    <>
      <Discount />
      <CountdownTimer />
      <HomeWork />
      <BalanceOfActivities />
      <UpcomingLessons />
    </>
  );
  const Shedule = (
    <main className={s.main_block}>
      <h1>Enver</h1>
    </main>
  );
  switch (activeItemId) {
    case 1:
      return <main className={s.main_block}>{SheduleBloks}</main>;
    case 2:
      return Shedule;
    default:
      return <main>Error</main>;
  }
};
export default MainPage;
