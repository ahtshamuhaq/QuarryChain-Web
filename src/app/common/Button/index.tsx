import React from "react";
import { ButtonComponent } from "./Button.styles";
import { ButtonProps } from "./types";

export function Button({
  children,
  disabled,
  onClick,
  className,
  variant,
}: ButtonProps) {
  return (
    <ButtonComponent
      className={className}
      disabled={disabled}
      onClick={onClick}
      variant={variant}
    >
      {children}
    </ButtonComponent>
  );
}
