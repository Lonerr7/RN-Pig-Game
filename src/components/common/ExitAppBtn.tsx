import { StyleSheet, Platform, BackHandler } from 'react-native';
import CustomButton from './CustomButton';
import Ionicons from '@expo/vector-icons/Ionicons';
import RNExitApp from 'react-native-exit-app';

const ExitAppBtn = () => {
  const exitAppHandler = () => {
    if (Platform.OS === 'android') {
      BackHandler.exitApp();
    } else if (Platform.OS === 'ios') {
      RNExitApp.exitApp();
    }
  };

  return (
    <CustomButton onPress={exitAppHandler}>
      <Ionicons name="exit-outline" size={28} />
    </CustomButton>
  );
};

export default ExitAppBtn;
