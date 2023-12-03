import React from "react";
import PropTypes from "prop-types";


export const Task = (props) => {
  return (
    <div
      className="task"
      style={ { backgroundColor: props.completed ? "#4EBF7E" : "white" } }
    >
      <textarea className="paragraph" style={ { overflow: "hidden" } }>{ props.taskName }</textarea>
      <div className="buttons">
        <button
          onClick={ () => props.completeTask(props.id) }
          style={ { backgroundColor: "#4EBF7E" } }
        >
          Complete
        </button>
        <button onClick={ () => props.deleteTask(props.id) } style={ { backgroundColor: "red" } }>
          Delete
        </button>
      </div>
    </div>
  );
};

Task.propTypes = {
  taskName: PropTypes.string,
  id: PropTypes.number,
  completed: PropTypes.bool,
  deleteTask: PropTypes.func,
  completeTask: PropTypes.func,
};