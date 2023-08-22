import React from "react";
import { connect } from "react-redux";

const DisplayCount = ({ todos }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h4>Number of Todos: {todos.length}</h4>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({ todos: state.todosItem });
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayCount);
