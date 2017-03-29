const initialState = () => ({
  schema: [],
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
    default: {
      return state;
    }
  }
};

module.exports = reducer;
