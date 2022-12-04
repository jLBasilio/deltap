/* eslint-disable no-console */
import { ParamArray, QueryWithParams } from '@src/types';
import {
  SQLError,
  SQLResultSet,
  SQLStatementErrorCallback,
  SQLTransaction,
  WebSQLDatabase
} from 'expo-sqlite';

function errorWrapper(
  query: string,
  params: ParamArray,
  reject: Function
): SQLStatementErrorCallback {
  return (_: SQLTransaction, err: SQLError): boolean => {
    console.log('\n\nQUERY ERROR!');
    console.log(`${query} : [${params}]`);
    console.log(err);
    reject(err);
    return true;
  };
}

export async function executeOne(
  db: WebSQLDatabase,
  query: string,
  params: ParamArray
): Promise<any> {
  return await new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        query,
        params,
        (_, res: SQLResultSet) => resolve(res),
        errorWrapper(query, params, reject)
      );
    });
  });
}

export async function executeMultiple(
  db: WebSQLDatabase,
  queryArray: QueryWithParams[]
): Promise<any> {
  return await new Promise((resolve, reject) => {
    db.transaction((tx) => {
      const results = queryArray.map(
        async ({ query, params }) =>
          await new Promise((txResolve, txReject) => {
            tx.executeSql(
              query,
              params,
              (_, res: SQLResultSet) => txResolve(res),
              errorWrapper(query, params, txReject)
            );
          })
      );

      Promise.all(results)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  });
}
