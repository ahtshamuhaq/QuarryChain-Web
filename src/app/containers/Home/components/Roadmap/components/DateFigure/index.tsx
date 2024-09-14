import { Container, Hexagon, HexagonQuarter, HexagonYearContainer, StyledSpan } from './DateFigure.styles';
import { DateFigureProps } from './types';

export function DateFigure({ color, number, mobile }: DateFigureProps) {
  return (
    <Container quarter={!mobile && number}>
      <Hexagon color={color}>
        <HexagonYearContainer>
          <StyledSpan small>Phase</StyledSpan>
        </HexagonYearContainer>
        <HexagonQuarter>
          <StyledSpan>
            {number}
          </StyledSpan>
        </HexagonQuarter>
      </Hexagon>
    </Container>
  )
};
