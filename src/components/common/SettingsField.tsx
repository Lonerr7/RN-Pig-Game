import { View, Text, StyleSheet, TextInput } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useEffect, useState } from 'react';
import CustomButton from './CustomButton';

type SettingsFieldProps = {
  fieldTitle: string;
  fieldValue: string;
  flexWrap?: 'wrap' | 'nowrap';
  marginBottom?: number;
  textMarginBottom?: number;
  inputBoxWidth: string | number;
  onPress?: (newValue: string) => void;
  inputWidth?: string | number;
  inputType?: string;
  justifyInputBoxContent?:
    | 'space-between'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-around'
    | 'space-evenly';
};

const SettingsField: React.FC<SettingsFieldProps> = ({
  fieldTitle,
  fieldValue,
  inputBoxWidth,
  onPress,
  inputWidth,
  marginBottom,
  flexWrap,
  textMarginBottom,
  inputType,
  justifyInputBoxContent,
}) => {
  const [value, setValue] = useState(fieldValue);
  const keyboardType = inputType === 'numeric' ? 'numeric' : 'default';

  useEffect(() => {
    setValue(fieldValue);
  }, [fieldValue]);

  const changeInputValueHandler = (text: string) => {
    if (text.length === 0 && keyboardType === 'numeric') {
      setValue('0');
    } else {
      setValue(text);
    }
  };

  return (
    <View style={[styles.settingsFieldContainer, { marginBottom, flexWrap }]}>
      <Text
        style={[styles.settingsFieldText, { marginBottom: textMarginBottom }]}
      >
        {fieldTitle}
        <Text style={styles.textBold}>{fieldValue}</Text>
      </Text>
      <View
        style={[
          styles.inputBox,
          { width: inputBoxWidth, justifyContent: justifyInputBoxContent },
        ]}
      >
        <TextInput
          style={[styles.textInput, { width: inputWidth }]}
          value={value}
          keyboardType={keyboardType}
          onChangeText={changeInputValueHandler}
        />
        <CustomButton onPress={() => onPress(value)}>
          <AntDesign name="enter" size={28} />
        </CustomButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  settingsFieldContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingsFieldText: {
    fontSize: 18,
  },
  textBold: {
    fontWeight: '700',
  },
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: 'white',
    paddingVertical: 4,
    paddingHorizontal: 5,
    borderRadius: 5,
    minWidth: 40,
    textAlign: 'center',
    marginRight: 10,
  },
});

export default SettingsField;
