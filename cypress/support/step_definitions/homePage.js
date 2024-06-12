import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import * as Browser from '../../functions/commonFunctions.js';
//import * as LoginPage from '../../functions/articlePage.js';
import * as HomePage from '../../functions/homePage.js';
import { homeElements } from "../constants.js";


// Background
Given('a unauthenticated user on the homepage', () => {
    Browser.visitPage();
});

When('the user clicks on the main article', () => {
    HomePage.clickMainArticle();
});

Then('the user should be redirected to the article page', () => {
    HomePage.verifyArticle();
});
