import { INCREMENT_MONTH, DECREMENT_MONTH, ADD_NOTE } from './Actions';

interface Note {
  title: string;
  time: string;
}

export type CalendarState = {
  currentMonth: number;
  currentYear: number;
  notes: {
    [key: string]: Note[];
  };
};

const initialState: CalendarState = {
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear(),
  notes: {},
};

const calendarReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case INCREMENT_MONTH:
      return {
        ...state,
        currentMonth: (state.currentMonth + 1) % 12,
        currentYear:
          state.currentMonth === 11 ? state.currentYear + 1 : state.currentYear,
      };
    case DECREMENT_MONTH:
      return {
        ...state,
        currentMonth: (state.currentMonth - 1 + 12) % 12,
        currentYear:
          state.currentMonth === 0 ? state.currentYear - 1 : state.currentYear,
      };
    case ADD_NOTE:
      const { day, note } = action.payload;
      const existingNotes = state.notes[day] || [];
      const noteExists = existingNotes.some(
        (existingNote) =>
          existingNote.title === note.title && existingNote.time === note.time
      );

      return {
        ...state,
        notes: {
          ...state.notes,
          [day]: noteExists ? existingNotes : [...existingNotes, note],
        },
      };

    default:
      return state;
  }
};

export default calendarReducer;
