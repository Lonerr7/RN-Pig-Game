import { Pressable, View, StyleSheet } from 'react-native';

type CustomButtonProps = {
  children: React.ReactNode;
  onPress: () => void;
};

const CustomButton: React.FC<CustomButtonProps> = ({ children, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.customButton, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View>{children}</View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  customButton: {},
  pressed: {
    opacity: 0.5,
  },
});

export default CustomButton;
