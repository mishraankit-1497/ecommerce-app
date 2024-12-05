import React, { forwardRef } from "react";

const Input = forwardRef(({ label, className, ...otherProps }, ref) => {
  return (
    <div>
      {label && (
        <label className="block text-gray-700 text-sm">{label}</label>
      )}
      <input
        {...otherProps}
        ref={ref}
        className={`border bg-white border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
    </div>
  );
});

export default Input;
