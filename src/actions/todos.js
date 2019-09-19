export const addTodo = todo => {
  console.log("Na action addTodo: " + todo);
  return {
    type: "ADD_TODO",
    todo
  };
};

export const delTodo = id => {
  console.log("Actions delTodo index: " + id);
  return {
    type: "DEL_TODO",
    id
  };
};
