import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import Navigation from './src/components/Navigation/Navigation';
import store from './src/redux/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Navigation />
      <StatusBar style="light" />
    </Provider>
  );
};

export default App;
