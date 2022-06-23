import { View, StyleSheet } from 'react-native';
import GameHeader from '../components/GameHeader/GameHeader';
import Players from '../components/Players/Players';
import { Colors } from '../constants/styles';

const GameScreen: React.FC = () => {
  return (
    <View style={styles.game}>
      <GameHeader />
      <Players />
    </View>
  );
};

const styles = StyleSheet.create({
  game: {
    flex: 1,
    backgroundColor: Colors.color1,
    paddingHorizontal: 30,
    position: 'relative',
  },
});

export default GameScreen;
