import { SQLResultSet } from 'expo-sqlite';
import { executeOne } from '@database/execute';
import { db } from '@database/helpers';
import { FETCH_TAPS, FETCH_TASKS, INSERT_ONE_TAP, INSERT_ONE_TASK } from '@database/queries';

export async function ADD_ONE_TAP(): Promise<void> {
  await executeSafely(executeOne, db, INSERT_ONE_TAP, [1]);
}

export async function RETRIEVE_TAPS(): Promise<any> {
  const result = await executeSafely(executeOne, db, FETCH_TAPS, []);
  const tapsArray = mapValuesFromTransaction(result);
  return tapsArray;
}

export async function ADD_ONE_TASK(): Promise<any> {
  return await executeSafely(executeOne, db, INSERT_ONE_TASK, ['test']);
}

export async function RETRIEVE_TASKS(): Promise<any> {
  const result = await executeSafely(executeOne, db, FETCH_TASKS, []);
  const tasksArray = mapValuesFromTransaction(result);
  return tasksArray;
}

function mapValuesFromTransaction(result: SQLResultSet): any[] {
  const {
    rows: { _array: dbResults }
  } = result;

  return dbResults;
}

async function executeSafely(fn: Function, ...args: any[]): Promise<SQLResultSet> {
  try {
    return fn(...args);
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}
