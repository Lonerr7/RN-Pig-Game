import { StyleSheet, Pressable, Keyboard } from 'react-native';
import SettingsBlock from '../components/common/SettingsBlock';
import MaxScoreSettings from '../components/GameSettings/MaxScoreSettings';
import { Colors } from '../constants/styles';

const SettingsScreen: React.FC = () => {
  return (
    <Pressable style={styles.settings} onPress={() => Keyboard.dismiss()}>
      <SettingsBlock title="Game Settings">
        <MaxScoreSettings />
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
});

export default SettingsScreen;
