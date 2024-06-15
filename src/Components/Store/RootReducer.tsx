import { combineReducers } from '@reduxjs/toolkit';
import calendarReducer from './Reduser';
// Импортируйте другие редьюсеры здесь

const rootReducer = combineReducers({
  calendar: calendarReducer,
  // Добавьте другие редьюсеры здесь
});

export default rootReducer;
