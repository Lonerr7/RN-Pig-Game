import { View, StyleSheet } from 'react-native';
import Controls from '../components/Controls/Controls';
import GameHeader from '../components/GameHeader/GameHeader';
import Players from '../components/Players/Players';
import { Colors } from '../constants/styles';
import { useAppSelector } from '../hooks/hooks';

const GameScreen: React.FC = () => {
  const isGameOver = useAppSelector((state) => state.game.isGameOver);

  return (
    <View style={styles.game}>
      <GameHeader />
      <Players />
      <Controls />
    </View>
  );
};

const styles = StyleSheet.create({
  game: {
    flex: 1,
    backgroundColor: Colors.color1,
    position: 'relative',
  },
});

export default GameScreen;
