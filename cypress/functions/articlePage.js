import {articleElements, newsletterElements} from "../support/constants.js";
import { onClick, visitPage, getElement } from "./commonFunctions.js";


export function checkUrl(url){
    cy.url().should('contain', url);
}


export function orderTable(order){
    let article;
    if (order == "oldest"){
        article = getElement(articleElements.RICHEST_OLDEST)    
    } else {
        article = getElement(articleElements.RICHEST_YOUNGEST)
    }
    article.click();
    
}
export function checkOrder(order){
    getElement(articleElements.RICHEST_TABLE).then(($rows) => {
        const rowCount = $rows.length;

        for (let i = 0; i < rowCount - 1; i++) {
            getElement(articleElements.TABLE_CELL.replace('{row}', i + 1)).invoke('text').then((age1Text) => {
                const age1 = parseInt(age1Text);

                getElement(articleElements.TABLE_CELL.replace('{row}', i + 2)).invoke('text').then((age2Text) => {
                    const age2 = parseInt(age2Text);

                    expect(age1).to.be.a('number');
                    expect(age2).to.be.a('number');

                    if (order == "oldest"){
                        expect(age1).to.be.at.least(age2);
                    } else {
                        expect(age1).to.be.at.most(age2);
                    }
                });
            });
        }
    });
}