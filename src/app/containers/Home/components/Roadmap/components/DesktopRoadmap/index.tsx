import { roadmapQuarters } from '../../constants';
import { Container, Wrapper, QuarterContainer, RoadmapContent, StyledTitle } from '../../Roadmap.styles';
import { Card } from '../Card';
import { DateFigure } from '../DateFigure';

export function DesktopRoadmap() {
  return (
    <Container>
      <Wrapper>
        <StyledTitle>Roadmap</StyledTitle>
        <RoadmapContent>
          {roadmapQuarters.map(quarter =>
            <QuarterContainer quarter={quarter.number} key={quarter.number}>
              <Card title={quarter.title} items={quarter.items} />
              <DateFigure color={quarter.color} number={quarter.number} />
            </QuarterContainer>)}
        </RoadmapContent>
      </Wrapper>
    </Container>
  )
}
