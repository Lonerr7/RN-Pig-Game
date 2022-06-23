import { createSlice } from '@reduxjs/toolkit';
import { PlayersState } from '../types/types';

const initialState: PlayersState = {
  players: [
    { id: 1, currentScore: 0, gameScore: 0, name: 'Player 1' },
    { id: 2, currentScore: 0, gameScore: 0, name: 'Player 2' },
  ],
  diceNumber: 1,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
});

export const {} = gameSlice.actions;
export default gameSlice.reducer;
