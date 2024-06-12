import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {onClick, visitPage} from '../../functions/commonFunctions.js';
import * as ArticlePage from '../../functions/articlePage.js';
import * as HomePage from '../../functions/homePage.js';
import * as SearchPage from '../../functions/searchPage.js';

// Background
Given('an unauthenticated user', () => {
    visitPage();
});
Given('the user is on the menu', () => {
    HomePage.visitMenu()
});

When('the user clicks on a {string}', (category) => {
    HomePage.clickMenuCategory(category);
});

Then('the user is redirected to the correct {string}', (url) => {
    ArticlePage.checkUrl(url)
});



Given('the user is on the menu on the Billionaires Category', () => {
    HomePage.visitBillionaireMenu();
});
Given('the user clicks on {string}', (article) => {
    HomePage.clickArticle(article);
});

When('the user orders by {string} the richest table', (order) => {
    ArticlePage.orderTable(order);
});

Then('the table should be reordered by {string}', (order) => {
    ArticlePage.checkOrder(order);
});




Given('the user is on the search page', () => {
    HomePage.visitSearchPage();
});

When('the user enters {string} into the search bar', (term) => {
    SearchPage.searchArticle(term);
});

Then('the article title should be the same as the article search result', () => {
    SearchPage.checkSearchedArticle();
});