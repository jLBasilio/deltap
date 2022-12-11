import { SQLResultSet } from 'expo-sqlite';
import { executeOne } from '@database/execute';
import { db } from '@database/helpers';
import {
  DELETE_TAPS,
  DELETE_TASKS,
  FETCH_TAPS,
  FETCH_TASKS,
  INSERT_ONE_TAP,
  INSERT_ONE_TASK
} from '@database/queries';

export async function ADD_ONE_TAP(): Promise<void> {
  return await executeOneAndReturn(INSERT_ONE_TAP, [1]);
}

export async function RETRIEVE_TAPS(): Promise<any> {
  return await executeOneAndReturn(FETCH_TAPS, []);
}

export async function DEV_DELETE_TAPS(): Promise<any> {
  return await executeOneAndReturn(DELETE_TAPS, []);
}

/* ------------- */

export async function ADD_ONE_TASK(): Promise<any> {
  return await executeOneAndReturn(INSERT_ONE_TASK, ['test']);
}

export async function RETRIEVE_TASKS(): Promise<any> {
  return await executeOneAndReturn(FETCH_TASKS, []);
}

export async function DEV_DELETE_TASKS(): Promise<any> {
  return await executeOneAndReturn(DELETE_TASKS, []);
}

async function executeOneAndReturn(dbFunction: string, params: any[]): Promise<any> {
  const promise = executeOne(db, dbFunction, params);
  const result = await asyncWrap(promise);
  return mapValuesFromTransaction(result);
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
    throw new Error(err);
  }
}
