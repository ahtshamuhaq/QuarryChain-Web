import styled from "styled-components";
import media from "styled-media-query";
import { Span } from "../../../../common/Typography/Span";
import { Title } from "../../../../common/Typography/Title";


export const Container = styled.section`
  height: 100%;
  background: rgba(208, 211, 241, 0.24);
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center ;
  background-repeat: no-repeat;
padding:20px 0;
  ${media.lessThan("large")`
    height: auto;
    padding: 20px 0px;
  `}

  ${media.lessThan("medium")`
    height: auto;
  `}
`;

export const Content = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.lessThan("huge")`
    width: 80%;
  `}

  ${media.lessThan("medium")`
    justify-content: center;
  `}
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 60px;
  padding-top:40px;

  ${media.lessThan("huge")`
    text-align: center;
    margin-bottom: 30px;
  `}

  ${media.between("large", "huge")`
    font-size: 40px;
    line-height: 40px;
  `}

  ${media.lessThan("medium")`
    font-size: 30px;
    margin-bottom: 30px;
  `}
`;

export const DataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`;

export const ChartAndMarketCapContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`;

export const ChartImage = styled.img`
  height: 475px;
  box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.2);

  ${media.lessThan("medium")`
    display: none;
  `}

  ${media.lessThan("huge")`
    height: auto;
    width: 70%;
  `}
`;

export const ChartCardContainer = styled.div`
  width: 100%;
  max-width: 218px;

  ${media.between("large", "huge")`
    width: 25%;
  `}

  ${media.lessThan("huge")`
    height: auto;
  `}


  ${media.lessThan("medium")`
    max-width: none;
  `}
`;

export const CardsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`;

export const SingleCardContainer = styled.div`
  width: 30%;
  margin-bottom: 20px;

  ${media.lessThan("medium")`
    width: 100%;
  `}
`;

export const DisclaimerContainer = styled.div``;

export const StyledSpan = styled(Span)`
  font-size: 16px;
  color: ${({
  theme: {
    colors: { neutral },
  },
}) => neutral[200]};
`;
