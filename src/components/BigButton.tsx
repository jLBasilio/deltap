import { Button, StyleSheet, View } from 'react-native';
import { BigButtonProps } from '@src/types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    width: '100%'
  }
});

const BigButton = (props: BigButtonProps): JSX.Element => {
  const { title, onPress } = props;

  return (
    <View style={styles.container}>
      <Button onPress={onPress} title={title} />
    </View>
  );
};

export default BigButton;
