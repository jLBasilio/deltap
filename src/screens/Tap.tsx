import { StyleSheet, Text, View } from 'react-native';
import { RETRIEVE_TAPS } from '@src/database/functions';
import useFetch from '@src/hooks/useFetch';
import Loader from '@src/components/Loader';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const Tap = (): JSX.Element => {
  const { data: taps, loading, error } = useFetch(RETRIEVE_TAPS);

  console.log(taps);
  console.log(error);

  return (
    <Loader isLoading={loading}>
      <View style={styles.container}>
        <Text>Tap Screen</Text>
      </View>
    </Loader>
  );
};

export default Tap;
