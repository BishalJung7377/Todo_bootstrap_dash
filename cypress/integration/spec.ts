/// <reference types="cypress" />
import { values } from "cypress/types/lodash";
import { verify } from "cypress/types/sinon";

describe("SignupPage", () => {

  beforeEach(() => {
    cy.visit("/")
  })
  it('logintext', () => {
    cy.contains('Login To Your account');

  });
  it("Clicking on create acccount",()=>{
    cy.get(".create-acc").click();
    // cy.get(".signupname").type("Bishal");
    cy.get("input[name=name]").type("Bishal Jung");
    // cy.get('mat-radio-group').should('have.class', 'mat-radio-button').first().check();
    // cy.get("iconsinputs").get('.mat-radio-group').get(".mat-radio-button").get(".mat-radio-container").get(".mat-radio-button").get("[type=radio]").first().check();
    
    cy.get('[name="radio"]').get('[name="radio1"]').check({
      force: true
   });
    // cy.get('.mat-radio-group').get(".mat-radio-button").get("#mat-radio-2").select("Male")
    
    
    // cy.get('.mat-radio-group').get(".mat-radio-button").get("#mat-radio-2").get('[value="Male"]').check();
    cy.get("input[name=date]").type('12-10-2021') 
    cy.get("input[name=countryname]").type("Nepal")
    cy.get("input[name=phnumber]").type("9876543210")
    cy.get("input[name=email]").type("asdasd@asd.com")
    

  
    // cy.get(".iconsinput").get("gender").first().check("Male") .mat-radio-2-input
  });
})
