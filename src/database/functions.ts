import { SQLResultSet } from 'expo-sqlite';
import { executeOne } from '@database/execute';
import { db } from '@database/helpers';
import { FETCH_TAPS, FETCH_TASKS, INSERT_ONE_TAP, INSERT_ONE_TASK } from '@database/queries';

export async function ADD_ONE_TAP(): Promise<void> {
  const promise = executeOne(db, INSERT_ONE_TAP, [1]);
  await asyncWrap(promise);
}

export async function RETRIEVE_TAPS(): Promise<any> {
  const promise = executeOne(db, FETCH_TAPS, []);
  const result = await asyncWrap(promise);
  const tapsArray = mapValuesFromTransaction(result);
  return tapsArray;
}

export async function ADD_ONE_TASK(): Promise<any> {
  const promise = executeOne(db, INSERT_ONE_TASK, ['test']);
  return await asyncWrap(promise);
}

export async function RETRIEVE_TASKS(): Promise<any> {
  const promise = executeOne(db, FETCH_TASKS, []);
  const result = await asyncWrap(promise);
  const tasksArray = mapValuesFromTransaction(result);
  return tasksArray;
}

function mapValuesFromTransaction(result: SQLResultSet): any[] {
  const {
    rows: { _array: dbResults }
  } = result;

  return dbResults;
}

async function asyncWrap(promise: Promise<any>): Promise<SQLResultSet> {
  try {
    return await promise;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}
