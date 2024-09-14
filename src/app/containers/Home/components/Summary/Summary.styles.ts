import styled from "styled-components";
import media from "styled-media-query";
import { Title } from "../../../../common/Typography/Title";


/*
background: ${({
  theme: {
    colors: { neutral },
  },
}) => neutral[50]};

*/
export const Container = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(98, 109, 207, 0.3);

  ${media.lessThan("large")`
    height: auto;
    padding: 30px 0px;
  `}
`;

export const Content = styled.div`
  height: 90%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 80px;

  ${media.lessThan("huge")`
    font-size: 40px;
    text-align: center;
  `}

  ${media.between("medium", "large")`
    margin-bottom: 20px;
  `};

  ${media.lessThan("medium")`
    font-size: 30px;
    margin-bottom: 20px;
  `}
`;

export const Cards = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.between("medium", "large")`
    align-items: start;
  `};

  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`;
