import mockProjects from "../fixtures/projects.json";
const capitalize = (string: string) => {
  return string ? string.charAt(0).toUpperCase() + string.slice(1) : "";
};

describe("Project List", () => {
  beforeEach(() => {
    //m7tag 27ot deh 2bl ma5osh 3ala el localhost fl beforeeach, 3shan lw 3mlt el localhost el 2wal s3tha hynfz el data ele gaya mn el api ele fl localhost el 2wal, enma ana 3ayz 2a2lo eno y3ml intercept el 2wal w ydene data mo3yna fl fixtures (y3ny mn el 25er kda i should stub the request before the request already made)
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
    }).as("getProjects");

    cy.visit("http://localhost:3000/dashboard");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    //test things are working good first
    it("renders the projects list", () => {
      cy.contains("Frontend - Web Test").should("exist");
      cy.get("main").within(() => {
        cy.get("ul")
          .find("li")
          .each(($el, index) => {
            // check that project data is rendered
            console.log($el);
            cy.wrap($el).contains(mockProjects[index].name);
            cy.wrap($el).contains(capitalize(mockProjects[index].language));
            cy.wrap($el).contains(mockProjects[index].numIssues);
            cy.wrap($el).contains(mockProjects[index].numEvents24h);
            cy.wrap($el).contains(mockProjects[index].status);
            cy.wrap($el)
              .find("a")
              .should("have.attr", "href", "/dashboard/issues");
          });
      });
    });
  });
});

export {};
