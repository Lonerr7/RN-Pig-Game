import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomButton from '../components/common/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { NavigationRoutes, RootStackParamList } from '../types/types';
import { StackNavigationProp } from '@react-navigation/stack';

type settingsScreenProp = StackNavigationProp<
  RootStackParamList,
  NavigationRoutes.GAME
>;

const GameScreen: React.FC = () => {
  const navigation = useNavigation<settingsScreenProp>();

  const settingsPressHandler = () => {
    navigation.navigate(NavigationRoutes.SETTINGS);
  };

  return (
    <View style={styles.game}>
      <View style={styles.gameHeader}>
        <CustomButton onPress={settingsPressHandler}>
          <Ionicons name="settings" size={28} />
        </CustomButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  game: {
    flex: 1,
  },
  gameHeader: {
    paddingVertical: 30,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default GameScreen;
