import { View, Keyboard, Alert } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { changeMaxScore } from '../../redux/gameSlice';
import SettingsField from '../common/SettingsField';

const MaxScoreSettings: React.FC = () => {
  const maxScore = useAppSelector((state) => state.game.maxGameScore);
  const dispatch = useAppDispatch();

  const changeMaxScoreHandler = (newValue: string) => {
    if (parseFloat(newValue) > 100) {
      Alert.alert('Wrong number!', 'The number must not be more than 100!', [
        { text: 'Ok!' },
      ]);
    } else {
      dispatch(changeMaxScore(newValue));
      Keyboard.dismiss();
    }
  };

  return (
    <View>
      <SettingsField
        fieldTitle="Max Game Score: "
        fieldValue={maxScore.toString()}
        inputBoxWidth={100}
        onPress={changeMaxScoreHandler}
        inputType="numeric"
      />
    </View>
  );
};

export default MaxScoreSettings;
