import { Button, View } from 'react-native';
import styles from './styles';

interface BigButtonProps {
  onPress: () => void;
}

const BigButton = (props: BigButtonProps): JSX.Element => {
  const { onPress } = props;

  return (
    <View style={styles.container}>
      <Button onPress={onPress} title="Tap me" />
    </View>
  );
};

export default BigButton;
