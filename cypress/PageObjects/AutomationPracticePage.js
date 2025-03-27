import {BasePage} from "./basePage";
export class AutomationPracticePage extends BasePage {
    static get url() {
        return "automation-practice-form";
    }

    static get firstNameField(){
        return cy.get("#firstName");
    }
    static get lastNameField(){
        return cy.get("#lastName");
    }
    static get emailField(){
        return cy.get("#userEmail");
    }
    static get genderButton(){
        return cy.get("[class=\"col-md-9 col-sm-12\"]");
    }
    static get NumberField(){
        return cy.get("#userNumber");
    }
    static get DateOfBirth(){
        return cy.get("#dateOfBirthInput");
    }
    static get SelectYear(){
        return cy.get("[class=\"react-datepicker__year-select\"]");
    }
    static get SelectMonth(){
        return cy.get("[class=\"react-datepicker__month-select\"]");
    }
    static get SelectDay(){
        return cy.get("[aria-label=\"Choose Friday, February 28th, 1930\"]");
    }
    static get SubjectField(){
        return cy.get("#subjectsContainer");
    }
    static get subjectAutocomplete(){
        return cy.get(".subjects-auto-complete__option");
    }
    static get hobbyCheckbox(){
        return cy.get("#hobbies-checkbox-3");
    }
    static get addressField(){
        return cy.get("#currentAddress");
    }
    static get state(){
        return cy.get("#state");
    }
    static get city(){
        return cy.get("#city");
    }
    static get submitButton(){
        return cy.get("#submit");
    }
    static get validationFields(){
        return cy.get("[class=\"table table-dark table-striped table-bordered table-hover\"]");
    }
}