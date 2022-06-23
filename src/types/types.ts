export enum NavigationRoutes {
  GAME = 'Game',
  SETTINGS = 'Settings',
}

export type RootStackParamList = {
  Game: undefined;
  Settings: undefined;
};

type Player = {
  id: number;
  currentScore: number;
  gameScore: number;
  name: string;
};

export type PlayersState = {
  players: Player[];
};
