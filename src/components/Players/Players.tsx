import { View, StyleSheet } from 'react-native';
import { Colors } from '../../constants/styles';
import { useAppSelector } from '../../hooks/hooks';
import Player from '../Player/Player';

const Players: React.FC = () => {
  const [player1, player2] = useAppSelector((state) => state.game.players);
  const activePlayer = useAppSelector((state) => state.game.activePlayer);

  return (
    <View style={styles.playersContainer}>
      <View
        style={
          activePlayer === 0
            ? [styles.playerBox, styles.playerBoxBorder, styles.acitve]
            : [styles.playerBox, styles.playerBoxBorder]
        }
      >
        <Player
          playerName={player1.name}
          currentScore={player1.currentScore}
          gameScore={player1.gameScore}
        />
      </View>
      <View
        style={
          activePlayer === 1
            ? [styles.playerBox, styles.acitve]
            : styles.playerBox
        }
      >
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
  playersContainer: {
    position: 'relative',
  },
  playerBox: {
    height: '50%',
    paddingHorizontal: 30,
  },
  playerBoxBorder: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  acitve: {
    backgroundColor: Colors.activeColor,
  },
});

export default Players;
