import React from "react";

function TextError(props) {
  return (
    <div>
      <span className="err_red ">{props.children}</span>
    </div>
  );
}

export default TextError;
