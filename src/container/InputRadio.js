import React from "react";

const InputRadio = props => {
  return (
    <>
      <label className={props.css}>
        <input
          className="nameRadio"
          type="radio"
          name={props.name}
          value={props.name}
          onChange={props.onChange}
          checked={props.checked}
          // checked={type.appartement === true ? true : false}
        />
        {props.name}
      </label>
    </>
  );
};

export default InputRadio;
