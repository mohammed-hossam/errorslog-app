import React from "react";
import { Layout } from "@components/Layout";
import { IssuesList } from "@features/issues";
// type Props = {}

function IssuesPage() {
  return (
    <Layout
      title="Issues"
      info="Overview of errors, warnings, and events logged from your projects."
    >
      <IssuesList />
    </Layout>
  );
}

export default IssuesPage;
