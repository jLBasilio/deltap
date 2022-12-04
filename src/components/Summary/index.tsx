import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const Summary = (): JSX.Element => (
  <View style={styles.container}>
    <Text>Viewing purposes</Text>
  </View>
);

export default Summary;
