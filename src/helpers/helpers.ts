import { PlayersState } from '../types/types';

export const changeActivePlayer = (state: PlayersState) => {
  state.players[state.activePlayer].currentScore = 0;

  if (state.activePlayer === 0) {
    state.activePlayer = 1;
  } else if (state.activePlayer === 1) {
    state.activePlayer = 0;
  }
};
