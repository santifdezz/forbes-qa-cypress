import {homeElements, articleElements, newsletterElements} from "../support/constants.js";
//import * as loginScreen from "./articlePage.js";
import { typeInput, onClick, visitPage, getElement } from "./commonFunctions.js";

let articleTitleText;

export function visitMenu() {
    visitPage();
    onClick(homeElements.MENU_ICON);
}
export function visitSearchPage() {
    visitPage();
    onClick(homeElements.SEARCH_ICON);
    cy.url().then((url) => {
        expect(url).to.include(homeElements.SEARCH_URL);
    });
    cy.wait(2000)
}

export function visitNewsletter() {
    visitMenu();
    cy.get(homeElements.NEWSLETTER_TEXT).then(($a) => {
        const url = $a.prop('href');

        // Visita la URL en la misma pestaña
        cy.visit(url);
        cy.url().then((url) => {
            expect(url).to.include(newsletterElements.NEWSLETTER_URL);
        });
    });

}

export function verifyArticle() {
    cy.url().then((url) => {
        expect(url).to.include(articleElements.ARTICLE_URL);
    });
    cy.get(articleElements.ARTICLE_TITLE).invoke('text').then((newPageTitleText) => {
        // Compara el texto del título del artículo con el texto del título en la nueva página
        expect(newPageTitleText).to.eq(articleTitleText);
    });

}
export function visitBillionaireMenu() {
    visitPage();
    onClick(homeElements.MENU_ICON);
    onClick(homeElements.BILLIONAIRES, true);
}

export function clickArticle(article){
    onClick(homeElements.LINK_MENU.replace('name', article));
}
export function clickMenuCategory(cat){
    onClick(homeElements.CATEGORY_MENU.replace('name', cat));
}

export function clickMainArticle() {
    cy.get(homeElements.ARTICLE_TITLE).invoke('text').then((text) => {
        articleTitleText = text;
    });
    onClick(homeElements.ARTICLE_TITLE);
}
