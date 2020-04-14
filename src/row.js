import React from "react";
import SingleRow from "./SElement";

function Row({ value, ...rest }) {
  return (
    <div className="row-1 row">
      <SingleRow {...rest} children={value[0]} />
      <SingleRow {...rest} children={value[1]} />
      <SingleRow {...rest} children={value[2]} />
      <SingleRow {...rest} children={value[3]} />
    </div>
  );
}

export default Row;
