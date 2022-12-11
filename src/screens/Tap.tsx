import { StyleSheet, View } from 'react-native';
import { RETRIEVE_TAPS } from '@src/database/functions';
import useFetch, { UseFetch } from '@src/hooks/useFetch';
import Loader from '@src/components/Loader';
import { BigButton, Summary } from '@src/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const Tap = (): JSX.Element => {
  const { data: taps, loading, error }: UseFetch = useFetch(RETRIEVE_TAPS);

  console.log(error);
  return (
    <Loader isLoading={loading}>
      <View style={styles.container}>
        <BigButton title="Button" onPress={tapButton} />
      </View>
      <View style={styles.container}>
        <Summary taps={taps} />
      </View>
    </Loader>
  );

  function tapButton(): void {
    console.log('Button tapped');
  }
};

export default Tap;
