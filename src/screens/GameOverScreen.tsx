import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/common/CustomButton';
import { Colors } from '../constants/styles';

const GameOverScreen: React.FC = () => {
  return (
    <View style={styles.gameOverContainer}>
      <View>
        <Text>Game Over! Player 1 Wins with score: 'score'</Text>
      </View>
      <CustomButton customStyles={[styles.buttonStyle, styles.newGameBtnStyle]}>
        <Text>🔃 New Game</Text>
      </CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  gameOverContainer: {
    flex: 1,
    backgroundColor: Colors.color1,
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
    top: 30,
    left: '25%',
  },
});

export default GameOverScreen;
