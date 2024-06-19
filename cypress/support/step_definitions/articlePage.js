import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import * as Browser from '../../functions/commonFunctions.js';
import * as ArticlePage from '../../functions/articlePage.js';
import * as HomePage from '../../functions/homePage.js';
import * as SearchPage from '../../functions/searchPage.js';
require('cypress-xpath')

// Background
Given('an unauthenticated user', () => {
    Browser.visitPage();
});

Given('the user is with the menu open on the homepage', () => {
    HomePage.visitMenu()
});
Given('the user clicks on a {string} on the menu', (category) => {
    HomePage.clickMenuCategory(category);
});



When('the user is redirected to the correct {string}', (url) => {
    ArticlePage.checkUrl(url);
});
Then('the article index should match the title: {string}', (title) => {
    ArticlePage.checkIndex(title)
});

Given('the user is on the menu on the billionaires category', () => {
    HomePage.visitBillionaireMenu();
});
Given('the user clicks the article: {string} on the menu', (article) => {
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