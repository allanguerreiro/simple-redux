export default function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      console.log("No reducer ADD_TODO: " + action.text);
      return [...state, Object.assign({}, action.todo)];
    case "DEL_TODO":
      console.log("No reducer DEL_TODO: " + action.id);
      let newState = [...state];
      newState.splice(action.id, 1);
      return newState;
    default:
      return state;
  }
}
