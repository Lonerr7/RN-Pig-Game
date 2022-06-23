import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomButton from '../common/CustomButton';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationRoutes, RootStackParamList } from '../../types/types';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type SettingsScreenProp = StackNavigationProp<
  RootStackParamList,
  NavigationRoutes.GAME
>;

const GameHeader: React.FC = () => {
  const navigation = useNavigation<SettingsScreenProp>();

  const settingsPressHandler = () => {
    navigation.navigate(NavigationRoutes.SETTINGS);
  };

  return (
    <View style={styles.gameHeader}>
      <CustomButton onPress={settingsPressHandler}>
        <Ionicons name="settings" size={28} />
      </CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  gameHeader: {
    paddingVertical: 30,
    position: 'absolute',
    top: 0,
    right: 10,
    zIndex: 50,
  },
});

export default GameHeader;
