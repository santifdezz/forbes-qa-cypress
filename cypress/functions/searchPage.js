import {homeElements, articleElements} from "../constants.js";
import { typeInput, onClick, getElement} from "./commonFunctions.js";

let articleTitleText;


export function verifyArticle() {
    cy.url().then((url) => {
        expect(url).to.include(articleElements.ARTICLE_URL);
    });
    getElement(articleElements.ARTICLE_TITLE).invoke('text').then((newPageTitleText) => {
        // Compara el texto del título del artículo con el texto del título en la nueva página
        expect(newPageTitleText).to.eq(articleTitleText);
    });

}
export function searchArticle(term) {
    onClick(homeElements.SEARCH_ICON);
    cy.url().then((url) => {
        expect(url).to.include(homeElements.SEARCH_URL);
    });
    cy.wait(2000)
    getElement(homeElements.SEARCH_BAR).as('searchBar');
    getElement('@searchBar').should('be.visible').should('be.enabled').then(($searchBar) => {
        typeInput($searchBar, term);
    });
    onClick(homeElements.SEARCH_ENTER, true);
}

export function getNoResults() {
    getElement(homeElements.NO_RESULTS).invoke('text').then((text) => {
        expect(text).to.include('No results');
    });
}
export const getSearchedArticle = () => getElement(homeElements.SEARCHED_RESULT).should('have.length.greaterThan', 1);
export function checkSearchedArticle(){
    getElement(homeElements.SEARCHED_RESULT).first().invoke('text').then((text) => {
        articleTitleText = text;
    });
    onClick(homeElements.SEARCHED_RESULT);
    getElement(articleElements.ARTICLE_TITLE_SEARCHED).first().invoke('text').then((newPageTitleText) => {
        expect(newPageTitleText).to.eq(articleTitleText);
    });
}

