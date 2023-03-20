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
  htmlFor,
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
        id="email"
      />
      <label className={classes.inputLabel} htmlFor="email">
        {children}
      </label>
    </div>
  );
};

export default Input;
