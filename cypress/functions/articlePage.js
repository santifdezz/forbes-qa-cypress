import {articleElements} from "../constants.js";
import { getElement } from "./commonFunctions.js";


export const checkUrl = (url) => cy.url().should('contain', url);
export const checkIndex = (name) => getElement(articleElements.ARTICLE_INDEX.replace('name', name)).should('be.visible');


export function orderTable(order){
    let article;
    if (order == "oldest"){
        article = getElement(articleElements.RICHEST_OLDEST)    
    } else {
        article = getElement(articleElements.RICHEST_YOUNGEST)
    }
    article.click();
    
}
export function checkOrder(order) {
    cy.xpath(articleElements.RICHEST_TABLE + articleElements.TABLE_CELL) // Asumiendo que "//td" selecciona correctamente las celdas con las edades
        .then($cells => {
            const ages = $cells.toArray().map(cell => parseInt(cell.innerText));

            for (let i = 0; i < ages.length - 1; i++) {
                if (order === "oldest") {
                    expect(ages[i]).to.be.at.least(ages[i + 1], 'La edad debe ser al menos igual a la del siguiente en la lista para "youngest"');
                } else {
                    expect(ages[i]).to.be.at.most(ages[i + 1], 'La edad debe ser como máximo igual a la del siguiente en la lista para "oldest"');
                }
            }
        });
}