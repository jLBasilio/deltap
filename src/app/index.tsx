import { registerRootComponent } from 'expo';
import { useEffect } from 'react';
import { View } from 'react-native';

import { Summary, BigButton } from '@components';
import { closeDB, openDB } from '@database/helpers';
import styles from './styles';

const App = (): JSX.Element => {
  useEffect(() => {
    openDB();

    return closeDB;
  }, []);

  return (
    <View style={styles.container}>
      {/* eslint-disable-next-line */}
      <BigButton onPress={haha} />
      <Summary />
    </View>
  );

  function haha(): void {
    console.log('gg');
  }
};

export default registerRootComponent(App);
