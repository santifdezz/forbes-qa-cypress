import {articleElements, constantElements, homeElements, newsletterElements} from "../support/constants.js";
import { onClick, visitPage, getElement, typeInput } from "./commonFunctions.js";


export function fillEmail(isValid) {
    cy.fixture('newsletter.json').then((data) => {;
        const fixtureEmail = isValid ? data.email : data.wrongemail;
        typeInput(newsletterElements.EMAIL_INPUT, fixtureEmail);
    });
}
export function checkNewsletter() {
    expect(newsletterElements.SUCCESFULL_SUBSCRIPTION).to.exist;
    onClick(newsletterElements.CLOSE_BOX);
    onClick(newsletterElements.NEWSLETTER_WEEKLY);
}
export function checkInvalidNewsletter() {
    getElement(newsletterElements.SEND_BUTTON).should('be.disabled');
}