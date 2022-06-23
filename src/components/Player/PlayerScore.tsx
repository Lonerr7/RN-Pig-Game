import { View, StyleSheet, Text } from 'react-native';

type PlayerScoreProps = {
  currentScore: number;
  gameScore: number;
};

const PlayerScore: React.FC<PlayerScoreProps> = ({
  currentScore,
  gameScore,
}) => {
  return (
    <View style={styles.playerScore}>
      <View>
        <Text style={styles.score}>
          Current Score: <Text style={styles.bold}>{currentScore}</Text>
        </Text>
      </View>
      <View>
        <Text style={styles.score}>
          Game Score: <Text style={styles.bold}>{gameScore}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  playerScore: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    width: '100%',
    padding: 30,
    alignItems: 'center',
  },
  score: {
    fontSize: 18,
  },
  bold: {
    fontWeight: '700',
  },
});

export default PlayerScore;
