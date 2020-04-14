import React from "react";

function SingleElement({ children, ...rest }) {
  return <div {...rest} className="btn" children={children} />;
}

export default SingleElement;
