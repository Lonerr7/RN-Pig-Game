import { View, StyleSheet, Text } from 'react-native';

type PlayerScoreProps = {
  currentScore?: number;
  gameScore?: number;
};

const PlayerScore: React.FC<PlayerScoreProps> = ({
  currentScore,
  gameScore,
}) => {
  return (
    <View style={styles.playerScore}>
      <View style={styles.scoreBox}>
        <Text style={styles.score}>Current Score: 1{currentScore}</Text>
      </View>
      <View style={styles.scoreBox}>
        <Text style={styles.score}>Game Score: 1{gameScore}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  playerScore: {},
  scoreBox: {},
  score: {},
});

export default PlayerScore;
