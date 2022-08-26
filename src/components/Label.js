import React from "react";

export default function LabelInput(props) {
  return (
    <>
      <label className="form-label" for={props.id}>
        {props.labelText}
      </label>
      <input
        type={props.type}
        id={props.id}
        className="form-control form-control-lg"
      />
    </>
  );
}
