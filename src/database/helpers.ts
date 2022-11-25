import { openDatabase, WebSQLDatabase } from 'expo-sqlite';
import { DB_NAME } from '../constants';

let db: WebSQLDatabase;
export function openDB() {
  db = openDatabase(`${DB_NAME}.db`);
}

export function closeDB() {
  if (db) {
    db.closeAsync();
  }
}
