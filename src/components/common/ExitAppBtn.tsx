import { StyleSheet, Platform } from 'react-native';
import CustomButton from './CustomButton';
import Ionicons from '@expo/vector-icons/Ionicons';

const ExitAppBtn = () => {
  const exitAppHandler = () => {
    if (Platform.OS === 'android') {
    } else if (Platform.OS === 'ios') {
    }
  };

  return (
    <CustomButton onPress={exitAppHandler}>
      <Ionicons name="exit-outline" size={28} />
    </CustomButton>
  );
};

export default ExitAppBtn;
