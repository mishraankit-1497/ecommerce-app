import React, { forwardRef } from "react";

const Input = forwardRef(({ ...otherProps }, ref) => {
  return <input {...otherProps} ref={ref} />;
});

export default Input;
