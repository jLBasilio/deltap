import { LoaderProps } from '@src/types';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const Loader = (props: LoaderProps): JSX.Element => {
  const { isLoading, children } = props;

  if (isLoading === true) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return children;
};

export default Loader;
