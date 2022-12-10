import { StyleSheet, View } from 'react-native';
import { BigButton, Summary } from '@components';
import { ADD_ONE_TAP, ADD_ONE_TASK, RETRIEVE_TAPS, RETRIEVE_TASKS } from '@src/database/functions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const DevMode = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <BigButton onPress={addTap} title="Insert Tap" />
        <BigButton onPress={retrieveTaps} title="Retrieve" />
      </View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <BigButton onPress={insertTask} title="Insert task" />
        <BigButton onPress={retrieveTasks} title="Retrieve" />
      </View>
      <Summary />
    </View>
  );

  function addTap(): void {
    void ADD_ONE_TAP();
  }

  async function retrieveTaps(): Promise<any> {
    const taps = await RETRIEVE_TAPS();
    console.log(taps);
  }

  function insertTask(): void {
    void ADD_ONE_TASK();
  }

  async function retrieveTasks(): Promise<any> {
    const tasks = await RETRIEVE_TASKS();
    console.log(tasks);
  }
};

export default DevMode;
