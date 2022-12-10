import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DevMode, Logs, Settings, Tap } from './';

const Tab = createBottomTabNavigator();

const RootNavigator = (): JSX.Element => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tap" component={Tap} />
      <Tab.Screen name="Logs" component={Logs} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Developer" component={DevMode} />
    </Tab.Navigator>
  );
};

export default RootNavigator;
