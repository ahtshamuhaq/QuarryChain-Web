import React from "react";

export type ButtonProps = {
  children: React.ReactElement | string;
  variant?: string;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};
