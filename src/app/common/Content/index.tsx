import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { setPageTitle } from "../utils/setPageTitle";
import {
  Container,
  PageTitleContainer,
  PageTitle,
  Wrapper,
  TitleWrapper,
  ContentContainer,
} from "./Content.styles";

export function Content({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  return (
    <Container>
      <PageTitleContainer>
        <TitleWrapper>
          <PageTitle>{setPageTitle(pathname)}</PageTitle>
        </TitleWrapper>
      </PageTitleContainer>
      <ContentContainer>
        <Wrapper>{children}</Wrapper>
      </ContentContainer>
    </Container>
  );
}
