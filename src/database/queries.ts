export const CREATE_TASK_TABLE = `CREATE TABLE IF NOT EXISTS
  task (
    task_id INTEGER PRIMARY KEY NOT NULL,
    task_name VARCHAR(255) NOT NULL,
    created_at INTEGER(4) NOT NULL DEFAULT (strftime('%s', 'now')),
    updated_at INTEGER(4) NOT NULL DEFAULT (strftime('%s', 'now'))
  );`;

export const CREATE_TAPS_TABLE = `CREATE TABLE IF NOT EXISTS
  tap (
    tap_id INTEGER PRIMARY KEY NOT NULL,
    tap_notes TEXT DEFAULT NULL,
    task_id INTEGER NOT NULL,
    created_at INTEGER(4) NOT NULL DEFAULT (strftime('%s', 'now')), 
    updated_at INTEGER(4) NOT NULL DEFAULT (strftime('%s', 'now')),
    FOREIGN KEY(task_id) REFERENCES task(task_id) ON DELETE CASCADE
  );`;

export const INSERT_ONE_TASK = `INSERT INTO
  task (
    task_name
  ) VALUES (?);`;

export const INSERT_ONE_TAP = `INSERT INTO
  tap (
    task_id
  ) VALUES (?);`;

/* TODO: Pagination */
export const FETCH_TAPS = `
  SELECT
    tap.tap_id,
    tap.tap_notes,
    tap.task_id,
    tap.created_at,
    tap.updated_at
  FROM tap`;

/* TODO: Pagination */
export const FETCH_TASKS = `
  SELECT
    task_id,
    task_name,
    created_at,
    updated_at
  FROM task`;

export const DELETE_TAPS = `
  DELETE
    *
  FROM tap;
`;

export const DELETE_TASKS = `
  DELETE
    *
  FROM task;
`;
