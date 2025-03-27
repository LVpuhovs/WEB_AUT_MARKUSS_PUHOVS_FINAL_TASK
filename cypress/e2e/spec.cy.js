import {AutomationPracticePage} from "../PageObjects/AutomationPracticePage";

describe('Final task', () => {
  context("Automation", () => {
    beforeEach(() => {
      AutomationPracticePage.visit();
    });

    it.only("practice form", () => {
      AutomationPracticePage.firstNameField.type("John");
      AutomationPracticePage.lastNameField.type("Doe");
      AutomationPracticePage.emailField.type("johndoe@email.com");
      AutomationPracticePage.genderButton.contains("Male").click();
      AutomationPracticePage.NumberField.type("2134567890");
      AutomationPracticePage.DateOfBirth.click();
      AutomationPracticePage.SelectYear.select("1930");
      AutomationPracticePage.SelectMonth.select("February");
      AutomationPracticePage.SelectDay.click();
      AutomationPracticePage.SubjectField.type("Economics");
      AutomationPracticePage.subjectAutocomplete.contains("Economics").click();
      AutomationPracticePage.hobbyCheckbox.click({force: true});
      AutomationPracticePage.addressField.type("Home Square 1");
      cy.get('input[type=file]').selectFile('../WEB_AUT_MARKUSS_PUHOVS_FINAL_TASK/cypress/Files/stickman.jpeg');
      AutomationPracticePage.state.click();
      cy.get('#react-select-3-input').type('NCR', { force: true }).type('{enter}');
      AutomationPracticePage.city.click({force: true});
      cy.get('#react-select-4-input').type('Delhi', { force: true }).type('{enter}');

      AutomationPracticePage.submitButton.click();

      AutomationPracticePage.validationFields.should("contain.text","John Doe");
      AutomationPracticePage.validationFields.should("contain.text","johndoe@email.com");
      AutomationPracticePage.validationFields.should("contain.text","Male");
      AutomationPracticePage.validationFields.should("contain.text","2134567890");
      AutomationPracticePage.validationFields.should("contain.text","28 February,1930");
      AutomationPracticePage.validationFields.should("contain.text","Economics");
      AutomationPracticePage.validationFields.should("contain.text","Music");
      AutomationPracticePage.validationFields.should("contain.text","stickman.jpeg");
      AutomationPracticePage.validationFields.should("contain.text","Home Square 1");
      AutomationPracticePage.validationFields.should("contain.text","NCR Delhi");





    });
  });
});