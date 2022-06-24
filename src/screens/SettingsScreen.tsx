import { View, Text, StyleSheet, Pressable, Keyboard } from 'react-native';
import GameSettings from '../components/GameSettings/GameSettings';
import { Colors } from '../constants/styles';

const SettingsScreen: React.FC = () => {
  return (
    <Pressable style={styles.settings} onPress={() => Keyboard.dismiss()}>
      <GameSettings />
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
