import { View, StyleSheet, Text } from 'react-native';
import { useAppDispatch } from '../../hooks/hooks';
import { holdScore, rollDice, startNewGame } from '../../redux/gameSlice';
import CustomButton from '../common/CustomButton';
import DiceImage from '../common/DiceImage';

const Controls: React.FC = () => {
  const dispatch = useAppDispatch();

  const rollDiceHandler = () => {
    dispatch(rollDice());
  };

  const newGameHandler = () => {
    dispatch(startNewGame());
  };

  const holdScoreHandler = () => {
    dispatch(holdScore());
  };

  return (
    <View style={styles.controlsContainer}>
      <View style={styles.row}>
        <CustomButton
          customStyles={styles.buttonStyle}
          onPress={rollDiceHandler}
        >
          <Text>🎲 Roll Dice</Text>
        </CustomButton>
        <DiceImage customStyles={styles.imageStyle} />
        <CustomButton
          customStyles={styles.buttonStyle}
          onPress={holdScoreHandler}
        >
          <Text>📥 Hold</Text>
        </CustomButton>
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
  controlsContainer: {
    position: 'absolute',
    top: '54%',
    left: '24%',
    width: '80%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  imageStyle: {
    position: 'absolute',
    left: '40%',
    bottom: -13,
    width: 60,
    height: 60,
  },
  newGameBtnStyle: {
    width: 150,
    top: 30,
    left: '25%',
  },
});

export default Controls;
