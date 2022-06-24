import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { changeActivePlayer } from '../helpers/helpers';
import { PlayersState } from '../types/types';

const initialState: PlayersState = {
  players: [
    { id: 1, currentScore: 0, gameScore: 0, name: 'Player 1' },
    { id: 2, currentScore: 0, gameScore: 0, name: 'Player 2' },
  ],
  diceNumber: 0,
  activePlayer: 0,
  maxGameScore: 10,
  isGameOver: false,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    rollDice(state) {
      state.diceNumber = Math.floor(Math.random() * 6) + 1;
      state.players[state.activePlayer].currentScore += state.diceNumber;

      if (state.diceNumber === 1) {
        changeActivePlayer(state);
      }
    },
    startNewGame(state) {
      state.diceNumber = 0;
      state.players = [
        { id: 1, currentScore: 0, gameScore: 0, name: state.players[0].name },
        { id: 2, currentScore: 0, gameScore: 0, name: state.players[1].name },
      ];
      state.isGameOver = false;
      state.activePlayer = 0;
    },
    holdScore(state) {
      state.players[state.activePlayer].gameScore +=
        state.players[state.activePlayer].currentScore;

      if (state.players[state.activePlayer].gameScore >= state.maxGameScore) {
        state.isGameOver = true;
      }

      changeActivePlayer(state);
    },
    changeMaxScore(state, action: PayloadAction<string>) {
      state.maxGameScore = parseFloat(action.payload);
    },
    changePlayerName(
      state,
      action: PayloadAction<{ newName: string; idx: number }>
    ) {
      state.players = state.players.map((player, idx) =>
        action.payload.idx === idx
          ? { ...player, name: action.payload.newName.trim() }
          : player
      );
    },
  },
});

export const {
  rollDice,
  startNewGame,
  holdScore,
  changeMaxScore,
  changePlayerName,
} = gameSlice.actions;
export default gameSlice.reducer;
