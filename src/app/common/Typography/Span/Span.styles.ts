import styled from "styled-components";

export const SpanComponent = styled.span`
  font-size: 14px;
  line-height: 14px;
  color: ${({
    theme: {
      colors: { neutral },
    },
  }) => neutral[0]};
`;
