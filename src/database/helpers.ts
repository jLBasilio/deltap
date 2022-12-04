/* eslint-disable no-console */
import { openDatabase, WebSQLDatabase } from 'expo-sqlite';
import { DB_NAME } from '@src/constants';
import { QueryWithParams } from '@src/types';
import { CREATE_TASK_TABLE, CREATE_TAPS_TABLE } from '@database/queries';
import { executeMultiple } from '@database/execute';

export let db: WebSQLDatabase;

export function openDB(): void {
  db = openDatabase(`${DB_NAME}.db`);
  db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () => {
    console.log(`Opened ${DB_NAME} with foreign keys ON`);
  });
}

export function closeDB(): void {
  if (db !== null) {
    db.closeAsync();
  }
}

export async function initDB(): Promise<any> {
  const queries: QueryWithParams[] = [
    {
      query: CREATE_TASK_TABLE,
      params: []
    },
    {
      query: CREATE_TAPS_TABLE,
      params: []
    }
  ];

  try {
    await executeMultiple(db, queries);
  } catch (err) {
    throw new Error(err);
  }
}
