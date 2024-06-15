import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './RootReducer'; // Импортируйте корневой редьюсер
import { CalendarState } from './Reduser';
// Создание типизированного интерфейса для глобального состояния
export interface AppState {
  calendar: CalendarState;
}

const store = configureStore({
  reducer: rootReducer,
});
export default store;
