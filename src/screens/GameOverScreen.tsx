import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/common/CustomButton';
import { Colors } from '../constants/styles';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { startNewGame } from '../redux/gameSlice';

const GameOverScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const { players, activePlayer } = useAppSelector((state) => state.game);
  const winnerIdx = activePlayer === 1 ? 0 : 1;
  const winner = players[winnerIdx].name;
  const winnerScore = players[winnerIdx].gameScore;

  const newGameHandler = () => {
    dispatch(startNewGame());
  };

  return (
    <View style={styles.gameOverContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>
          Game Over! <Text style={styles.textBold}>{winner}</Text> Wins with
          score: <Text style={styles.textBold}>{winnerScore}</Text>
        </Text>
      </View>
      <CustomButton
        customStyles={[styles.buttonStyle, styles.newGameBtnStyle]}
        onPress={newGameHandler}
      >
        <Text>🔃 New Game</Text>
      </CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  gameOverContainer: {
    flex: 1,
    backgroundColor: Colors.color1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginBottom: 30,
  },
  textStyle: {
    fontSize: 18,
  },
  textBold: {
    fontWeight: '700',
  },
  buttonStyle: {
    backgroundColor: 'rbga(hsl(0,0%,100%))',
    padding: 8,
    width: 100,
    height: 40,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  newGameBtnStyle: {
    width: 150,
  },
});

export default GameOverScreen;
