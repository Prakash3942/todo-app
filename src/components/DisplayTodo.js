import React, { useState } from "react";
import DisplayCount from "./DisplayCount";
import { connect } from "react-redux";

const DisplayTodo = ({ todos }) => {
  //   const [todos, setTodos] = useState([
  //     {
  //       title: "First Title",
  //       description: "First Description",
  //     },
  //     {
  //       title: "First Title",
  //       description: "First Description",
  //     },
  //   ]);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card mt-3 shadow-sm">
              <div className="card-body">
                <h3>All Todos are here..</h3>
                <DisplayCount />
                <ul className="list-group ">
                  {todos.map((todoItem, index) => (
                    <li className="list-group-item" key={index}>
                      <h4>{todoItem.title}</h4>
                      <p>{todoItem.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  //   console.log(state.todoReducer);
  return { todos: state.todosItem };
};

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodo);
