import { registerRootComponent } from 'expo';
import { View } from 'react-native';

import { Summary, RedButton } from '../components';
import styles from './styles';

const App = () => {
  return (
    <View style={styles.container}>
      {/* eslint-disable-next-line */}
      <RedButton onClick={haha} />
      <Summary />
    </View>
  );

  function haha() {
    console.log('gg');
  }
};

export default registerRootComponent(App);
