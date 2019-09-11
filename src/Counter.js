import React from "react";
import { connect } from "react-redux";

const Counter = props => <h3>Você tem {props.todos.length} todos.</h3>;

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(Counter);
