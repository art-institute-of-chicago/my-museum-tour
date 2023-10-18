/**
 * Tour Items Reducer
 * @param {React.ReducerState} state
 * @param {React.ReducerAction} action
 * @returns {React.ReducerState}
 */
const tourItemsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      // Insertion structure is [id(key), payload(value)]
      return new Map([...state, [action.payload.id, action.payload]]);
    case "REMOVE_ITEM":
      return new Map([...state].filter(([key]) => key !== action.payload));
    default:
      return state;
  }
};

export default tourItemsReducer;
