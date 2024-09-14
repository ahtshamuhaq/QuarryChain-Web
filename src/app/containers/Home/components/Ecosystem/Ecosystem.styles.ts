import styled from "styled-components";
import media from "styled-media-query";
import { Title } from "../../../../common/Typography/Title";

export const Container = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${media.lessThan("large")`
    height: auto;
    padding: 20px 0px;
  `}
`;

export const Content = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${media.lessThan("large")`
    width: 80%;
  `}
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 40px;

  ${media.lessThan("huge")`
    text-align: center;

  `}

  ${media.between("large", "huge")`
    font-size: 40px;
    line-height: 40px;
  `}

  ${media.lessThan("medium")`
    font-size: 30px;
    line-height: 30px;
  `}
`;
