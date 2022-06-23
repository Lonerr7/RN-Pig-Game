import React from 'react';
import { Image, Text } from 'react-native';
import { useAppSelector } from '../../hooks/hooks';

type DiceImageProps = {
  customStyles?: any;
};

const DiceImage: React.FC<DiceImageProps> = ({ customStyles }) => {
  const diceNumber = useAppSelector((state) => state.game.diceNumber);
  let image = (
    <Image source={require(`../../assets/dice-1.png`)} style={customStyles} />
  );

  if (!diceNumber) {
    image = <Text></Text>;
  } else if (diceNumber === 1) {
    image = (
      <Image source={require(`../../assets/dice-1.png`)} style={customStyles} />
    );
  } else if (diceNumber === 2) {
    image = (
      <Image source={require(`../../assets/dice-2.png`)} style={customStyles} />
    );
  } else if (diceNumber === 3) {
    image = (
      <Image source={require(`../../assets/dice-3.png`)} style={customStyles} />
    );
  } else if (diceNumber === 4) {
    image = (
      <Image source={require(`../../assets/dice-4.png`)} style={customStyles} />
    );
  } else if (diceNumber === 5) {
    image = (
      <Image source={require(`../../assets/dice-5.png`)} style={customStyles} />
    );
  } else if (diceNumber === 6) {
    image = (
      <Image source={require(`../../assets/dice-6.png`)} style={customStyles} />
    );
  }

  return image;
};

export default DiceImage;
