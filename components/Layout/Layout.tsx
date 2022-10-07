import { breakpoint, color, displayFont, space, textFont } from "@styles/theme";
import React from "react";
import styled from "styled-components";
import { SidebarNavigation } from "@components/SidebarNavigation";
type PageContainerProps = {
  children: React.ReactNode;
  title: string;
  info: string;
};

export default function Layout({ children, title, info }: PageContainerProps) {
  return (
    <Container>
      <SidebarNavigation />

      <Main>
        <ContentContainer>
          <Title>{title}</Title>
          <Info>{info}</Info>
          {children}
        </ContentContainer>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${color("gray", 900)};

  @media (min-width: ${breakpoint("desktop")}) {
    flex-direction: row;
  }
`;

const Main = styled.main`
  flex: 1;
`;

const ContentContainer = styled.div`
  min-height: calc(100vh - ${({ theme }) => theme.size.headerHeight});
  /* min-height: 100vh; */
  /* margin-top: ${({ theme }) => theme.size.headerHeight}; */
  padding: ${space(20, 3)};
  background: white;

  @media (min-width: ${breakpoint("desktop")}) {
    min-height: calc(100vh - ${space(3)});
    /* min-height: 100vh; */
    margin-top: ${space(3)};
    padding: ${space(8)};
    border-top-left-radius: ${space(10)};
  }
`;

const Title = styled.h1`
  margin: ${space(0, 0, 1)};
  color: ${color("gray", 900)};
  ${displayFont("sm", "medium")}
`;

const Info = styled.div`
  margin-bottom: ${space(8)};
  color: ${color("gray", 500)};
  ${textFont("md", "regular")}
`;
