import { Container, StyledSpan, Text } from './TextLogo.styles';

type TextLogoProps = {
  className?: string;
}

export function TextLogo({className}: TextLogoProps) {
  return (
    <Container className={className}>
        <Text>Quarry<StyledSpan>Chain</StyledSpan></Text>
    </Container>
  )
}