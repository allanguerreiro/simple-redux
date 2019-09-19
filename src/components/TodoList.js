import React from "react";
//import { bindActionCreators } from "redux";
import * as todoActions from "../actions/todos";
import { connect } from "react-redux";

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };

    this.delTodo = this.delTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo = () => {
    console.log("No TodoList addNewTodo: " + this.state.name);
    let todo = {
      name: this.state.name
    };
    this.props.addTodo(todo);
    this.setState({ name: "" });
  };

  delTodo = (event, id) => {
    event.preventDefault();
    console.log("No TodoList delTodo text: " + id);
    this.props.delTodo(id);
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo, index) => (
            <li key={index}>
              {todo.name} {" - "} {index}{" "}
              <button onClick={e => this.delTodo(e, index)}>DEL</button>
            </li>
          ))}
        </ul>

        <input
          type="text"
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />

        <button onClick={this.addTodo}>Novo todo</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => dispatch(todoActions.addTodo(todo)),
    delTodo: id => dispatch(todoActions.delTodo(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
