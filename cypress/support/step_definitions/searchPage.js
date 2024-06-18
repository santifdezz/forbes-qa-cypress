import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import * as HomePage from '../../functions/homePage.js';
import * as SearchPage from '../../functions/searchPage.js';

// Background
Given('an unauthenticated user on the search page', () => {
    HomePage.visitSearchPage();
});

When('the user enters valid "{string}" into the search bar', (term) => {
    SearchPage.searchArticle(term);
});

Then('the user should see search results that correspond to the search', () => {
    SearchPage.getSearchedArticle();
});

When('the user enters invalid "{string}" into the search bar', (invalid_term) => {
    SearchPage.searchArticle(invalid_term);
});

Then('the user should see No results', () => {
    SearchPage.getNoResults();
});