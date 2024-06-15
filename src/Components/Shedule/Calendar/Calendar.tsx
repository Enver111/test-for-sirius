import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementMonth, decrementMonth, addNote } from '../../Store/Actions';
import { AppState } from '#Components/Store/Store';
import NoteModal from './Modal/Modal';
import s from './Calendar.module.css';
import DayBlocks from './DayBlocks/DayBlocks';
interface Note {
  title: string;
  time: string;
}
const Calendar = () => {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [currentDay, setCurrentDay] = React.useState('');
  const { currentMonth, currentYear, notes } = useSelector(
    (state: AppState) => state.calendar
  );
  const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  const handleNextMonth = () => dispatch(incrementMonth());
  const handlePreviousMonth = () => dispatch(decrementMonth());

  const getMonthName = (monthIndex: number) => {
    const monthNames = [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ];
    return monthNames[monthIndex];
  };
  const handleModalSave = (title: string, time: string) => {
    if (!currentDay) return;
    const dateKey = `${currentDay}-${currentMonth}-${currentYear}`;
    const note: Note = {
      title,
      time,
    };
    dispatch(addNote(dateKey, note));
    setIsModalVisible(false);
    setCurrentDay('');
  };
  const renderWeekDaysHeader = () => {
    return weekDays.map((dayName) => (
      <div key={dayName} className={s.week_day_header}>
        {dayName}
      </div>
    ));
  };

  return (
    <div className='calendar-container'>
      <button onClick={handlePreviousMonth}>Предыдущий месяц</button>
      <h1>
        {getMonthName(currentMonth)} {currentYear}
      </h1>
      <button onClick={handleNextMonth}>Следующий месяц</button>
      <div className={s.week_days_header}>{renderWeekDaysHeader()}</div>
      <DayBlocks
        currentMonth={currentMonth}
        currentYear={currentYear}
        notes={notes}
        onDayClick={(day) => {
          setCurrentDay(day);
          setIsModalVisible(true);
        }}
      />
      <NoteModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onSave={handleModalSave}
      />
    </div>
  );
};
export default Calendar;
