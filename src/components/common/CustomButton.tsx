import { Pressable, View, StyleSheet } from 'react-native';

type CustomButtonProps = {
  children: React.ReactNode;
  onPress?: () => void;
  customStyles?: any;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  onPress,
  customStyles,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.btn,
        customStyles,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <View>{children}</View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    position: 'relative',
    zIndex: 50,
  },
  pressed: {
    opacity: 0.5,
  },
});

export default CustomButton;
