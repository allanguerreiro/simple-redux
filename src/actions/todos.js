export function addTodo(text) {
  console.log(text);
  return {
    type: "ADD_TODO",
    text: text
  };
}
