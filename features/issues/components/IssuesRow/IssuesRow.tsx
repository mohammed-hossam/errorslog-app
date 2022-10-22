import { Badge } from "@components/Badge";
import { BadgeColor, BadgeSize } from "@components/Badge/Badge";
import { Issue, IssueLevel } from "@features/issues/types/issue.types";
import { ProjectLanguage } from "@features/projects/components/ProjectsCard/ProjectsCard";
import { color, space, textFont } from "@styles/theme";
import React from "react";
import styled from "styled-components";

type IssueRowProps = {
  projectLanguage: ProjectLanguage;
  issue: Issue;
};

const levelColors = {
  [IssueLevel.info]: BadgeColor.success,
  [IssueLevel.warning]: BadgeColor.warning,
  [IssueLevel.error]: BadgeColor.error,
};

function IssuesRow({
  projectLanguage,
  issue: { name, message, stack, level, numEvents, numUsers },
}: IssueRowProps) {
  const firstLineOfStackTrace = stack.split("\n")[1];

  return (
    <Row>
      {/* issue */}
      <IssueCell>
        <LanguageIcon
          src={`/icons/${projectLanguage}.svg`}
          alt={projectLanguage}
        />

        <ErrorTypeAndMessage>
          <ErrorType>{name}:&nbsp;</ErrorType>
          {message}
          <Stack>{firstLineOfStackTrace}</Stack>
        </ErrorTypeAndMessage>
      </IssueCell>
      {/* level */}
      <Cell>
        <Badge color={levelColors[level]} size={BadgeSize.sm}>
          {level}
        </Badge>
      </Cell>
      {/* event */}
      <Cell>{numEvents}</Cell>
      {/* user */}
      <Cell>{numUsers}</Cell>
    </Row>
  );
}

export default IssuesRow;

const Row = styled.tr`
  &:nth-child(2n) {
    background: ${color("gray", 50)};
  }
`;

const Cell = styled.td`
  padding: ${space(4, 6)};
  color: ${color("gray", 500)};
  ${textFont("sm", "regular")}
`;

const IssueCell = styled(Cell)`
  display: flex;
  align-items: center;
`;

const LanguageIcon = styled.img`
  width: ${space(10)};
  margin-right: ${space(3)};
`;

const ErrorTypeAndMessage = styled.div`
  color: ${color("gray", 900)};
`;
const Stack = styled.div`
  color: ${color("gray", 500)};
`;

const ErrorType = styled.span`
  ${textFont("sm", "medium")}
`;
