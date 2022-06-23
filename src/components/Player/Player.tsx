import { View, Text, StyleSheet } from 'react-native';
import PlayerScore from './PlayerScore';

type PlayerProps = {
  playerName: string;
  currentScore: number;
  gameScore: number;
};

const Player: React.FC<PlayerProps> = ({
  playerName,
  currentScore,
  gameScore,
}) => {
  return (
    <View style={styles.player}>
      <Text style={styles.playerName}>{playerName}</Text>
      <PlayerScore currentScore={currentScore} gameScore={gameScore} />
    </View>
  );
};

const styles = StyleSheet.create({
  player: {
    paddingTop: 100,
    alignItems: 'center',
    width: '100%',
  },
  playerName: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
});

export default Player;
