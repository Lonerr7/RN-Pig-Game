import { View, Text, StyleSheet } from 'react-native';

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
  },
});

export default SettingsScreen;
