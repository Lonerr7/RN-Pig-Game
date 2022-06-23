import { createSlice } from '@reduxjs/toolkit';
import { PlayersState } from '../types/types';

const initialState: PlayersState = {
  players: [
    { id: 1, currentScore: 0, gameScore: 0, name: 'Player 1' },
    { id: 2, currentScore: 0, gameScore: 0, name: 'Player 2' },
  ],
};

const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {},
});

export const {} = playersSlice.actions;
export default playersSlice.reducer;
