import React from "react";
import PropTypes from "prop-types";

const TextInputGroup = props => {
  const formatClass = () => {
    let classes = "form-control form-control-lg";
    classes += props.error ? " is-invalid" : "";
    return classes;
  };
  return (
    <div>
      <div className="form-group">
        <label htmlFor={props.name}> {props.label} </label>
        <input
          type={props.type}
          className={formatClass()}
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
        {props.error && <div className="invalid-feedback"> {props.error}</div>}
      </div>
    </div>
  );
};
TextInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

TextInputGroup.defaultProps = {
  type: "text"
};
export default TextInputGroup;
