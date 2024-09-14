import styled from "styled-components";

export const ButtonComponent = styled.button<{
  disabled?: boolean;
  variant?: string;
}>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  line-height: 18px;
  border-radius: 6px;

  :hover {
    opacity: 0.75;
    transition: all 0.3s ease-in-out;
  }

  ${({
    variant,
    theme: {
      colors: { neutral, primary },
    },
  }) => {
    switch (variant) {
      case "secondary":
        return `
          background-color: ${neutral[0]};
          color: ${primary[0]};
          border: 1px solid ${primary[0]}
          `;
      default:
        return `
          background-color: ${primary[0]};
          color: ${neutral[0]};
          border: 1px solid ${primary[0]}
          `;
    }
  }}

  ${({ disabled }) =>
    disabled &&
    `
  cursor: auto;
  :hover {
    opacity: 1;
  }
  
  `}
`;
