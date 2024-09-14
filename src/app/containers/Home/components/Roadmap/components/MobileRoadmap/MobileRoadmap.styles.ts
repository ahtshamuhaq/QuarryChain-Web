import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.section`
  width: 100%;
  display: none;
  position: relative;
 
  ${media.lessThan("huge")`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0px;
  `}
`

export const RoadmapMobileContent = styled.div`
  ${media.between('large', 'huge')`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`