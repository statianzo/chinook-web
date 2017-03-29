import db from '../db';

export const loadSchema = (dispatch) => () => {
  db.schema().then((schema) => {
    dispatch({
      type: 'DB__SCHEMA_LOADED',
      payload: {
        schema
      },
    });
  });
};
