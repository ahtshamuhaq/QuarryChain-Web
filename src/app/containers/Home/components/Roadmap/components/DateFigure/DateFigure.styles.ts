import styled from 'styled-components';
import media from 'styled-media-query';
import { Span } from '../../../../../../common/Typography/Span';
import { setHexagonPositionPerQuarter } from '../../utils';

export const Container = styled.div<{ quarter?: number }>`
  position: absolute;
  display: flex;
  align-items: center;
  left: 150px;
  height: auto;

  ${({ quarter }) => quarter && setHexagonPositionPerQuarter(quarter)}

  ${media.lessThan("huge")`
    top: -70px;
    left: 310px;
  `}

  @media (max-width: 1366px) {
    left: 291px;
  }

  @media (max-width: 1280px) {
    left: 270px;
  }

  ${media.lessThan("large")`
    top: -69px; 
    left: 112px;
  `}

  ${media.lessThan("medium")`
    top: -75px; 
    left: 121px;
  `}
`;

export const Hexagon = styled.div<{ color: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px; 
  height: 57px;
  background-color: ${({ color }) => color};
  border-color: ${({ color }) => color};

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
  };

  &:before {
    bottom: 100%;
    border-bottom: 28.87px solid ${({ color }) => color};
  };

  &:after {
    top: 100%;
    width: 0;
    border-top: 28.87px solid ${({ color }) => color};
  };


  ${({ color }) => media.lessThan('medium')`
    position: relative;
    width: 80px; 
    height: 46px;
    margin: 23.09px 0;

    &:before,
    &:after {
      content: "";
      position: absolute;
      width: 0;
      border-left: 40px solid transparent;
      border-right: 40px solid transparent;
    }

    &:before {
      bottom: 100%;
      border-bottom: 23.09px solid ${color};
    }

    &:after {
      top: 100%;
      width: 0;
      border-top: 23.09px solid ${color};
    }
  `}
  }
`;

export const HexagonYearContainer = styled.div`
  margin-bottom: 5px;
`

export const HexagonQuarter = styled.div``;

export const StyledSpan = styled(Span) <{ small?: boolean }>`
  font-size: 32px;
  line-height: 32px;
  color: ${({ theme: { colors: { neutral } } }) => neutral[0]};
  
  ${media.lessThan("medium")`
    font-size: 17px;
    line-height: 17px;
  `};

  ${({ small }) => small && `
    font-size: 18px;
    line-height: 23px;
  `}


  ${({ small }) => small && media.lessThan('medium')`
    font-size: 16px;
    line-height: 15px;
  `}

`;