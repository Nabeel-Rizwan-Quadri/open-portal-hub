import React from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";
import classNames from "classnames";

import withForm from "./with_form";

import "./styles.css";

const propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  errors: PropTypes.arrayOf(PropTypes.string),
  largeInput: PropTypes.arrayOf(PropTypes.bool),
};

const defaultProps = {
  value: "",
  type: "text"
};

const TextInput = props => {
  const hasError = !isEmpty(props.errors);

  const renderErrors = () => {
    if (!hasError) {
      return null;
    }

    const errors = props.errors.map((errMsg, i) => (
      <li key={`${props.name}-error-${i}`} className="error">
        {errMsg}
      </li>
    ));

    return <ul className="error-messages">{errors}</ul>;
  };

  const onChange = e => {
    const val = e.target.value;
    props.onChange(val);
  };

  const klass = classNames("form-group", {
    "has-error": hasError,
  });

  return (
    <div className={klass}>
      <label>{props.label}</label>
      {
        props.largeInput ?
          <textarea
            name={props.name}
            className="form-control h-24 bg-gray-900 focus-visible:outline-none focus-visible:ring-1 focus:ring-customGreen"
            placeholder={props.placeholder}
            onChange={onChange}
            value={props.value}
          />
          :
          <input
            name={props.name}
            type={props.type}
            className="form-control bg-gray-900 focus-visible:outline-none focus-visible:ring-1 focus:ring-customGreen"
            placeholder={props.placeholder}
            onChange={onChange}
            value={props.value}
          />
      }
      {renderErrors()}
    </div>
  );
};

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

const FormTextInput = withForm(TextInput);

export { TextInput };
export default FormTextInput;
