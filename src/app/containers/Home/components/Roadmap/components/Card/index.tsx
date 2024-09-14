import { Container, ItemText, ListContainer, ListItem, StyledTitle } from './Card.styles';
import { RoadmapCardProps } from './types';

export function Card({ title, items }: RoadmapCardProps) {
  return (
    <Container>
      <StyledTitle>{title}</StyledTitle>
      <ListContainer>
        {items.map((item, index) => (
          <ListItem key={index}>
            <ItemText>
              {item}
            </ItemText>
          </ListItem>
        ))}
      </ListContainer>
    </Container>
  )
}
