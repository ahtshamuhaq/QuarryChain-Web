import styled from 'styled-components';
import media from 'styled-media-query';
import { assetPaths } from '../../../../common/constants';
import { Title } from '../../../../common/Typography/Title';
import { SetStylesPerQuarter } from './utils';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
  background: url(${assetPaths.POLYGONS_BACKGROUND});

  ${media.lessThan("huge")`
    display: none;  
  `}
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 0px;
`

export const RoadmapContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 70px;

  ${media.between("large", "huge")`
    font-size: 40px;
    line-height: 40px;
    margin-bottom: 120px;
  `}

  ${media.lessThan("large")`
    text-align: center;
    margin-bottom: 140px;
  `}

  ${media.lessThan("medium")`
    font-size: 30px;
    margin-bottom: 90px;
  `}
`;

export const QuarterContainer = styled.div<{ quarter?: number, mobile?: boolean }>`
  position: relative;
  border: 5px dashed ${({ theme: { colors: { neutral } } }) => neutral[100]};
  border-radius: 12px;

  ${({ quarter }) => quarter && SetStylesPerQuarter(quarter)}

  ${media.between('large', 'huge')`
    width: 50%;
  `}

  ${media.lessThan("huge")`
    border: none;
    margin-bottom: 90px;

    &:last-child{
      margin-bottom: 0px;
    }
  `}

  ${media.lessThan("medium")`
    margin-bottom: 70px;
  
  `}


`;

