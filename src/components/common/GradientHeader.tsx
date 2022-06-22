import { Header } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';
import { Colors } from '../../constants/styles';

const GradientHeader = (props) => (
  <View style={{ backgroundColor: '#eee' }}>
    <LinearGradient colors={[Colors.lightred, Colors.purple]}>
      <Header {...props} />
    </LinearGradient>
  </View>
);

export default GradientHeader;
