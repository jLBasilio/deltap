import { Button, View } from 'react-native';
import styles from './styles';

const BigButton = (props: BigButtonProps) => {
  const { onPress } = props;

  return (
    <View style={styles.container}>
      <Button onPress={onPress} title="Tap me" />
    </View>
  );
};

interface BigButtonProps {
  onPress: () => void;
}

export default BigButton;
