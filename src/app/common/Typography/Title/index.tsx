import { TitleComponent } from "./Title.styles";
import { TypographyProps } from "../types";

export function Title({ children, className }: TypographyProps) {
  return <TitleComponent className={className}>{children}</TitleComponent>;
}
