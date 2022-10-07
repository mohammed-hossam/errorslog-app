import { Badge } from "@components/Badge";
import { BadgeColor } from "@components/Badge/Badge";
import { Routes } from "@config/routes";
import { color, displayFont, space, textFont } from "@styles/theme";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

export enum ProjectLanguage {
  react = "react",
  node = "node",
  python = "python",
}

export enum ProjectStatus {
  stable = "stable",
  warning = "warning",
  critical = "critical",
}

export type ProjectsCardProps = {
  id: string;
  name: string;
  language: ProjectLanguage;
  numIssues: number;
  numEvents24h: number;
  status: ProjectStatus;
};

const languageNames = {
  [ProjectLanguage.react]: "React",
  [ProjectLanguage.node]: "Node.js",
  [ProjectLanguage.python]: "Python",
};

const statusColors = {
  [ProjectStatus.stable]: BadgeColor.success,
  [ProjectStatus.warning]: BadgeColor.warning,
  [ProjectStatus.critical]: BadgeColor.error,
};

export function ProjectsCard({
  name,
  language,
  numIssues,
  numEvents24h,
  status,
}: ProjectsCardProps) {
  return (
    <Container>
      <TopContainer>
        <NameAndIconContainer>
          <LanguageIcon src={`/icons/${language}.svg`} alt={language} />
          <div>
            <Name>{name}</Name>
            <Language>{languageNames[language]}</Language>
          </div>
        </NameAndIconContainer>
        <InfoContainer>
          <Issues>
            <IssuesTitle>Total issues</IssuesTitle>
            <IssuesNumber>{numIssues}</IssuesNumber>
          </Issues>
          <Issues>
            <IssuesTitle>Last 24h</IssuesTitle>
            <IssuesNumber>{numEvents24h}</IssuesNumber>
          </Issues>
          <Status>
            <Badge color={statusColors[status]}>{status}</Badge>
          </Status>
        </InfoContainer>
      </TopContainer>
      <BottomContainer>
        <Link href={Routes.issues} passHref>
          <ViewIssuesAnchor>View issues</ViewIssuesAnchor>
        </Link>
      </BottomContainer>
    </Container>
  );
}

export default ProjectsCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: white;
  box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
    0px 1px 2px rgba(16, 24, 40, 0.06);
  border-radius: 8px;
`;

const TopContainer = styled.div`
  padding: ${space(6)};
`;

const BottomContainer = styled.div`
  padding: ${space(4, 6)};
  border-top: 3px solid ${color("gray", 200)};
  display: flex;
  justify-content: flex-end;
`;

const NameAndIconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${space(6)};
`;

const LanguageIcon = styled.img`
  margin-right: ${space(3)};
`;

const Name = styled.div`
  ${textFont("md", "medium")}
`;

const Language = styled.div`
  color: ${color("gray", 500)};
  ${textFont("sm", "regular")}
`;

const InfoContainer = styled.div`
  display: flex;
`;

const Issues = styled.div`
  margin-left: ${space(6)};

  &:first-of-type {
    margin-left: 0;
  }
`;

const IssuesTitle = styled.div`
  margin-bottom: ${space(2)};
  color: ${color("gray", 500)};
  ${textFont("sm", "medium")}
`;

const IssuesNumber = styled.div`
  ${displayFont("md", "semibold")}
`;

const Status = styled.div`
  // line-height of issue number element
  height: 2.75rem;
  margin-top: auto;
  margin-left: ${space(6)};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

const ViewIssuesAnchor = styled.a`
  text-decoration: none;
  ${textFont("sm", "medium")}
`;