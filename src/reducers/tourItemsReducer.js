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
      return [...state, { ...action.payload, note: "" }];
    case "UPDATE_NOTE":
      // Return a new array with the item with the updated note
      // Payload for edit is object with id and note
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, note: action.payload.note };
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
