import { ActivityIndicator, StyleSheet, View } from 'react-native';

type LoaderProps = {
  isLoading: Boolean;
  children: JSX.Element | JSX.Element[];
};

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

  return <>{children}</>;
};

export default Loader;
