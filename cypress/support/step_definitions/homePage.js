import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import * as Browser from '../../functions/commonFunctions.js';;
import * as HomePage from '../../functions/homePage.js';


// Background
Given('an unauthenticated user on the homepage', () => {
    Browser.visitPage();
});

When('the user clicks on the main article on the homepage', () => {
    HomePage.clickMainArticle();
});

Then('the user should be redirected to the article page', () => {
    HomePage.verifyArticle();
});
