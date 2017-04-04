const initialState = () => ({
  resultState: 'IDLE',
  results: [],
  schema: [],
  text: '',
});

const reducer = (action, state = initialState()) => {
  switch (action.type) {
    case 'DB__SCHEMA_LOADED': {
      const {schema} = action.payload;

      return {
        ...state,
        schema,
      };
    }

    case 'DB__SQL_EXECUTED': {
      const {results} = action.payload;

      return {
        ...state,
        resultState: 'RESULTS',
        results,
      };
    }

    case 'EDITOR__TEXT_CHANGED': {
      const {text} = action.payload;

      return {
        ...state,
        text,
      };
    }
    default: {
      return state;
    }
  }
};

module.exports = reducer;
