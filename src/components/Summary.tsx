import { StyleSheet, Text, View } from 'react-native';

type SummaryProps = {
  taps: any[];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const Summary = (props: SummaryProps): JSX.Element => {
  const { taps } = props;

  console.log(taps);
  return (
    <View style={styles.container}>
      <Text>Today&apos;s Summary</Text>
    </View>
  );
};

export default Summary;
