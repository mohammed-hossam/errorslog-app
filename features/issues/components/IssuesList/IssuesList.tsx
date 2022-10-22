import { IssueLevel } from "@features/issues/types/issue.types";
import { ProjectLanguage } from "@features/projects/components/ProjectsCard/ProjectsCard";
import { color, space, textFont } from "@styles/theme";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { IssuesRow } from "../IssuesRow";

function IssuesList() {
  const router = useRouter();

  const page = Number(router.query.page || 1);

  return (
    <Container>
      <Table>
        <thead>
          <HeaderRow>
            <HeaderCell>Issue</HeaderCell>
            <HeaderCell>Level</HeaderCell>
            <HeaderCell>Events</HeaderCell>
            <HeaderCell>Users</HeaderCell>
          </HeaderRow>
        </thead>
        <tbody>
          <IssuesRow
            projectLanguage={ProjectLanguage.react}
            issue={{
              id: "c9613c41-32f0-435e-aef2-b17ce758431b",
              projectId: "6d5fff43-d691-445d-a41a-7d0c639080e6",
              name: "TypeError",
              message: "Cannot read properties of undefined (reading 'length')",
              stack:
                "Cannot read properties of undefined (reading 'length') \n at eval (webpack-internal:///./pages/index.tsx:37:7) \n at invokePassiveEffectCreate (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23482:20)\n development.js:157:27)",
              level: IssueLevel.error,
              numEvents: 105,
              numUsers: 56,
            }}
          />
        </tbody>
      </Table>
      <PaginationContainer>
        <div>
          <PaginationButton
            // onClick={() => navigateToPage(page - 1)}
            disabled={page === 1}
          >
            Previous
          </PaginationButton>
          <PaginationButton
          // onClick={() => navigateToPage(page + 1)}
          // disabled={page === meta?.totalPages}
          >
            Next
          </PaginationButton>
        </div>
        <PageInfo>
          Page <PageNumber>1</PageNumber> of <PageNumber>1</PageNumber>
        </PageInfo>
      </PaginationContainer>
    </Container>
  );
}

export default IssuesList;

const Container = styled.div`
  background: white;
  border: 1px solid ${color("gray", 200)};
  box-sizing: border-box;
  box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1),
    0px 2px 4px -2px rgba(16, 24, 40, 0.06);
  border-radius: ${space(2)};
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const HeaderRow = styled.tr`
  border-bottom: 1px solid ${color("gray", 200)};
`;

const HeaderCell = styled.th`
  padding: ${space(3, 6)};
  text-align: left;
  color: ${color("gray", 500)};
  ${textFont("xs", "medium")};
`;

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${space(4, 6)};
  border-top: 1px solid ${color("gray", 200)};
`;

const PaginationButton = styled.button`
  height: 38px;
  padding: ${space(0, 4)};
  background: white;
  border: 1px solid ${color("gray", 300)};
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 6px;
  cursor: pointer;

  &:not(:first-of-type) {
    margin-left: ${space(3)};
  }
`;

const PageInfo = styled.div`
  color: ${color("gray", 300)};
  ${textFont("sm", "regular")}
`;

const PageNumber = styled.span`
  ${textFont("sm", "medium")}
`;
