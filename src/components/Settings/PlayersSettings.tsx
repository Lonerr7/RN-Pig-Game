import { View, StyleSheet, Keyboard } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { changePlayerName } from '../../redux/gameSlice';
import SettingsField from '../common/SettingsField';

const PlayersSettings: React.FC = () => {
  const playerName1 = useAppSelector((state) => state.game.players[0].name);
  const playerName2 = useAppSelector((state) => state.game.players[1].name);
  const dispatch = useAppDispatch();

  const name1ChangeHandler = (newValue: string) => {
    dispatch(changePlayerName({ newName: newValue, idx: 0 }));
    Keyboard.dismiss();
  };

  const name2ChangeHandler = (newValue: string) => {
    dispatch(changePlayerName({ newName: newValue, idx: 1 }));
    Keyboard.dismiss();
  };

  return (
    <View>
      <SettingsField
        fieldTitle="Player 1 Name: "
        fieldValue={playerName1}
        inputBoxWidth="100%"
        inputWidth="80%"
        marginBottom={20}
        flexWrap="wrap"
        textMarginBottom={25}
        justifyInputBoxContent="center"
        onPress={name1ChangeHandler}
      />
      <SettingsField
        fieldTitle="Player 2 Name: "
        fieldValue={playerName2}
        inputBoxWidth="100%"
        inputWidth="80%"
        flexWrap="wrap"
        textMarginBottom={25}
        justifyInputBoxContent="center"
        onPress={name2ChangeHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default PlayersSettings;
