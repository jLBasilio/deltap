import { StyleSheet, View } from 'react-native';
import { BigButton } from '@components';
import {
  ADD_ONE_TAP,
  ADD_ONE_TASK,
  DEV_DELETE_TAPS,
  DEV_DELETE_TASKS,
  RETRIEVE_TAPS,
  RETRIEVE_TASKS
} from '@src/database/functions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row'
  }
});

const DevMode = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <BigButton onPress={addTap} title="Insert" />
        <BigButton onPress={retrieveTaps} title="Retrieve" />
        <BigButton onPress={deleteTaps} title="Delete" />
      </View>
      <View style={styles.buttonRow}>
        <BigButton onPress={insertTask} title="Insert" />
        <BigButton onPress={retrieveTasks} title="Retrieve" />
        <BigButton onPress={deleteTasks} title="Delete" />
      </View>
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

  function deleteTaps(): void {
    void DEV_DELETE_TAPS();
  }

  function deleteTasks(): void {
    void DEV_DELETE_TASKS();
  }
};

export default DevMode;
