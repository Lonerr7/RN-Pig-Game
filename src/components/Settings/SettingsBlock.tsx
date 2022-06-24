import { StyleSheet, Text, View } from 'react-native';

type SettignsBlockProps = {
  title: string;
  children: React.ReactElement;
  customStyles?: any;
};

const SettingsBlock: React.FC<SettignsBlockProps> = ({
  title,
  children,
  customStyles,
}) => {
  return (
    <View style={[styles.settingsBlockContainer, customStyles]}>
      <View style={styles.settingsBlockTitleBox}>
        <Text style={styles.settingsBlockTitle}>{title}</Text>
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  settingsBlockContainer: {
    marginTop: 10,
  },
  settingsBlockTitleBox: {
    marginBottom: 30,
  },
  settingsBlockTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    textTransform: 'uppercase',
    textDecorationLine: 'underline',
  },
});

export default SettingsBlock;
