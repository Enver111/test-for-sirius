import React from 'react';
import s from '../Calendar.module.css';

interface DayBlocksProps {
  currentMonth: number;
  currentYear: number;
  notes: { [key: string]: Note[] };
  onDayClick: (day: string) => void;
}
interface Note {
  title: string;
  time: string;
}
const DayBlocks: React.FC<DayBlocksProps> = ({
  currentMonth,
  currentYear,
  notes,
  onDayClick,
}) => {
  const renderNotesForDay = (day: string, month: number, year: number) => {
    const dateKey = `${day}-${month}-${year}`;
    return notes[dateKey]?.map((note, index) => (
      <div key={index}>
        <h3>{note.title}</h3>
        <p>{note.time}</p>
      </div>
    ));
  };
  const getDaysInMonth = (month: number, year: number): string[] => {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date).getDate().toString());
      date.setDate(date.getDate() + 1);
    }
    return days;
  };
  const getFirstDayOfMonth = (month: number, year: number) => {
    let firstDay = new Date(year, month, 1).getDay();
    if (firstDay === 0) firstDay = 7;
    return firstDay - 1;
  };
  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDayOfMonthIndex = getFirstDayOfMonth(currentMonth, currentYear);
  const prevMonthDaysCount = getDaysInMonth(
    currentMonth - 1 < 0 ? 11 : currentMonth - 1,
    currentMonth - 1 < 0 ? currentYear - 1 : currentYear
  ).length;
  let combinedDaysArray = Array.from({ length: firstDayOfMonthIndex }, (_, i) =>
    (prevMonthDaysCount - firstDayOfMonthIndex + i + 1).toString()
  ).concat(daysInMonth);
  const totalBlocks = 35;
  const emptyDaysAtEndCount = totalBlocks - combinedDaysArray.length;
  combinedDaysArray = combinedDaysArray.concat(
    Array.from({ length: emptyDaysAtEndCount }, (_, i) => (i + 1).toString())
  );
  let weeksArray = [];
  for (let i = 0; i < combinedDaysArray.length; i += 7) {
    weeksArray.push(combinedDaysArray.slice(i, i + 7));
  }
  return (
    <React.Fragment>
      {weeksArray.map((week, weekIndex) => (
        <div key={weekIndex} className={s.week_row}>
          {week.map((day, dayIndex) =>
            day ? (
              <div
                key={dayIndex}
                className={s.day_block}
                onClick={() => onDayClick(day)}
              >
                {day}
                {renderNotesForDay(day, currentMonth, currentYear)}
              </div>
            ) : (
              <div key={dayIndex} className={s.empty_day_block}></div>
            )
          )}
        </div>
      ))}
    </React.Fragment>
  );
};
export default DayBlocks;
