import {homeElements} from "../support/constants.js";

// commonFunctions.js
export function visitPage() {
    cy.clearAllCookies();
    cy.visit(homeElements.HOME_URL, { failOnStatusCode: false });
    cy.wait(2000);
    onClick(homeElements.ACCEPT_COOKIES);
}

export function onClick(selector, force = false){
    getElement(selector).first().click({ force });
}

export function typeInput(selector, text) {
    getElement(selector).should('be.visible').should('be.enabled').type(text);
}
export function checkRedirection(link){
    cy.url().then((url) => {
        assert.strictEqual(url, link);
    });
}

export function getElement(selector){
    return cy.get(selector);
}
