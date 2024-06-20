import {articleElements, homeElements, searchElements} from "../constants.js";
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
    cy.url().then((url) => {
        expect(url).to.include(searchElements.SEARCH_URL);
    });

    // Espera a que el elemento de la barra de búsqueda no solo sea visible sino también esté habilitado
    getElement(searchElements.SEARCH_BAR)
        .should('be.visible', {timeout: homeElements.TIMEOUT})
        .should('be.enabled', {timeout: homeElements.TIMEOUT})
        .click({force: true})
    
    typeInput(searchElements.SEARCH_BAR, term, true);                                                                                                                                                            

    onClick(searchElements.SEARCH_ENTER, true);
}

export function getNoResults() {
    getElement(searchElements.NO_RESULTS).invoke('text').then((text) => {
        expect(text).to.include('No results');
    });
}
export const getSearchedArticle = () => getElement(searchElements.SEARCHED_RESULT).should('have.length.greaterThan', 1);
export function checkSearchedArticle(){
    getElement(searchElements.SEARCHED_RESULT).first().invoke('text').then((text) => {
        articleTitleText = text;
    });
    onClick(searchElements.SEARCHED_RESULT);
    getElement(articleElements.ARTICLE_TITLE_SEARCHED).first().invoke('text').then((newPageTitleText) => {
        expect(newPageTitleText).to.eq(articleTitleText);
    });
}

