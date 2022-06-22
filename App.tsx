import { StatusBar } from 'expo-status-bar';
import Navigation from './src/components/Navigation/Navigation';

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      <StatusBar style="light" />
    </>
  );
};

export default App;
