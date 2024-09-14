import {
  Container,
  TextContainer,
  StyledSpan,
  TitleAndValueContainer,
} from "./PerfomanceCard.styles";
import { PerformanceCardProps } from "./types";

export function PerformanceCard({ data }: PerformanceCardProps) {
  return (
    <Container>
      {data.map((item) => (
        <TitleAndValueContainer key={item.title}>
          <TextContainer isTitle>
            <StyledSpan isTitle>{item.title}</StyledSpan>
          </TextContainer>
          <TextContainer>
            <StyledSpan>{item.value}</StyledSpan>
          </TextContainer>
        </TitleAndValueContainer>
      ))}
    </Container>
  );
}
