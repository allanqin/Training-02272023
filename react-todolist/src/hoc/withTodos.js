import React from "react";
import { getTodos, deleteTodo, createTodo } from "../apis/TodoApis";

export const withTodos = (WrappedComponent) => {
  return class NewComponent extends React.Component {
    state = {
      todos: [],
    };

    handleSubmit = (content) => {
      console.log(content);
      const newTodo = {
        content: content,
        completed: false,
      };
      createTodo(newTodo).then((todo) => {
        this.setState((prev) => {
          return {
            todos: [...prev.todos, todo],
          };
        });
      });
    };

    handleDelete = (id) => {
      deleteTodo(id).then(() => {
        this.setState({
          todos: this.state.todos.filter((todo) => id !== todo.id),
        });
      });
    };

    componentDidMount() {
      getTodos().then((todos) => {
        this.setState({
          todos,
        });
      });
    }

    render() {
      return (
        <WrappedComponent
          todos={this.state.todos}
          handleDelete={this.handleDelete}
          handleSubmit={this.handleSubmit}
        />
      );
    }
  };
};
