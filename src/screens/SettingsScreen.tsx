import { StyleSheet, Pressable, Keyboard } from 'react-native';
import SettingsBlock from '../components/Settings/SettingsBlock';
import MaxScoreSettings from '../components/Settings/MaxScoreSettings';
import { Colors } from '../constants/styles';
import PlayersSettings from '../components/Settings/PlayersSettings';

const SettingsScreen: React.FC = () => {
  return (
    <Pressable style={styles.settings} onPress={() => Keyboard.dismiss()}>
      <SettingsBlock
        title="Game Settings"
        customStyles={styles.settingsBlockStyle}
      >
        <MaxScoreSettings />
      </SettingsBlock>
      <SettingsBlock title="Players Settings">
        <PlayersSettings />
      </SettingsBlock>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  settings: {
    flex: 1,
    backgroundColor: Colors.color2,
    paddingHorizontal: 30,
  },
  settingsBlockStyle: {
    marginBottom: 40,
  },
});

export default SettingsScreen;
