import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../../constants/styles';
import GameScreen from '../../screens/GameScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import { NavigationRoutes, RootStackParamList } from '../../types/types';
import GradientHeader from '../common/GradientHeader';

const Stack = createStackNavigator<RootStackParamList>();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={NavigationRoutes.GAME}
          component={GameScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={NavigationRoutes.SETTINGS}
          component={SettingsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
