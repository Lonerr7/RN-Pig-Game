import { View, StyleSheet } from 'react-native';
import { useAppSelector } from '../../hooks/hooks';
import Player from '../Player/Player';

const Players: React.FC = () => {
  const [player1, player2] = useAppSelector((state) => state.players.players);

  return (
    <View style={styles.playersContainer}>
      <View style={[styles.playerBox, styles.playerBoxBorder]}>
        <Player
          playerName={player1.name}
          currentScore={player1.currentScore}
          gameScore={player1.gameScore}
        />
      </View>
      <View style={styles.playerBox}>
        <Player
          playerName={player2.name}
          currentScore={player2.currentScore}
          gameScore={player2.gameScore}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  playersContainer: {},
  playerBox: {
    height: '50%',
  },
  playerBoxBorder: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
});

export default Players;
