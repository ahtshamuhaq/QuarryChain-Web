import styled from 'styled-components';

export const Container = styled.div<{ vertical?: boolean, width?: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ vertical }) => vertical && `
    flex-direction: column;
  `}

  ${({ width }) => width && `
    width: ${width}px;
  `}
`;

export const SingleLine = styled.div`
  height: 20px;
  width: 4px;
  background: ${({ theme: { colors: { neutral } } }) => neutral[100]};
  margin: 5px;
`