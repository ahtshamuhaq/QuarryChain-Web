import styled from 'styled-components';
import media from 'styled-media-query';
import { Span } from '../Typography/Span';
import { Title } from '../Typography/Title';

export const Container = styled.div`
  text-align: center;
`;

export const Text = styled(Title)`
  font-family: ${({theme: {fonts: {futuraBold}}}) => futuraBold};
  font-size: 24px;
  line-height: 24px;
  color: ${({theme: {colors: {regular: {darkBlue}}}}) => darkBlue};
  letter-spacing: 2px;
  font-weight: 600;

  ${media.lessThan("huge")`
    font-size: 20px;
    line-height: 20px;
  `}
`;
export const StyledSpan = styled(Span)`
  font-family: inherit;
  color: ${({theme: {colors: {regular: {darkBlue}}}}) => darkBlue};
  color: ${({theme: {colors: {neutral}}}) => neutral[400]};
  font-size: inherit;
  line-height: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
`;