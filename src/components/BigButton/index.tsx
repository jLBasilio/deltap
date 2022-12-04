import { Button, View } from 'react-native';
import styles from './styles';
import { BigButtonProps } from '@src/types';

const BigButton = (props: BigButtonProps): JSX.Element => {
  const { title, onPress } = props;

  return (
    <View style={styles.container}>
      <Button onPress={onPress} title={title} />
    </View>
  );
};

export default BigButton;
