import db from '../db';

export const loadSchema = dispatch =>
  () => {
    db.schema().then(schema => {
      dispatch({
        type: 'DB__SCHEMA_LOADED',
        payload: {
          schema,
        },
      });
    });
  };

export const changeText = dispatch =>
  text => {
    dispatch({
      type: 'EDITOR__TEXT_CHANGED',
      payload: {
        text,
      },
    });
  };

export const execSql = dispatch =>
  sql => {
    db.exec(sql).then(response => {
      dispatch({
        type: 'DB__SQL_EXECUTED',
        payload: {
          results: response.results,
        },
      });
    });
  };
