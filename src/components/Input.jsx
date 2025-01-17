import React from "react";
import clsx from "clsx";

function Input({
  id,
  label,
  type,
  required,
  register,
  errors,
  disabled,
  ...other
}) {
  return (
    <div>
      <label
        className="
    block
     text-sm 
     font-medium 
     leading-6
      text-lightblack"
        htmlFor={id}
      >
        {label}
      </label>

      <div className="mt-2">
        <input
          {...other}
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          {...register(id, { required })}
          className={clsx(
            `
        form-input
        block
        w-full
        rounded-md
        border-0
        py-1.5
        text-lightblack
        shadow-sm
        ring-1
        ring-inset
        ring-gray-300
        placeholder:text-gray-400
        focus:ring-2
        focus:ring-inset
        focus:ring-lightblue
        sm:text-sm
        sm:leading-6
        `,
            errors[id] && "focus:ring-rose-500",
            disabled && "opacity-50 cursor-default"
          )}
        />
      </div>
    </div>
  );
}

export default Input;
