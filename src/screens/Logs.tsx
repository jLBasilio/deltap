import { Text, View } from 'react-native';

const Logs = (): JSX.Element => {
  console.log('rendered logs');
  return (
    <View>
      <Text>Logs Screen</Text>
    </View>
  );
};

export default Logs;
