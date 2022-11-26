import { Button, View } from 'react-native';
import styles from './styles';

interface BigButtonProps {
  onPress: () => void;
  title: string;
}

const BigButton = (props: BigButtonProps): JSX.Element => {
  const { title, onPress } = props;

  return (
    <View style={styles.container}>
      <Button onPress={onPress} title={title} />
    </View>
  );
};

export default BigButton;
