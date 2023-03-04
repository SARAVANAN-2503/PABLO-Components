import React, { FunctionComponent, MouseEventHandler } from "react";
import "./Button.css";

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: string;
  type?: "primary" | "danger" | "transparent";
  size?: "small" | "medium" | "large";
}

const Button: FunctionComponent<ButtonProps> = ({
  onClick,
  children,
  type = "primary",
  size = "medium",
}) => {
  return (
    <button
      className={`pablo-button pablo-button-${
        size === "large" ? "lg" : size === "small" ? "sm" : "md"
      } pablo-button-${
        type === "danger"
          ? "danger"
          : type === "transparent"
          ? "transparent"
          : "primary"
      }`}
      onClick={onClick}
      type={"button"}
    >
      {children}
    </button>
  );
};

export default Button;