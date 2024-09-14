import { Container, SingleLine } from './Lines.styles';
import { LinesProps } from './types';

export function Lines({ numOfLines, vertical, width }: LinesProps) {
  return (
    <Container vertical={vertical} width={width}>
      {[...Array(numOfLines).keys()].map((line) => (<SingleLine key={line} />))}
    </Container>
  )
}
