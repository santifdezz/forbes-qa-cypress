import {homeElements} from "../constants.js";

// commonFunctions.js
export function visitPage() {
    cy.clearAllCookies();
    cy.visit(homeElements.HOME_URL, { failOnStatusCode: false });
    getElement(homeElements.ACCEPT_COOKIES).as('acceptButton');
    cy.get('@acceptButton').should('be.visible').click();
}
export const onClick = (selector, force = false) => getElement(selector).first().click({ force });
export const typeInput = (selector, text, force = false) => getElement(selector).type(text,{ force } );
export function checkRedirection(link){
    cy.url().then((url) => {
        assert.strictEqual(url, link);
    });
}

export function getElement(selector){
    return cy.get(selector);
}
