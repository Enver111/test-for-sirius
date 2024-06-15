import React from 'react';
import s from './MainPage.module.css';
import CountdownTimer from '../Cards/Timer/Timer';
import Discount from '../Cards/Discount/Discount';
import HomeWork from '../Cards/HomeWork/HomeWork';
import BalanceOfActivities from '../Cards/BalanceOfActivities/BalanceOfActivities';
import UpcomingLessons from '../Cards/UpcomingLessons/UpcomingLessons';
import CalendarHead from '../Calendar/CalendarHead/CalendarHead';
import Calendar from '../Calendar/Calendar';

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
    <main className={s.main_shedule}>
      <CalendarHead />
      <Calendar />
    </main>
  );
  switch (activeItemId) {
    case 1:
      return <main className={s.main_block}>{SheduleBloks}</main>;
    case 2:
      return <main className={s.main_shedule}>{Shedule}</main>;
    default:
      return <main>Error</main>;
  }
};
export default MainPage;
