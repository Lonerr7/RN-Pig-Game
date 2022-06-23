import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors } from '../../constants/styles';
import GameScreen from '../../screens/GameScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import { NavigationRoutes, RootStackParamList } from '../../types/types';
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomButton from '../common/CustomButton';

const Stack = createStackNavigator<RootStackParamList>();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.color2,
          },
          headerShadowVisible: false,
        }}
      >
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
          options={({ navigation }) => ({
            headerLeft: () => (
              <CustomButton
                customStyles={{
                  marginLeft: 15,
                }}
              >
                <Ionicons
                  name="arrow-back"
                  size={28}
                  onPress={() => navigation.goBack()}
                />
              </CustomButton>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
