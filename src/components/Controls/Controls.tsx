import { View, StyleSheet, Text } from 'react-native';
import CustomButton from '../common/CustomButton';
import DiceImage from '../common/DiceImage';

const Controls: React.FC = () => {
  return (
    <View style={styles.controlsContainer}>
      <View style={styles.row}>
        <CustomButton customStyles={styles.buttonStyle}>
          <Text>🎲 Roll Dice</Text>
        </CustomButton>
        <DiceImage customStyles={styles.imageStyle} />
        <CustomButton customStyles={styles.buttonStyle}>
          <Text>📥 Hold</Text>
        </CustomButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  controlsContainer: {
    position: 'absolute',
    top: '54%',
    left: '25%',
    width: '101%',
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
});

export default Controls;
