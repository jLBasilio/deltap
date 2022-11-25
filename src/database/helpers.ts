import { openDatabase, WebSQLDatabase } from 'expo-sqlite';
import { DB_NAME } from '@src/constants';

let db: WebSQLDatabase | null = null;

export function openDB(): void {
  db = openDatabase(`${DB_NAME}.db`);
  console.log(`Opened ${DB_NAME}`);
}

export function closeDB(): void {
  if (db !== null) {
    db.closeAsync();
  }
}
