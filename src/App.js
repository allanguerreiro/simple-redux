import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import TodoList from "./components/TodoList";
import Counter from "./Counter";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <TodoList />
          <Counter />
        </div>
      </Provider>
    );
  }
}

export default App;
