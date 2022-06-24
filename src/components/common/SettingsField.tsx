import { View, Text, StyleSheet, TextInput } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useEffect, useState } from 'react';
import CustomButton from './CustomButton';

type SettingsFieldProps = {
  fieldTitle: string;
  fieldValue: string;
  wrap?: boolean;
  marginBottom?: number;
  inputBoxWidth: number;
  onPress: (newValue: string) => void;
};

const SettingsField: React.FC<SettingsFieldProps> = ({
  fieldTitle,
  fieldValue,
  inputBoxWidth,
  onPress,
}) => {
  const [value, setValue] = useState(fieldValue);

  useEffect(() => {
    setValue(fieldValue);
  }, [fieldValue]);

  const changeInputValueHandler = (text: string) => {
    if (text.length === 0) {
      setValue('0');
    } else {
      setValue(text);
    }
  };

  return (
    <View style={styles.settingsFieldContainer}>
      <Text style={styles.settingsFieldText}>
        {fieldTitle}
        <Text style={styles.textBold}>{fieldValue}</Text>
      </Text>
      <View style={[{ width: inputBoxWidth }, styles.inputBox]}>
        <TextInput
          style={styles.textInput}
          value={value}
          keyboardType="numeric"
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: 'white',
    paddingVertical: 4,
    paddingHorizontal: 5,
    borderRadius: 5,
    minWidth: 40,
    textAlign: 'center',
  },
});

export default SettingsField;
