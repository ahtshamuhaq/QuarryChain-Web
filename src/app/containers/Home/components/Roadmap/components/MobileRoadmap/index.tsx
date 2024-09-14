import { roadmapQuarters } from '../../constants';
import { QuarterContainer, StyledTitle } from '../../Roadmap.styles';
import { Card } from '../Card';
import { DateFigure } from '../DateFigure';
import { Lines } from '../Lines';
import { Container, RoadmapMobileContent } from './MobileRoadmap.styles'

export function MobileRoadmap() {
  return (
    <Container>
      <StyledTitle>Roadmap</StyledTitle>
      <RoadmapMobileContent>
        {roadmapQuarters.map(quarter =>
          <QuarterContainer mobile key={quarter.number}>
            <Card title={quarter.title} items={quarter.items} />
            <DateFigure color={quarter.color} number={quarter.number} mobile />
            {quarter.number < 4 && <Lines numOfLines={4} vertical />}
          </QuarterContainer>)}
      </RoadmapMobileContent>
    </Container>
  )
}
