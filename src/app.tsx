import { registerRootComponent } from 'expo';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Root from '@screens/Root';
import { closeDB, initDB, openDB } from '@database/helpers';

openDB();
const App = (): JSX.Element => {
  useEffect(() => {
    /* eslint-disable-next-line */
    initDB();

    return closeDB;
  }, []);

  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};

export default registerRootComponent(App);
