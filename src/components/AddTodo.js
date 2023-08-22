import React, { useState } from "react";
import DisplayCount from "./DisplayCount";
import { addTodo } from "../redux/actions/todo";
import { connect } from "react-redux";

const AddTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // add todo in store
    addTodo(todo);
    console.log(todo);
    setTodo({
      title: "",
      description: "",
    });
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h3>Add Todo Here...</h3>
                <DisplayCount />
                {/* form  */}
                <form onSubmit={handleSubmit}>
                  {/* form title  */}
                  <div className="mb-3">
                    <label className="form-label">Todo Title</label>
                    <input
                      type="text"
                      placeholder="please add todo..."
                      className="form-control"
                      value={todo.title}
                      onChange={(event) =>
                        setTodo({
                          ...todo,
                          title: event.target.value,
                        })
                      }
                    />
                  </div>

                  {/* form description  */}
                  <div className="mb-3">
                    <label className="form-label">Todo Description</label>
                    <textarea
                      placeholder="please add description..."
                      className="form-control"
                      rows="3"
                      value={todo.description}
                      onChange={(event) =>
                        setTodo({
                          ...todo,
                          description: event.target.value,
                        })
                      }
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Add Todo
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
