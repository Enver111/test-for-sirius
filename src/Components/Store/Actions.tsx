// Action Types
export const INCREMENT_MONTH = 'INCREMENT_MONTH';
export const DECREMENT_MONTH = 'DECREMENT_MONTH';
export const ADD_NOTE = 'ADD_NOTE';

// Action Creators
export const incrementMonth = () => ({
  type: INCREMENT_MONTH,
});

export const decrementMonth = () => ({
  type: DECREMENT_MONTH,
});

export const addNote = (day: string, note: any) => ({
  type: ADD_NOTE,
  payload: { day, note },
});
