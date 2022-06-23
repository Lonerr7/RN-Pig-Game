import { configureStore } from '@reduxjs/toolkit';
import playersSlice from './gameSlice';

const store = configureStore({
  reducer: {
    game: playersSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
