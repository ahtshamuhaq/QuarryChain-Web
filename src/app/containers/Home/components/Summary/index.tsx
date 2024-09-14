import { SummaryCard } from "./components/SummaryCard";
import { summaryContentArray } from "./constants";
import { Container, StyledTitle, Content, Cards } from "./Summary.styles";

export function Summary() {
  return (
    <Container>
      <Content>
        <StyledTitle>Technical Summary</StyledTitle>
        <Cards>
          {summaryContentArray.map((card) => (
            <SummaryCard
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              key={card.title}
            />
          ))}
        </Cards>
      </Content>
    </Container>
  );
}
