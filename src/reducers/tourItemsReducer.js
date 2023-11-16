/**
 * Tour Items Reducer
 * @param {React.ReducerState} state
 * @param {React.ReducerAction} action
 * @returns {React.ReducerState}
 */
const tourItemsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      // Payload for add is the entire item JSON
      return [...state, { ...action.payload, objectNote: "" }];
    case "UPDATE_NOTE":
      // Return a new array with the item with the updated objectNote
      // Payload for edit is object with id and objectNote
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, objectNote: action.payload.objectNote };
        }
        return item;
      });
    case "REMOVE_ITEM":
      // Payload for remove is the id, so filter out non-matching ids
      return state.filter(({ id }) => id !== action.payload);
    default:
      return state;
  }
};

export default tourItemsReducer;
