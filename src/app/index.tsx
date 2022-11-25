import { registerRootComponent } from 'expo';
import { View } from 'react-native';

import { Summary, BigButton } from '../components';
import styles from './styles';

const App = () => {
  return (
    <View style={styles.container}>
      {/* eslint-disable-next-line */}
      <BigButton onPress={haha} />
      <Summary />
    </View>
  );

  function haha() {
    console.log('gg');
  }
};

export default registerRootComponent(App);
