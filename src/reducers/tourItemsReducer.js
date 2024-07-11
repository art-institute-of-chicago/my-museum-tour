/**
 * Tour Items Reducer
 * @param {React.ReducerState} state
 * @param {React.ReducerAction} action
 * @returns {React.ReducerState}
 */
const tourItemsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      // Payload for add is the entire item JSON from the API
      // Reassign short_description to description
      if (action.payload.short_description) {
        action.payload.description = action.payload.short_description;
      }
      delete action.payload.short_description;
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
      // Filter out by non-matching ids
      return state.filter(({ id }) => id !== action.payload.id);
    default:
      return state;
  }
};

export default tourItemsReducer;
