import React, { FunctionComponent, MouseEventHandler } from "react";
import "./Button.css";
import "./ButtonLoader.css"

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: string;
  type?: "primary" | "danger" | "transparent";
  size?: "small" | "medium" | "large";
  className?: string;
  onLoading?: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({
  onClick,
  children,
  type = "primary",
  size = "medium",
  className = "",
  onLoading = false,
}) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (!onLoading) {
      onClick(event);
    }
  };

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
      } ${className}`}
      onClick={handleClick}
      type={"button"}
      disabled={onLoading}
    >
      {children}
      {onLoading ? (
        <span className="pablo-button-loader">
          <span className="pablo-progress"></span>
        </span>
      ) : (
        ""
      )}
    </button>
  );
};

export default Button;
