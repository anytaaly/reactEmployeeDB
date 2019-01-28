import React from "react";

const TextInputGroup = props => {
  return (
    <div>
      <div className="form-group">
        <label htmlFor={props.name}> {props.label} </label>
        <input
          type={props.type}
          className="form-control form-control-lg"
          name={props.name}
          placeholder="Enter Name.."
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};
export default TextInputGroup;
