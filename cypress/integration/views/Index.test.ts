/// <reference types="Cypress" />
/// <reference path="../../support/commands.js" />

describe("Index", () => {
  before(() => {
    // TODO mock data when more time is available
    cy.visit("/");
  });

  // TODO test more than basic renders when mock data is available
  describe("Channel Selection Dropdown", () => {
    it("render correctly on load", () => {
      cy.get("#channel-selection-dropdown").should("be.visible");
    });
  });

  describe("Chart", () => {
    it("render correctly on load", () => {
      cy.get(".chart-container").should("be.visible");
    });
  });

  describe("Optimal Average", () => {
    it("render correctly on load", () => {
      cy.get(".optimal-average").should("have.text", "Total Session Overview");
    });
  });

  describe("Chart Navigation", () => {
    it("render correctly on load", () => {
      cy.get(".chart-nav-button").should("have.length", 6);
    });
  });
});
