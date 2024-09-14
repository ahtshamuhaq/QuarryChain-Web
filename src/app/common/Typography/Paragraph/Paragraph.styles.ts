import styled from "styled-components";

export const ParagraphComponent = styled.p`
  font-size: 18px;
  line-height: 18px;
  color: ${({
    theme: {
      colors: { neutral },
    },
  }) => neutral[0]};
`;
