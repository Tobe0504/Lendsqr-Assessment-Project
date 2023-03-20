import React from "react";
import classes from "./Input.module.css";

type InputProps = {
  type: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  invalid?: boolean;
  value: string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
  children: string;
  htmlFor: string;
  id: string;
};

const Input = ({
  type,
  onChange,
  placeholder,
  invalid,
  value,
  onBlur,
  children,
  id,
}: InputProps) => {
  return (
    <div className={classes.inputSubClass}>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className={
          invalid ? `${classes.textInput_invalid}` : `${classes.textInput}`
        }
        value={value}
        onBlur={onBlur}
        id={id}
      />
      <label className={classes.inputLabel} htmlFor={id}>
        {children}
      </label>
    </div>
  );
};

export default Input;
