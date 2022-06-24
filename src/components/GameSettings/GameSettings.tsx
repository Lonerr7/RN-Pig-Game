import { View, StyleSheet, Text } from 'react-native';
import MaxScoreSettings from './MaxScoreSettings';

const GameSettings: React.FC = () => {
  return (
    <View style={styles.gameSettingsContainer}>
      <View style={styles.gameSettingsTitleBox}>
        <Text style={styles.gameSettingsTitle}>Game Settings</Text>
      </View>
      <MaxScoreSettings />
    </View>
  );
};

const styles = StyleSheet.create({
  gameSettingsContainer: {
    marginTop: 10,
  },
  gameSettingsTitleBox: {
    marginBottom: 30,
  },
  gameSettingsTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    textTransform: 'uppercase',
    textDecorationLine: 'underline',
  },
});

export default GameSettings;
