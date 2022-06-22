import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/styles';

const SettingsScreen: React.FC = () => {
  return (
    <View style={styles.settings}>
      <Text>Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  settings: {
    flex: 1,
    backgroundColor: Colors.color2,
  },
});

export default SettingsScreen;
