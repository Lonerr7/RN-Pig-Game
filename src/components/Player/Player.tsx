import { View, Text, StyleSheet } from 'react-native';
import PlayerScore from './PlayerScore';

const Player: React.FC = () => {
  return (
    <View style={styles.player}>
      <Text style={styles.playerName}>Player 1</Text>
      <PlayerScore />
    </View>
  );
};

const styles = StyleSheet.create({
  player: {},
  playerName: {},
});

export default Player;
