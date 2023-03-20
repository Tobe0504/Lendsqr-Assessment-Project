import React from "react";
import classes from "./Button.module.css";

type ButtonProps = {
  children: string;
  invalid?: boolean;
  isSendingRequest?: boolean;
  onClick: () => void;
  disabled?: boolean;
};

const Button = ({
  children,
  invalid,
  isSendingRequest,
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={
        invalid || isSendingRequest
          ? `${classes.button_invalid}`
          : `${classes.button}`
      }
      onClick={onClick}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
