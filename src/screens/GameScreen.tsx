import { View, StyleSheet } from 'react-native';
import GameHeader from '../components/GameHeader/GameHeader';
import { Colors } from '../constants/styles';

const GameScreen: React.FC = () => {
  return (
    <View style={styles.game}>
      <GameHeader />
    </View>
  );
};

const styles = StyleSheet.create({
  game: {
    flex: 1,
    backgroundColor: Colors.color1,
  },
});

export default GameScreen;
